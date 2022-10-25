import Link from 'next/link';
import React from 'react';
import styles from "../styles/Home.module.scss";

const Error = () => {
    return (
        <div className={styles.errorPage}>
            <section>
                <h1>404</h1>
                <p>This page could not be found.</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link href={'/'}><a>Go Home</a></Link>
            </section>
        </div>
    )
}

export default Error