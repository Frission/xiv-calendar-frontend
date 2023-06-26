import Image from "next/image"
import styles from "./ThemeLogo.module.scss"
import { HTMLProps } from "@/types/types"

const ThemeLogo = (props: ThemeLogoProps) => {
    return (
        <div {...props} className={styles.logo + " " + props.className}>
            <Image src={require("/images/xiv-logo.png")} alt="xiv logo" />
            <p>
                <span>XIV</span>Calendar
            </p>
        </div>
    )
}

export interface ThemeLogoProps extends HTMLProps<HTMLDivElement> {

}

export default ThemeLogo