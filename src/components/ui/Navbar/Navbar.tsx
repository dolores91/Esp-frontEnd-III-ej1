import React from 'react'
import styles from "./Navbar.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from "next/image";

export function Navbar() {
    const router = useRouter
    console.log(router);

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(router.pathname, router.asPath, { locale: e.target.value })
    }
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/">
                    <Image width={40} height={80} src="/mario-logo.webp" alt="logo" />
                </Link>
            </div>
            <ul>
                <li>
                    <Link href="/nosotros">
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link href="/contacto">
                        Contacto
                    </Link>
                </li>
                <li>
                    <Link href="/carrito">
                        Carrito
                    </Link>
                </li>
                <li>
                    <select onChange={changeLanguage} name="idioma" id="idioma">
                        <option value="es">Español</option>
                        <option value="en">English</option>
                    </select>
                </li>
            </ul>
        </nav>
    );

}
