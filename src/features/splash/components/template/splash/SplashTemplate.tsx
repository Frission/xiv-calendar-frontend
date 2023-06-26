import React from "react"
import styles from "./SplashTemplate.module.scss"
import ThemeLogo from "@/components/atom/ThemeLogo/ThemeLogo"
import { useDiscordLogin } from "@/features/splash/hooks/useDiscordLogin"

const SplashTemplate = () => {

    const [discordLoginURL] = useDiscordLogin()

    return (
        <div className={styles.container}>
            <ThemeLogo className={styles.logo} />

            {
                discordLoginURL != null &&
                <button className={styles.discordButton}>
                    <a target="_blank" href={discordLoginURL} rel="noopener noreferrer">
                        Login with Discord
                    </a>
                </button>
            }
        </div>
    )
}

export default SplashTemplate