import { getDiscordURLState, setDiscordURLState } from "@/core/storage/LocalStorageHelper"

export const getDiscordLoginURL = () => {
    let state = getDiscordURLState()

    if(state == null) {
        setDiscordURLState()
        state = getDiscordURLState()
    }

    return process.env.NEXT_PUBLIC_DISCORD_OAUTH2_URL?.replace("{{state}}", getDiscordURLState() as string) ?? ""
}
