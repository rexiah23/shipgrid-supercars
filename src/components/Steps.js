import styles from './Steps.module.css';

const Steps = ({ steps }) => {
  return (
    <div className={styles.container}>
      {steps.map(step => (
        <div key={step.number} className={styles.step}>
          <div className={styles.header}>
            <div className={styles.number}>{step.number}</div>
            <h3 className={styles.h3}>{step.title}</h3>
          </div>
          <p className={styles.p}>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
