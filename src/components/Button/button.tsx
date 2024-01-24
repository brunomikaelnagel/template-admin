// React
import { ButtonHTMLAttributes, CSSProperties } from "react"

// CSS
import styles from "./button.module.css"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean
    bgColor?: string
    textColor?: string
}

export default function Button( props: IButtonProps ){

    const { children, fullWidth, bgColor, textColor, ...restProps } = props

    const dynamic_styles: CSSProperties = {
        width: fullWidth ? "100%" : "auto",
        backgroundColor: bgColor??"",
        color: textColor??""
    }

    return (
        <button className={styles.button} style={dynamic_styles} {...restProps} >
            {children}
        </button>
    )
}