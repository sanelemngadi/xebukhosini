import Link from 'next/link';
import React from 'react';
import styles from "./styles/Footer.module.scss";

const Footer = () => {
    const date = new Date();
    return (
        <footer className={styles.box}>
            <div className={styles.container}>
                <section>
                    <h3>XE Bukhosini</h3>
                    <p>© {date.getFullYear()} Xolani Bukhosini</p>
                    <p>Private Social Worker</p>
                    <p>101, York street, Greytown</p>
                </section>
                <section>
                    <h3>Sipemap</h3>
                    <ul>
                        <li><Link href="/" prefetch={false}><a>Homepage</a></Link></li>
                        <li><Link href="/services" prefetch={false}><a>Services</a></Link></li>
                        <li><Link href="/about" prefetch={false}><a>About</a></Link></li>
                        <li><Link href="/contacts" prefetch={false}><a>Contact</a></Link></li>
                    </ul>
                </section>
                <section>
                    <h3>Contact</h3>
                    <p>xolanibukhosini@gmail.com</p>
                    <p>0724894604</p>

                    <h3>Office hours</h3>
                    <p>Friday: 16:30 to 18:30</p>
                    <p>Saturday to Sunday: 09:00 to 17:00</p>
                </section>
            </div>
            <div>
                <p>Social Worker {date.getFullYear()} XE Bukhosin. Website Created by <b><a href="https://www.sanelemngadi.com">Sanele Mngadi</a></b>.</p>
            </div>
        </footer>
    )
}

export default Footer