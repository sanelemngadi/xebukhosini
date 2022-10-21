import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "./styles/Header.module.scss";

const Navbar = () => {
    return (
        <div className={styles.appbar}>
            <header>
                <div className={styles.logo}>
                    <Link href="#" passHref>
                        <a>
                            <Image
                                src='/vectors/xeLogo.svg'
                                width={205}
                                height={32}
                                alt="xolani bukhosini logo"
                            />
                            <p>Private social workers</p>
                        </a>
                    </Link>
                </div>
                <input
                    type="checkbox"
                    name="menu"
                    id="menu"
                    className={styles.input}
                    style={{ display: "none" }}
                />
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="#"><a style={{ fontWeight: 700 }}>Home</a></Link></li>
                        <li><Link href="#"><a>Services</a></Link></li>
                        <li><Link href="#"><a>About</a></Link></li>
                        <li><Link href="#"><a>Contact</a></Link></li>
                    </ul>
                </nav>

                <label htmlFor="menu" className={styles.menu}>
                    <span></span>
                    <span></span>
                </label>

            </header>
        </div>
    )
}

export default Navbar