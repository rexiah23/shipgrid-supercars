// src/components/FAQ.js
import { useState } from 'react';
import styles from './FAQ.module.css'; // Assuming you use CSS Modules

const questionsAnswers = [
    { question: "+ Why are the prices of the vehicles so low?", answer: "Answer goes here." },
    { question: "+ How can I be confident in the condition of the vehicle?", answer: "Answer goes here." },
    { question: "+ What is included in the 'Cleared Customs' Price?", answer: "Answer goes here." },
    { question: "+ Do I have to pay any additional taxes when I register the vehicle?", answer: "Answer goes here." },
    { question: "+ What payment methods do you accept?", answer: "Answer goes here." },
    { question: "+ What is a Standby Letter of Credit?", answer: "Answer goes here." },
    { question: "+ Why do you use Standby Letter of Credit?", answer: "Answer goes here." },
    { question: "+ How does a Standby Letter of Credit make my purchase risk free?", answer: "Answer goes here." },
    { question: "+ Why don't you accept payment through Escrow?", answer: "Answer goes here." },
    { question: "+ Who will cover the cost of the Pre-Purchase Inspection (PPI)?", answer: "Answer goes here." },
    { question: "+ What are the Canadian import laws for KDM vehicles?", answer: "Answer goes here." },
    { question: "+ Is it risky to buy a KDM vehicle?", answer: "Answer goes here." },
    { question: "+ Are the vehicles accident-free?", answer: "Answer goes here." },
    { question: "+ How do I register a KDM vehicle?", answer: "Answer goes here." }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* <h1>Frequently Asked Questions</h1> */}
            <div className={styles.faq}>
                {questionsAnswers.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <button className={styles.question} onClick={() => handleToggle(index)}>
                            {item.question}
                        </button>
                        {activeIndex === index && (
                            <div className={styles.answer}>{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQ;
