import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const OPERAOTRS = ['+', '-', '=', 'C'];
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const onClickHandle = (btn) => {
		if (btn === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
		} else if (btn === '=') {
			let result;
			switch (operator) {
				case '+':
					result = parseInt(operand2) + parseInt(operand1);
					break;
				case '-':
					result = parseInt(operand2) - parseInt(operand1);
					break;
				default:
					result = operand1;
					break;
			}
			setIsResult(true);
			setOperand1(result.toString());
			setOperand2('');
			setOperator('');
		} else if (NUMS.includes(btn)) {
			if (isResult) {
				setOperand1(btn);
				setIsResult(false);
			} else {
				setOperand1((prev) => prev + btn);
			}
		} else if (OPERAOTRS.includes(btn)) {
			setOperand2(operand1);
			setOperand1('');
			setOperator(btn);
			setIsResult(false);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.calculator}>
				<input
					className={
						!isResult
							? styles.inputText
							: `${styles.inputText} ${styles.done}`
					}
					type="text"
					value={operand1}
					placeholder="Введите значение"
					readOnly
				/>
				<div className={styles.ButtonСontainer}>
					<div className={styles.btnNumber}>
						{NUMS.map((btn) => (
							<button
								onClick={() => onClickHandle(btn)}
								className={styles.button}
								key={btn}
							>
								{btn}
							</button>
						))}
					</div>
					<div className={styles.operatorContainer}>
						{OPERAOTRS.map((btn) => (
							<button
								onClick={() => onClickHandle(btn)}
								key={btn}
								className={styles.button}
							>
								{btn}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
