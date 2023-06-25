declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_OAUTH2_URL: string | undefined
        }
    }
}

export {}