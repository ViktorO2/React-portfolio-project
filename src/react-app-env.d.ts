/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string;
  readonly VITE_POKEMON_BASE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
