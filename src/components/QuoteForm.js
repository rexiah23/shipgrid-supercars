// src/components/QuoteForm.js
import { useState } from 'react';
import styles from './QuoteForm.module.css';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        makeAndModel: '',
        handlePaperwork: '',
        prePurchaseInspection: '',
        paymentMethod: '',
        province: '',
        deliveryOption: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server or API)
        console.log(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label>Please enter your desired Make and Model</label>
                <select name="makeAndModel" value={formData.makeAndModel} onChange={handleChange} required>
                    <option value="">Select Make and Model</option>
                    <option value="Lamborghini">Lamborghini</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="McLaren">McLaren</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <div className={styles.field}>
                <label>Would you like us to handle all the import paperwork and taxes?</label>
                <select name="handlePaperwork" value={formData.handlePaperwork} onChange={handleChange} required>
                    <option value="">Select an option</option>
                    <option value="You handle everything for me">You handle everything for me</option>
                    <option value="I'll take care of it myself">I'll take care of it myself</option>
                </select>
            </div>
            
            <div className={styles.field}>
                <label>Do you want a Pre-Purchase Inspection at the official manufacture dealership in Seoul? (E.g. Lamborghini Seoul, Ferrari Seoul, etc)</label>
                <select name="prePurchaseInspection" value={formData.prePurchaseInspection} onChange={handleChange} required>
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            
            <div className={styles.field}>
                <label>How would you like to pay?</label>
                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                    <option value="">Select a payment method</option>
                    <option value="Standby Letter of Credit (SBLC)">Standby Letter of Credit (SBLC)</option>
                    <option value="Wire Transfer">Wire Transfer</option>
                </select>
            </div>
            
            <div className={styles.field}>
                <label>In which province will you register your vehicle?</label>
                <select name="province" value={formData.province} onChange={handleChange} required>
                    <option value="">Select a province</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Alberta">Alberta</option>
                    <option value="Quebec">Quebec</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                    <option value="Nova Scotia">Nova Scotia</option>
                    <option value="Prince Edward Island">Prince Edward Island</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                    <option value="Northwest Territories">Northwest Territories</option>
                    <option value="Nunavut">Nunavut</option>
                    <option value="Yukon">Yukon</option>
                </select>
            </div>
            
            <div className={styles.field}>
                <label>Pick up at Vancouver port or need doorstep delivery?</label>
                <select name="deliveryOption" value={formData.deliveryOption} onChange={handleChange} required>
                    <option value="">Select an option</option>
                    <option value="Pick up at Vancouver port">Pick up at Vancouver port</option>
                    <option value="I need doorstep delivery">I need doorstep delivery</option>
                </select>
            </div>
            
            <div className={styles.field}>
                <label>Email address to receive your quote</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
};

export default QuoteForm;
