import Link from 'next/link';
import React from 'react';
import MetaData from '../meta';
import styles from "../styles/Contact.module.scss";

const Contacts = () => {
    return (
        <div className={styles.box}>
            <MetaData
                title='Contact | Private Social Worker - I am more than happy to answer your questions.'
                subtitle='I am registered as a social worker with south African council for social services profession (registration No 10-26588). worked for the Department of Social Development for 8 years as both generic social worker and supervisor.'
                image='/images/xeImage.jpg'
                path='/contacts'
            />
            <div >
                <div className={styles.hero}>
                    <h1>I am more than happy to answer your questions.</h1>
                    <div>
                        <Link href="/"><a>Home</a></Link>
                        &nbsp;‐&nbsp;
                        <p>Contact</p>
                    </div>
                </div>

                <section className={styles.container}>
                    <span><p>Contacts</p></span>
                    <section>
                        <article>
                            <h3>Are your ready to book a sesson with me?</h3>
                            <h4>Booking a session doesn&apos;t have to be that be that hard, just fill the form below and send it to me.</h4>
                            <section>
                                <article>
                                    <h4>Contact</h4>
                                    <p>xolanibukhosini@gmail.com</p>
                                    <p>0724894604</p>
                                </article>
                                <article>
                                    <h4>Office hours</h4>
                                    <p>Friday: 16:30 to 18:30</p>
                                    <p>Saturday to Sunday: 09:00 to 17:00</p>
                                </article>
                            </section>
                        </article>
                        <article>
                            <form>
                                <label htmlFor="">Name</label>
                                <input type="text" name="name" id="" placeholder='Enter your name' />
                                <label htmlFor=""> Email</label>
                                <input type="email" name="email" id="" placeholder='Enter your email' />
                                <label htmlFor="">Subject</label>
                                <select name="" id="">
                                    <option value="">select subject</option>
                                    <option value="">Trauma counselling.</option>
                                    <option value="">Family preservation services.</option>
                                    <option value="">Psychosocial support services.</option>
                                    <option value="">Child protection services.</option>
                                    <option value="">Care plan services.</option>
                                    <option value="">Marital counselling.</option>
                                    <option value="">Family therapy.</option>
                                    <option value="">Divorce counselling. </option>
                                    <option value="">Other </option>
                                </select>
                                <label htmlFor="">Message</label>
                                <textarea name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </article>
                    </section>

                    <div>
                        Map
                    </div>

                </section>
            </div>
        </div>
    )
}

export default Contacts