import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const isLastClick = activeIndex + 1 < data.length;
	const isFirstClick = activeIndex === 0;
	const [activeIndex, setActiveIndex] = useState(0);

	const onHandleNextClick = () => {
		if (isLastClick) setActiveIndex(activeIndex + 1);
	};
	const onHandlePrevClick = () => {
		setActiveIndex(activeIndex - 1);
	};
	const onHandleAgainClick = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{data[activeIndex] && (
							<p>{data[activeIndex].content}</p>
						)}
					</div>
					<ul className={styles['steps-list']}>
						{data.map((step, index) => (
							<li
								key={step.id}
								className={`${styles['steps-item']} ${
									index <= activeIndex ? styles.active : ''
								}`}
							>
								<button
									onClick={() => setActiveIndex(index)}
									className={styles['steps-item-button']}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={onHandlePrevClick}
							disabled={isFirstClick}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={() => {
								if (!isLastClick) {
									onHandleAgainClick();
								} else {
									onHandleNextClick();
								}
							}}
						>
							{!isLastClick ? 'Начать сначала' : 'Вперед'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
