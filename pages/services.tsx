import Link from 'next/link';
import React from 'react';
import MetaData from '../meta';
import styles from "../styles/Services.module.scss";

const Services = () => {
    return (
        <div className={styles.box}>
            <MetaData
                title='Contact | Private Social Worker - I am more than happy to answer your questions.'
                subtitle='I am registered as a social worker with south African council for social services profession (registration No 10-26588). worked for the Department of Social Development for 8 years as both generic social worker and supervisor.'
                image='/images/xeImage.jpg'
                path='/services'
            />
            <div className={styles.hero}>
                <h1>I render a rage of private social work services.</h1>
                <div>
                    <Link href="/"><a>Home</a></Link>
                    &nbsp;‐&nbsp;
                    <p>Services</p>
                </div>
            </div>
            <section className={styles.container}>
                <span><p>Areas of work</p></span>


                <div className={styles.service1}>
                    <div className={styles.serviceCards}>
                        <div className={styles.serviceCard}>
                            <section>
                                <article></article>
                                <h3>Trauma counselling.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam voluptates molestiae iusto eos voluptate minus ex ipsum ea vitae?</p>
                            </section>
                        </div>
                        <div className={styles.serviceCard}>
                            <section>
                                <article></article>
                                <h3>Trauma counselling.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam voluptates molestiae iusto eos voluptate minus ex ipsum ea vitae?</p>
                            </section>
                        </div>
                    </div>
                    <div className={styles.serviceImage}></div>
                    <div className={styles.serviceThemeCard}>
                        <h3>You&apos;re not alone.</h3>
                    </div>

                </div>





                <div className={styles.service1}>
                    <div className={styles.serviceImage}></div>
                    <div className={styles.serviceThemeCard}>
                        <h3>You matter.</h3>
                    </div>
                    <div className={styles.serviceCards}>
                        <div className={styles.serviceCard}>
                            <section>
                                <article></article>
                                <h3>Trauma counselling.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam voluptates molestiae iusto eos voluptate minus ex ipsum ea vitae?</p>
                            </section>
                        </div>
                        <div className={styles.serviceCard}>
                            <section>
                                <article></article>
                                <h3>Trauma counselling.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam voluptates molestiae iusto eos voluptate minus ex ipsum ea vitae?</p>
                            </section>
                        </div>
                    </div>

                </div>

                <div className={styles.service1}>
                    <div className={styles.serviceThemeCard}>
                        <h3>Don&apos;t give up.</h3>
                    </div>
                    <div className={styles.serviceCards}>
                        <div className={styles.serviceCard}>
                            <section>
                                <article></article>
                                <h3>Trauma counselling.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam voluptates molestiae iusto eos voluptate minus ex ipsum ea vitae?</p>
                            </section>
                        </div>
                        <div className={styles.serviceCard}>
                            <section>
                                <article></article>
                                <h3>Trauma counselling.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla totam voluptates molestiae iusto eos voluptate minus ex ipsum ea vitae?</p>
                            </section>
                        </div>
                    </div>
                    <div className={styles.serviceImage}></div>

                </div>

            </section>
        </div>
    )
}

export default Services