import React from "react"
import { getDiscordLoginURL } from "@/core/network/auth/discord"
import { useRouter } from "next/router"


export const useDiscordLogin = (): [discordLoginURL: string | undefined] => {

    const router = useRouter()

    const [discordLoginURL, setDiscordLoginURL] = React.useState<string | undefined>(undefined)

    React.useEffect(() => {
        if (router.query.code == null || router.query.state == null)
            setDiscordLoginURL(getDiscordLoginURL())
        else {
            // TODO: create a user from backend
        }
    }, [])

    return [discordLoginURL]
}
