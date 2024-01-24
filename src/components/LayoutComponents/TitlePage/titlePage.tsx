// CSS
import styles from "./titlePage.module.css"

interface ITitlePageProps {
    title: string
    subtitle: string
}

export default function TitlePage( { title, subtitle }: ITitlePageProps ){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}