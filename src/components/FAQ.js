import { useState } from 'react';
import styles from './FAQ.module.css'; // Assuming you use CSS Modules

const questionsAnswers = [
    {
        question: "Why are the prices of the vehicles so low?",
        answer: "Used vehicles, particularly older supercars, are considered low status in South Korea, resulting in much lower demand compared to the supercar market in Canada. Consequently, these vehicles are priced much lower than the equivalent make and model here in Canada."
    },
    {
        question: "Does the low price mean the vehicles are in poor condition?",
        answer: "Not at all! In South Korea, social status is closely tied to the quality and condition of one's possessions, especially ones car. As a result, you’ll find that vehicles are meticulously maintained and serviced. Additionally, South Korea has stricter emissions and registration requirements than North America, and roads are not salted during winters, preventing salt-related damage such as rust."
    },
    {
        question: "How can I be confident in the condition of the vehicle?",
        answer: "All vehicles will come with a complete insurance claims history (accident, flooding history, theft history, total loss history, rental car history), number of owners the vehicle had. If there are any claims, each claim will explicitly outline how much the insurance claim was in parts and labour, and whether the accident was caused by the buyer or the seller. All reports are provided by the federal South Korean government, so they are completely legitimate and cannot be falsified. We can also complete an optional pre-purchase inspection at the official manufacture dealership in Seoul, where you will get a complete report of the vehicle's condition. (Lamborghini Seoul, Ferrari Seoul, BMW Seoul, etc)."
    },
    {
        question: "Can me or my mechanic inspect the vehicle before I pay?",
        answer: "Yes! We allow a 24 hr inspection period for you or your mechanic to inspect and drive the vehicle once it lands in Vancouver. You can either decide to approve or reject the vehicle after the inspection."
    },
    {
        question: "What is included in the 'Cleared Customs' Price?",
        answer: "This includes the price of the vehicle, shipping, and complete customs clearance and arrival into the port in Vancouver BC. All you will need to do is take it to your local DMV and register the vehicle."
    },
    {
        question: "Do I have to pay any additional taxes when I register the vehicle?",
        answer: (
            <p>
                As we will pay the duties and GST during customs clearance into Canada, you will be responsible for just PST depending on the province/territory you register your vehicle in:
                <ul>
                    <li>Alberta: No additional taxes</li>
                    <li>Ontario: 8% PST</li>
                    <li>British Columbia: 7-10% PST (depending on vehicle's value)</li>
                    <li>Manitoba: 7% PST</li>
                    <li>New Brunswick: 10% PST</li>
                    <li>Newfoundland and Labrador: 10% PST</li>
                    <li>Northwest Territories: No additional taxes</li>
                    <li>Nova Scotia: 10% PST</li>
                    <li>Nunavut: No additional taxes</li>
                    <li>Prince Edward Island: 10% PST</li>
                    <li>Quebec: 9.975% QST</li>
                    <li>Saskatchewan: 6% PST</li>
                    <li>Yukon: No additional taxes</li>
                </ul>
            </p>
        )
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept cash and Escrow.com."
    },
    {
        question: "What is Escrow?",
        answer: "Escrow is a secure payment method where a trusted third party holds your funds until you have inspected the vehicle in Vancouver and confirmed it meets your expectations. The funds are released only upon your approval, ensuring you have full control and take delivery of the car only if you are fully satisfied."
    },
    {
        question: "How does Escrow make my purchase risk free?",
        answer: "Escrow makes your purchase risk-free by holding your funds with a trusted third party until you inspect the vehicle in Vancouver and confirm it meets your expectations. Additionally, if we fail to meet any commitments outlined in the Escrow agreement, the escrow service will fully refund your money."
    },
    {
        question: "What is Escrow.com?",
        answer: "Escrow.com is the world's leading escrow service for international vehicle sales and is our partnered Escrow service we use for all escrow transactions. They have over 25 years of experience and have an A+ accreditation on the Better Business Bureau (BBB). To learn more about them, please visit: https://www.escrow.com/why-escrowcom/about-us."
    },
    {
        question: "Who will cover the cost of the Pre-Purchase Inspection (PPI)?",
        answer: "The buyer will cover the cost of the PPI, which will be wired directly to the manufacturer dealership performing the PPI in Seoul, such as Lamborghini Seoul or Ferrari Seoul. If you decide to purchase the vehicle, we will deduct the 100% of the PPI cost from the final price."
    },
    {
        question: "What are the Canadian import laws for South Korean vehicles?",
        answer: "Imported vehicles must be at least 15 years old since the date of manufacture and comply with Canadian emissions and specification requirements. Not to worry, we will handle all the compliance requirements for your vehicle."
    },
    {
        question: "Is it risky to buy a used supercar from South Korea?",
        answer: "There is minimal risk. South Korea is known for well-maintained vehicles due to cultural emphasis on taking care of possessions. Additionally, roads in South Korea are not salted, reducing the risk of rust."
    },
    {
        question: "Are the vehicles accident-free?",
        answer: "We provide full accident histories for our vehicles, ensuring you have access to complete and official records from the South Korean government."
    },
    {
        question: "How do I register an imported vehicle from South Korea?",
        answer: "Register the vehicle as you would any used vehicle in Canada. You’ll need the vehicle's title, an emissions pass report, and customs clearance documents, all of which we provide."
    }
];

const FAQ = ({ showTitle = false }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {showTitle && (
                <h2 className={styles.title}>
                    Frequently Asked Questions
                </h2>
            )}
            <div className={styles.faq}>
                {questionsAnswers.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <button className={styles.question} onClick={() => handleToggle(index)}>
                            <span className={styles.toggleIcon}>{activeIndex === index ? '-' : '+'}</span>
                            {item.question}
                        </button>
                        {activeIndex === index && (
                            <div className={styles.answer}>
                                {typeof item.answer === 'string' ? item.answer : item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQ;
