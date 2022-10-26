import React, { useRef, useState } from 'react';
import styles from "./styles/Form.module.scss";

const ContactForm = () => {
    const time = new Date();

    const greetings = () => {
        const hour = time.getHours();
        let greet = "Hi";
        if (hour > 0) {
            greet = "Good morning"
        } else if (hour >= 12) {
            greet = "Good day"
        } else if (hour >= 1) {
            greet = "Good afternoon"
        } else if (hour >= 18) {
            greet = "Good evening"
        } else {
            greet = "Hello"
        }

        return greet;
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const msg = `
            mailto:private.socialworker@xolanibukhosini.co.za
            ?cc=xolanibukhosini@gmail.com
            &subject=${formData.name.toUpperCase()} ${formData.service.toUpperCase()}
            &body=${greetings()} mr. X.E Bukhosini,\n\n   This message was sent from xolanibukhosini website.\n${formData.message}. ...${formData.name}
        `

        window.location.href = msg;

    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Enter your name*'
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="email"> Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='Enter your email*'
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="service">Subject</label>
            <select name="service" id="service"
                value={formData.service}
                onChange={handleChange}
                required
            >
                <option value="">select subject</option>
                <option value="Trauma counselling.">Trauma counselling.</option>
                <option value="Family preservation services.">Family preservation services.</option>
                <option value="Psychosocial support services.">Psychosocial support services.</option>
                <option value="Child protection services.">Child protection services.</option>
                <option value="Care plan services.">Care plan services.</option>
                <option value="Marital counselling.">Marital counselling.</option>
                <option value="Family therapy.">Family therapy.</option>
                <option value="Divorce counselling.">Divorce counselling. </option>
                <option value="Just an Question">Other </option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder='Message*'
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default ContactForm