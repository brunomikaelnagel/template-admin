// CSS
import styles from "./menuItem.module.css"

interface IMenuItemProps {
    theme: string
    href?: string
    title: string
    icon: any
    action?: () => Promise<void>
}

export default function MenuItem( { href, icon, title, theme, action }: IMenuItemProps ){

    return(
        <li className={`${styles.container} ${theme}`}>
            <a className={styles.link} href={href} onClick={action} >
                <span>{icon}</span>
                <span>{title}</span>
            </a>
        </li>
    )
}