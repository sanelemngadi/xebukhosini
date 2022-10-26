import Image from 'next/image';
import React from 'react';
import Button from '../../atoms/button';
// import styles from "./styles/Vision.module.scss";
import styles from "../../../styles/Home.module.scss";

const VisionMission = () => {
    return (
        <div className={styles.missionBox}>
            <section className={styles.missionContainer}>
                <article>
                    <h2>It&apos;s my dream to see you helping yourself.</h2>
                </article>
                <section>
                    <article className={styles.vision}>
                        <section>
                            <article style={{ position: "relative" }}>
                                <Image
                                    src='/images/vision.jpg'
                                    width={395} height={256}
                                    alt="our vision is to build the world where everyone is able to help themselves"
                                />
                            </article>
                            <article>
                                <h3>Our vision</h3>
                                <p>To build the world where everyone is able to help themselves in any situation..</p>
                            </article>
                        </section>
                    </article>
                    <article className={styles.mission}>
                        <section>
                            <article style={{ position: "relative" }}>
                                <Image
                                    src='/images/mission.jpg'
                                    width={395}
                                    height={256}
                                    objectFit='cover'
                                    alt="our mission is to enhance the social function of individuals through provision of social work services."
                                />

                            </article>
                            <article>
                                <h3>Our mission</h3>
                                <p>To  enhance the social function of individuals, families and group through provision of social work services in private practise.</p>
                            </article>
                        </section>
                    </article>
                </section>
                <div><Button push='/contacts'>Book an appointment</Button></div>
            </section>
        </div >
    )
}

export default VisionMission