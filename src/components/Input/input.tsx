// React
import { InputHTMLAttributes } from "react"

// CSS
import styles from "./input.module.css"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function Input( props: IInputProps ){

    const { label, ...restProps } = props

    return (
        <label className={styles.container}>
            {label}
            <input className={styles.input} {...restProps} />
        </label>
    )
}