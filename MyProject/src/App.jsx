import { useState } from 'react';
import styles from './App.module.css';

const date = new Date();
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth()).padStart(2, '0');
const year = date.getFullYear();
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');
const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	let isValueValid = true;

	const onInputButtonClick = () => {
		const promtValue = prompt('Введите значение');
		if (promtValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setError('');
			setValue(promtValue);
		}
	};

	const onAddButtonClick = () => {
		if (value.length !== 0) {
			const newItem = {
				id: Date.now(),
				value: value,
			};

			setList((prevListl) => [...prevListl, newItem]);
			setValue('');
			setError('');
		} else {
			setError('Введите значение');
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.pageHeading}>Ввод значения</h1>
				<p className={styles.noMarginText}>
					Текущее значение: "
					<output className={styles.currentValue}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles.buttonsContainer}>
					<button
						onClick={onInputButtonClick}
						className={styles.button}
					>
						Ввести новое
					</button>
					<button
						className={styles.button}
						onClick={onAddButtonClick}
						disabled={!isValueValid}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles.listContainer}>
					<h2 className={styles.listHeading}>Список:</h2>
					{list.length === 0 && (
						<p className={styles.noMarginText}>
							Нет добавленных элементов
						</p>
					)}
					<ul className={styles.list}>
						{list.length !== 0 &&
							// <li className="listItem">Первый элемент</li>
							list.map((item) => (
								<li key={item.id} className={styles.listItem}>
									{item.value} - {formattedDate}
								</li>
							))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
