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
                        <li><Link href="#"><a>Homepage</a></Link></li>
                        <li><Link href="#"><a>Services</a></Link></li>
                        <li><Link href="#"><a>About</a></Link></li>
                        <li><Link href="#"><a>Contact</a></Link></li>
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
                <p>Social Worker {date.getFullYear()} XE Bukhosin. Website Created by <b><Link href="#" passHref><a>Sanele Mngadi</a></Link></b>.</p>
            </div>
        </footer>
    )
}

export default Footer