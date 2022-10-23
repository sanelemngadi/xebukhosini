import Image from 'next/image';
import React from 'react';
import Button from '../../atoms/button';
import styles from "./styles/MiniAbout.module.scss";

const MiniAbout = () => {

    return (
        <div className={styles.box}>
            <section className={styles.container}>
                <article>
                    <Image src='/images/xeImage.jpg' layout='fill' objectFit='cover' alt="your next social worker mr X E Bukhosini" />
                    {/* <Image src='/images/xeImage.jpg' width={416} height={383} alt="your next social worker mr X E Bukhosini" /> */}
                </article>
                <article>
                    <h1>A registered and accredited social worker with over 14  years of experience.</h1>
                    <p>My name is Xolani Bukhosini, potentially your next social worker. I offer a private social work service. I have a degree in social worker that I obtained in the University of Zululand. I am registered as a private social worker (Practice No: 9990890000825050). I am also registered as a social worker with south African council for social services profession (registration No 10-26588). </p>
                    <div><Button push="/about">Read more about me</Button></div>
                </article>
            </section>
        </div>
    )
}

export default MiniAbout;