export interface User {
  email: string
  token: string
}

export interface EnvConfig {
  AI_TYPE: 'openai' | 'gemini' | 'custom' | 'copilot'
  AI_API_KEY: string
  OPENAI_BASE_URL: string
  AI_MAX_TOKENS: string
  AI_TEMPERATURE: string
  TRANSLATE_TYPE: 'shortcut' | 'ai' | 'deeplx' | 'libre_translate'
  LIBRE_TRANSLATE_TYPE: 'reverse' | 'api'
  LIBRE_TRANSLATE_ENDPOINT?: string
  LIBRE_TRANSLATE_API_KEY?: string
  DEEPLX_PROXY_ENDPOINT?: string
  DEEPLX_ACCESS_TOKEN?: string
  PORT: string
  HOST: string
  ENV: string
  DEBUG: boolean
  MODE: 'local' | 'remote'
}

export const KeyOfEnvConfig: (keyof EnvConfig)[] = [
  'AI_TYPE',
  'AI_API_KEY',
  'OPENAI_BASE_URL',
  'AI_MAX_TOKENS',
  'AI_TEMPERATURE',
  'TRANSLATE_TYPE',
  'LIBRE_TRANSLATE_TYPE',
  'LIBRE_TRANSLATE_ENDPOINT',
  'LIBRE_TRANSLATE_API_KEY',
  'DEEPLX_PROXY_ENDPOINT',
  'DEEPLX_ACCESS_TOKEN',
  'PORT',
  'HOST',
  'ENV',
  'DEBUG',
  'MODE',
]

export interface AIConfig {
  type: 'openai' | 'gemini' | 'custom' | 'copilot'
  key: string
  endpoint?: string
  max_tokens?: string
  temperature: string
}

export interface TranslateFrom {
  source: string
  q: string
  target: string
  format: 'text'
}

export interface TranslateTo {
  data: {
    translations: {
      translatedText: string
      detectedSourceLanguage?: string
    }[]
  }
}

export type TranslateShortcutBody = Pick<TranslateFrom, 'source' | 'target' | 'q'>
export interface AIGenerateContent {
  content: string
  detectedSourceLanguage?: string
}

export interface GithubCopilotTokenAuthorizationRemoteBody {
  annotations_enabled: boolean
  chat_enabled: boolean
  chat_jetbrains_enabled: boolean
  code_quote_enabled: boolean
  copilot_ide_agent_chat_gpt4_small_prompt: boolean
  copilotignore_enabled: boolean
  expires_at: number
  intellij_editor_fetcher: boolean
  prompt_8k: boolean
  public_suggestions: string
  refresh_in: number
  sku: string
  snippy_load_test_enabled: boolean
  telemetry: string
  token: string
  tracking_id: string
  vsc_electron_fetcher: boolean
  vsc_panel_v2: boolean
}

export interface GithubCopilotTokenAuthorization {
  app_token: string
  c_token: string
  expires_at: number
  vscode_machineid: string
  vscode_sessionid: string
  session_expires_at: number
  last_touched: number
}
