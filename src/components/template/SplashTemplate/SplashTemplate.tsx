import React from "react"
import styles from "./SplashTemplate.module.scss"
import ThemeLogo from "@/components/atom/ThemeLogo/ThemeLogo"

const SplashTemplate = () => {

    return (
        <div className={styles.container}>
            <ThemeLogo className={styles.logo} />

            <button className={styles.welcomeButton}>
                <p>
                    Welcome
                </p>
            </button>
        </div>
    )
}

export default SplashTemplate