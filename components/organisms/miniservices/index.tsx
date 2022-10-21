import Image from 'next/image';
import React from 'react';
import Button from '../../atoms/button';
import styles from "./styles/MiniServices.module.scss";

const services = ["Trauma counselling.", "Child protection services.", "Care plan services.", "Marital counselling.", "Divorce counselling."]
const MiniServices = () => {
    return (
        <div className={styles.box}>
            <section className={styles.container}>
                <article>
                    <Image src='/images/worryless.jpg' width={477} height={502} alt="worry less" />
                    {/* <Image src='/images/xeImage.jpg' width={416} height={383} alt="your next social worker mr X E Bukhosini" /> */}
                </article>
                <article>
                    <h1>I render a rage of private social work services.</h1>
                    <ul>
                        {services.map((service, idx) => (
                            <li key={`service-` + idx}>
                                {service}
                            </li>
                        ))}
                    </ul>
                    <div><Button style={{ width: "50%", height: "54px", marginTop: "24px" }}>Read more services</Button></div>
                </article>
            </section>
        </div>
    )
}

export default MiniServices