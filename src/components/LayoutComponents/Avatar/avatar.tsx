// NextJs
import styles from "./avatar.module.css"

// Interfaces
import { StaticImport } from "next/dist/shared/lib/get-img-props"

// CSS
import Image from "next/image"

import avatar from "../../../../public/avatar.png"

interface IAvatarProps {
    img?: string
}

export default function Avatar( { img }: IAvatarProps ){
    return (
        <div className={styles.container}>
            {
                img && (
                    <img className={styles.image} src={img} alt="" />
                )
            }

            {
                !img && (
                    <img className={styles.image} src="avatar.png" alt="" />
                )
            }
        </div>
    )
}