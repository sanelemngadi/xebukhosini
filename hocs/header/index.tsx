import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ActiveLink from '../../components/context/ActiveLink';
import styles from "./styles/Header.module.scss";

const links = ["Home", "Services", "About", "Contacts"];
const makeHref = (name: string) => {
    return `/${name === "Home" ? "" : name.toLowerCase()}`;
}

const Navbar = () => {
    return (
        <div className={styles.appbar}>
            <header>
                <div className={styles.logo}>
                    <Link href="/" passHref>
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
                        {links.map((link, idx) => (
                            <ActiveLink
                                key={"link-" + idx}
                                link={link}
                                href={makeHref(link)}
                            />
                        ))}

                    </ul>
                </nav>

            </header>
        </div>
    )
}

export default Navbar