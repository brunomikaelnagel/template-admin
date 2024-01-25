"use client"

// Firebase
import { AuthError } from "firebase/auth"

// React
import { FormEvent, useState } from "react"

// Nextjs
import Image from "next/image"

// CSS
import styles from "./pageLogin.module.css"

// Components
import Input from "@/components/Input"
import Button from "@/components/Button"
import ToastError from "@/components/ToastError"

// Context
import { useAuthContext } from "@/context/AuthContext"

import imageLogin from "../../../public/imageLogin.jpg"


function useLogin(){

    const { login, googleLogin, register } = useAuthContext()

    const [formType, setFormType] = useState<"cadastro" | "login">("login")
    const [error, setError] = useState<string | null>(null)

    function showError(msg: string, sampleTimeSeconds: number){
        setError(msg)
        setTimeout(() => setError(null), sampleTimeSeconds * 1000)
    }

    async function handleLogin(e: FormEvent<HTMLFormElement> ){
        e.preventDefault()
        
        try {
            const email = e.currentTarget.email.value as string
            const password = e.currentTarget.password.value as string
    
            if(email && password){
                if(formType === "login"){
                    await login(email, password)
                }else{
                    await register(email, password)
                }
            }
        }catch(e){
            const error = e as AuthError
            error.message
            showError(error.message, 5)
        }

    }

    return {
        formType,
        setFormType,
        googleLogin,
        handleLogin,
        error
    }
}

export default function Login(){

    const { formType, setFormType, googleLogin, handleLogin, error } = useLogin()

    return(
        <div className={styles.container}>
            <div className={styles.imagem_area}>
                <Image className={styles.imagem} src={imageLogin} alt="Nuvens brancas dramáticas e céu azul da vista da janela do avião fundo colorido do pôr do sol cloudscape" />
            </div>
            <div className={styles.login_area}>
                {
                    formType === "login" && (
                        <h3>Entre com a Sua Conta</h3>
                    )
                }

                {
                    formType === "cadastro" && (
                        <h3>Cadastre-se na Plataforma</h3>
                    )
                }

                {
                    error && (
                        <ToastError message={error} />
                    )
                }

                <form onSubmit={handleLogin} className={styles.form_login}>
                    <Input type="text" label="E-mail" name="email" />
                    <Input type="password" label="Senha" name="password" />
                    <Button type="submit" fullWidth bgColor="#5858E3" textColor="white" >
                        {
                            formType === "login" && ( "Entrar" )
                        }
                        {
                            formType === "cadastro" && ( "Cadastrar" )
                        }
                    </Button>
                </form>
                <hr />
                <Button fullWidth onClick={googleLogin} bgColor="#F63B43" textColor="white" >Entrar com goolgle</Button>
                {
                    formType === "login" && (
                        <p className={styles.link_new_account}><b>Novo por aqui? <a onClick={() => setFormType("cadastro")} >Crie uma conta Gratuitamente</a></b></p>
                    )
                }
                {
                    formType === "cadastro" && (
                        <p className={styles.link_new_account}><b>Já faz parte da nossa comunidade? <a onClick={() => setFormType("login")} >Entre com as suas Credencias</a></b></p>
                    )
                }
            </div>
        </div>
    )
}