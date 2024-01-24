"use client"

// CSS
import styles from "./header.module.css"

// Components
import TitlePage from "../TitlePage"
import Profile from "../Profile"

interface IHeaderProps {
    title: string
    subtitle: string
    theme: string
}

export default function Header( { title, subtitle, theme }: IHeaderProps ){

    const themeCls = theme + "_theme"

    return(
        <header className={`${styles.container} ${themeCls}`}>
            <TitlePage title={title} subtitle={subtitle} />
            <Profile />
        </header>
    )
}