// React
import { ReactNode } from "react"

// CSS
import styles from "./conteudo.module.css"

// interface
import { TTheme } from "@/interface/theme"

interface IConteudoProps {
    children: ReactNode
    theme: TTheme
}

export default function Conteudo( { children, theme }: IConteudoProps ){

    const themeCls = theme + "_theme"

    return(
        <main className={`${styles.container} ${themeCls}`}>
            {children}
        </main>
    )
}