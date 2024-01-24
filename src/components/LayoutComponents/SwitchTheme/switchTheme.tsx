// Context
import { useAppContext } from "@/context/AppContext"

// Icons
import { IconSun, IconMoon } from "@/Icons"

// CSS
import styles from "./switchTheme.module.css"

export default function SwitchTheme(){

    const { themeMode, toggleTheme } = useAppContext()
    
    return (
        <div>
            {
                themeMode === "dark" && (
                    <div onClick={toggleTheme} className={styles.container_light}>
                        <div className={styles.light_icon}>
                            {IconSun}
                        </div>
                        <span className={styles.light_text} >Claro</span>
                    </div>
                )
            }

            {
                themeMode === "light" && (
                    <div onClick={toggleTheme} className={styles.container_dark}>
                        <div className={styles.dark_icon}>
                            {IconMoon}
                        </div>
                        <span className={styles.dark_text} >Escuro</span>
                    </div>
                )
            }
        </div>
    )
}