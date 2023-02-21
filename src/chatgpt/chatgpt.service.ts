import { Injectable } from '@nestjs/common';
import type { ChatGPTAPI } from 'chatgpt';
import 'isomorphic-fetch';
const importDynamic = new Function('modulePath', 'return import(modulePath)');

@Injectable()
export class ChatgptService {
  async sendMessage(prompt: string): Promise<{ text: string }> {
    const { ChatGPTUnofficialProxyAPI } = await importDynamic('chatgpt');
    const chatgptApi: ChatGPTAPI = new ChatGPTUnofficialProxyAPI({
      accessToken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiI5OTYyNTEzODlAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdlb2lwX2NvdW50cnkiOiJLUiJ9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItYWsyU3EzbkhDamtzSm9rOWIyQWRzQ3NVIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJhdXRoMHw2MzkyMDNhODEwYjFmZjNmM2YwNTJkZDYiLCJhdWQiOlsiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MSIsImh0dHBzOi8vb3BlbmFpLm9wZW5haS5hdXRoMGFwcC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjc2NDQ0NTAwLCJleHAiOjE2Nzc2NTQxMDAsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.eikHipQJizD02zuQ4z9GyC0kQ0ftnjkNooXif0RbVVI5amDcA8e1BEeYpNZSoX-tL4EcL1rq-BDLMza1BLBmC3qGlFOW3-l7_s1iiiY9X2LPwLtNzbOWygrNc6uFGES2Sd25iws8ZsXjYJMRrjA6J-yNyOcWYJTSPRWXWq7D2iiro1YqucrRScHhoB6wj6EDRGIVIr6kBOedSS_QUZIfvT2I5Tp6pI-3PF8slDxOi7-TC4TR3tuGPUu0qdZ8klxOdU8RrOOvhLCeyjSJaO8aPVjGEltvfOPkpFClt_7l2HZrIiOJD78t058Nfn-6SSS8CjYURZhf9Y7E8zFNgINWAg',
    });
    const res = await chatgptApi.sendMessage(prompt, {
      conversationId: '75036419-1744-4ad2-ba51-dd3d1d792e29',
      parentMessageId: '77610b5a-3ccc-4b9b-9b5e-cca8ba129a8c',
      onProgress: (p) => {
        console.log('p', p);
      },
    });
    return { text: JSON.stringify(res) };
  }
}
