import React from "react"
import styles from "./SplashTemplate.module.scss"
import ThemeLogo from "@/components/atom/ThemeLogo/ThemeLogo"
import { getDiscordLoginURL } from "@/core/network/auth/discord"

const SplashTemplate = () => {

    const [discordLoginURL, setDiscordLoginURL] = React.useState<string | undefined>(undefined)

    React.useEffect(() => {
        setDiscordLoginURL(getDiscordLoginURL())
    }, [])

    return (
        <div className={styles.container}>
            <ThemeLogo className={styles.logo} />

            <button className={styles.discordButton}>
                {
                    discordLoginURL != null &&
                    <a target="_blank" href={discordLoginURL} rel="noopener noreferrer">
                        Login with Discord
                    </a>
                }
            </button>
        </div>
    )
}

export default SplashTemplate