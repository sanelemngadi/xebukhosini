import Image from 'next/image';
import React from 'react';
import Button from '../../atoms/button';
import styles from "../../../styles/Home.module.scss";

const services = ["Trauma counselling.", "Psychosocial support services.", "Family preservation services.", "Child protection services.", "Care plan services.", "Marital counselling.", "Family therapy.", "Divorce counselling."]
const MiniServices = () => {
    return (
        <div className={styles.servicesBox}>
            <section className={styles.servicesContainer}>
                <article>
                    <Image src='/images/worryless.jpg' width={477} height={502} alt="worry less" />
                </article>
                <article>
                    <h2>I render a rage of private social work services.</h2>
                    <ul>
                        {services.map((service, idx) => (
                            <li key={`service-` + idx}>
                                &nbsp; &nbsp; &nbsp; ✓ {service}
                            </li>
                        ))}
                    </ul>
                    <div><Button push='/contacts'
                        style={{ width: "80%", height: "54px", marginTop: "24px" }}
                    >Book appointment</Button></div>
                </article>
            </section>
        </div>
    )
}

export default MiniServices