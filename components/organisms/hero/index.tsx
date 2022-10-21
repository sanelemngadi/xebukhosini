import React from 'react';
import Button from '../../atoms/button';
import styles from "./styles/Hero.module.scss";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <section>
                <p>Social Worker</p>
                <h1>We empower people to help themselves.</h1>
                <Button>Book an appointment</Button>
            </section>
        </div>
    )
}

export default Hero