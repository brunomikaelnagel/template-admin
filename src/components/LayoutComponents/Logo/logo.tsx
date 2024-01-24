// NextJs
import Link from "next/link"

// CSS
import styles from "./logo.module.css"

interface ILogoProps {
    src: string
    alt: string
}

export default function Logo(){
    return (
        <div className={styles.container}>
            <Link href={"/"} >
                <div className={styles.logo}>
                    AT
                </div>
            </Link>
        </div>
    )
}