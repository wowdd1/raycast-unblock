import { GoogleGenerativeAI } from '@google/generative-ai'
import { getAIConfig } from '../../../utils/env.util'
import type { AIGenerateContent } from '../../../types'

export async function GeminiGenerateContent(msg: string): Promise<AIGenerateContent> {
  const genAI = new GoogleGenerativeAI(getAIConfig().key)
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  model.generationConfig = {
    ...model.generationConfig,
    candidateCount: 1,
    maxOutputTokens: getAIConfig().max_tokens ? Number(getAIConfig().max_tokens) : undefined,
    temperature: Number(getAIConfig().temperature),
  }
  const result = await model.generateContent(msg)
  const response = await result.response
  const text = response.text()
  return {
    content: text,
  }
}
