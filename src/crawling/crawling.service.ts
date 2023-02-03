import { Injectable } from '@nestjs/common';
import pt from 'puppeteer';

@Injectable()
export class CrawlingService {
  async getData() {
    const browser = await pt.launch();
    const page = await browser.newPage();

    await page.goto('https://www.67tool.com/', {
      timeout: 30 * 1000,
      waitUntil: 'networkidle2',
    });

    // 如果目标网站没有引入jQuery,可以在page.goto后自行引入
    await page.mainFrame().addScriptTag({
      url: 'https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js',
    });

    // 设置打开的页面大小
    await page.setViewport({
      width: 1920,
      height: 2000,
    });

    // const imgs = await page.evaluate(() => {
    //   const aList = document.querySelectorAll('.item-list .block a');
    //   return Array.prototype.map.call(aList, (img) => ({
    //     url: img.href,
    //   }));
    // });

    // const imgs = await page.$$eval('.item-list .block a', (options: any[]) => {
    //   return options.map((option) => {
    //     return {
    //       href: option.href,
    //       title: option.children[0].children[1].textContent.trim(),
    //       desc: option.children[1].textContent.trim(),
    //     };
    //   });
    // });

    const imgs = await page.$$eval('.item-list .block a', (options: any[]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const $ = window.$;
      return options.map((option) => {
        return {
          href: $(option).attr('href'),
          title: option.children[0].children[1].textContent.trim(),
          desc: option.children[1].textContent.trim(),
        };
      });
    });

    await browser.close();
    return {
      data: imgs,
      success: true,
    };
  }
}
