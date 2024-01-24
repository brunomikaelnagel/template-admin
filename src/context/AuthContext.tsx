// js-cookie
import Cookies from "js-cookie"

// NextJs
import { useRouter } from "next/navigation";

// Firebase
import firebaseApp from "../firebase/config"
import { User, getAuth, signInWithPopup, GoogleAuthProvider, onIdTokenChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

// React
import { createContext, useState, ReactNode, useContext, useEffect } from "react";

// Interface
import { IUser } from "@/interface/user";

export interface IAuthContextProps {
    user: IUser | null
    googleLogin: () => Promise<void>
    logout: () => Promise<void>
    login: (email: string, password: string) => Promise<void>
    register: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext({} as IAuthContextProps)

async function normalizedUser(firebaseUser: User ): Promise<IUser>{
    const token = await firebaseUser.getIdToken()

    const { uid, displayName, email, providerData, photoURL } = firebaseUser

    return {
        uid: uid,
        name: displayName??"",
        email: email??"",
        token,
        provider: providerData[0]?.providerId??"",
        imageUrl: photoURL??""
    }
}

function manageCookie(logado: boolean){

    if(logado){
        Cookies.set("admin-template-auth", String(logado), {
            expires: 7
        })
    }else{
        Cookies.remove("admin-template-auth")
    }
}

export function AuthProvider({children} : {children: ReactNode} ){
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<IUser | null>(null)

    async function configureSession(firebaseUser: User | null){
        if(firebaseUser?.email){
            const user = await normalizedUser(firebaseUser)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        }else{
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function googleLogin(){
        try {
            setLoading(true)
            const auth = getAuth(firebaseApp)
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            
            await configureSession(result.user)
            router.push("/")
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string){
        try {
            setLoading(true)
            const auth = getAuth(firebaseApp)
            const result = await signInWithEmailAndPassword(auth, email, password)
            await configureSession(result.user)
            router.push("/")
        } finally {
            setLoading(false)
        }
    }

    async function register(email: string, password: string){
        try {
            setLoading(true)
            const auth = getAuth(firebaseApp)
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await configureSession(result.user)
            router.push("/")
        } finally {
            setLoading(false)
        }
    }

    async function logout(){
        try {
            setLoading(true)
            const auth = getAuth(firebaseApp)
            await signOut(auth)
            await configureSession(null)
            router.push("/login")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get("admin-template-auth")){
            const auth = getAuth(firebaseApp)
            const cancel = onIdTokenChanged(auth, configureSession)
            return () => cancel()
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            googleLogin,
            logout,
            login,
            register
        }} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthContext)
}



