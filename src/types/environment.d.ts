declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_DISCORD_OAUTH2_URL: string | undefined
        }
    }
}

export {}