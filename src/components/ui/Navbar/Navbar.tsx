import React from 'react'
import styles from "./Navbar.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from "next/image";
import { localeNames, locales } from '@/locale/constants';

export function Navbar() {
    const { locale, asPath } = useRouter();
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
                <li className={styles.localeSwitch}>
                    <Link href={asPath || '/'} locale={locales.ES_ES}>
                        <p className={locale === locales.ES_ES ? styles.active : ""}>
                            <Image
                                src="/spanish.png"
                                alt="Español"
                                width={20}
                                height={20}
                            />
                            {localeNames[locales.ES_ES as keyof typeof localeNames]}
                        </p>
                    </Link>
                    <Link href={asPath || '/'} locale={locales.EN_US}>
                        <p className={locale === locales.EN_US ? styles.active : ""}>
                            <Image
                                src="/english.png"
                                alt="English"
                                width={20}
                                height={20}
                            />
                            {localeNames[locales.EN_US as keyof typeof localeNames]}
                        </p>
                    </Link>
                    <Link href={asPath || '/'} locale={locales.PT_BR}>
                        <p className={locale === locales.PT_BR ? styles.active : ""}>
                            <Image
                                src="/portuguese.png"
                                alt="Português"
                                width={20}
                                height={20}
                            />
                            {localeNames[locales.PT_BR as keyof typeof localeNames]}
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}
