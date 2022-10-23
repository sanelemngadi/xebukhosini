import React from 'react';
import styles from "./styles/Form.module.scss";

const ContactForm = () => {
    return (
        <form className={styles.form}>
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
    )
}

export default ContactForm