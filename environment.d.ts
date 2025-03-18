declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV: 'development' | 'production';
    }
  }
}

export {};
