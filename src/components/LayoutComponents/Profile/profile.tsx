// Context
import { useAuthContext } from "@/context/AuthContext"

// Components
import Avatar from "../Avatar"
import SwitchTheme from "../SwitchTheme/switchTheme"

// CSS
import styles from "./profile.module.css"

export default function Profile(){

    const { user } = useAuthContext()

    return (
        <div className={styles.container}>
            <SwitchTheme />
            <Avatar img={user?.imageUrl} />
        </div>
    )
}