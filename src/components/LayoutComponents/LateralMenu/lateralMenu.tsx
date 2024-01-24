
// Icons
import { IconHome, IconeAdjustments, IconBell, IconLogout } from "../../../Icons"

// Components
import MenuItem from "../MenuItem"

// Types
import { TTheme } from "@/interface/theme"

// Context
import { useAuthContext } from "@/context/AuthContext"

// CSS
import styles from "./lateralMenu.module.css"

interface ILateralMenuProps {
    theme: TTheme
}

export default function LateralMenu( { theme }: ILateralMenuProps ){

    const { logout } = useAuthContext()

    const MenuTheme = theme + "_menu"
    const MenuItemTheme = theme + "_menu_item"
    const MenuItemLogoutTheme = theme + "_logout_menu_item"
    
    return (
        <aside className={`${styles.container} ${MenuTheme}`}>
            <ul className={styles.menu_area}>
                <MenuItem href="/" icon={IconHome} title="Home" theme={MenuItemTheme} />
                <MenuItem href="/ajustes" icon={IconeAdjustments} title="Ajustes" theme={MenuItemTheme}/>
                <MenuItem href="/notificacao" icon={IconBell} title="Notificações" theme={MenuItemTheme}/>
            </ul>
            <ul className={styles.menu_area}>
                <MenuItem  icon={IconLogout} title="Logout" theme={MenuItemLogoutTheme} action={logout} />
            </ul>
        </aside>
    )
}