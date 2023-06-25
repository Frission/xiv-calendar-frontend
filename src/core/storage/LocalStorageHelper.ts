import { devlog } from "@/util/devlog"
import { toInteger } from "lodash"

const Keys = {
    discordUrlState: "discord_url_state"
}

export const setDiscordURLState = () => {
    try {
        let randomString = ""

        for (let i = 0; i < 20; i++) {
            randomString += String.fromCharCode(97 + toInteger(Math.random() * 25)) + String.fromCharCode(toInteger(Math.random() * 5))
        }

        localStorage.setItem(Keys.discordUrlState, randomString)
    } catch (err) {
        devlog(err)
    }
}

export const getDiscordURLState = () => {
    try {
        return localStorage.getItem(Keys.discordUrlState)
    } catch (err) {
        devlog(err)
    }
}
