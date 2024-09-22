/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROXY: string;
  readonly VITE_EMAIL_SUFFIX: string;
  readonly VITE_FULL_SITE_NAME: string;
  readonly VITE_SHORT_SITE_NAME: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
