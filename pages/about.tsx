import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ImageText from '../components/molecules/imagetext';
import MetaData from '../meta';
import styles from "../styles/About.module.scss";

const About = () => {
    return (
        <div className={styles.box}>
            <MetaData
                title='About | Social worker in private practice in graytown - A registered and accredited social worker with over 14 years of experience.'
                subtitle='I have a clear understanding of social work methods. I can render services independently and professional. I am guided by social work principles and ethics.'
                image='/images/xeImage.jpg'
                path='/about'
            />
            <div >
                <div className={styles.hero}>
                    <h1>A registered and accredited social worker with over 14  years of experience.</h1>
                    <div>
                        <Link href="/"><a>Home</a></Link>
                        &nbsp;‐&nbsp;
                        <p>About</p>
                    </div>
                </div>

                <section className={styles.container}>
                    <span><p>Hi again</p></span>
                    <ImageText>
                        <p>My name is Xolani Bukhosini, potentially your next social worker. I offer a private social work service. I have a degree in social worker that I obtained in the University of Zululand. I am registered as a private social worker (Practice No: 9990890000825050).</p>
                        <div>
                            <Image src="/images/univ.jpg" width={577} height={316} alt="university books" />
                        </div>
                    </ImageText>
                    <ImageText>
                        <p> I am also registered as a social worker with south African council for social services profession (registration No 10-26588).  worked for the Department of Social Development for 8 years as both generic social worker and supervisor.</p>

                        <div>
                            <Image src="/images/books.jpg" width={577} height={316} alt="books" />
                        </div>
                    </ImageText>
                    <ImageText>
                        <p> I have a clear understanding of social work methods. I can render services independently and professional. I am guided by social work principles and ethics.</p>
                        <div>
                            <Image src="/images/office.jpg" width={577} height={316} alt="office" />
                        </div>
                    </ImageText>
                </section>
            </div>
        </div>
    )
}

export default About