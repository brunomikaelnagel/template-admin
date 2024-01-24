// Icon
import { IconError } from "@/Icons"

// CSS
import styles from "./toastError.module.css"

interface IToastErrorProps {
    message: string
}

export default function ToastError( { message }: IToastErrorProps ){
    return (
        <div className={styles.container}>
            {IconError}
            <div className={styles.information}>
                <p className={styles.title}>Error!</p>
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    )
}