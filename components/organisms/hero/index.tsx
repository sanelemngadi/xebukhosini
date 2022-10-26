import React from 'react';
import Button from '../../atoms/button';
import styles from "../../../styles/Home.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <section>
                <p>Social Worker</p>
                <h1>We empower people to help themselves. <span style={{ display: "none" }}>social worker in private practice.</span></h1>
                <Button push='/contacts'>Book an appointment</Button>
            </section>
        </div>
    )
}

export default Hero;