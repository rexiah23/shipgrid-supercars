// src/components/ContactForm.js
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        vehicle: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Name:
                <input
                    type="text"
                    name="name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={styles.label}>
                Email:
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={styles.label}>
                Desired Make / Model / Year:
                <input
                    type="text"
                    name="vehicle"
                    className={styles.input}
                    value={formData.vehicle}
                    onChange={handleChange}
                />
            </label>
            <label className={styles.label}>
                Message (optional):
                <textarea
                    name="message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                />
            </label>
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
};

export default ContactForm;
