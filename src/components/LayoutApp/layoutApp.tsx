"use client"

// React
import { ReactNode } from "react"

// Componente
import Header from "../LayoutComponents/Header"
import LateralMenu from "../LayoutComponents/LateralMenu"
import Conteudo from "../LayoutComponents/Conteudo"
import Logo from "../LayoutComponents/Logo"

// Public
import LogoSvg from "../../../public/logo.svg"

// CSS
import styles from "./layoutApp.module.css"

// Context
import { useAppContext } from "@/context/AppContext"

interface ILayoutAppProps {
    children: ReactNode
    title: string
    subtitle: string
}

export default function LayoutApp( { children, title, subtitle }: ILayoutAppProps ){

    const { themeMode } = useAppContext()

    return (
        <div className={styles.container}>
            <Header title={title} subtitle={subtitle} theme={themeMode} />
            <LateralMenu theme={themeMode} />
            <Logo src={LogoSvg} alt="Passaro colorido voando" />
            <Conteudo theme={themeMode} >
                {children}
            </Conteudo>
        </div>
    )
}