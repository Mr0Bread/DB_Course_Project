import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const TestDbConnection: FC = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState({});

	useEffect(() => {
		fetch('https://0ejatmm0n8.execute-api.eu-central-1.amazonaws.com/Stage/hello')
			.then(res => res.json())
			.then(res => {
				setData(res);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			{ isLoading ? (<div>Loading...</div>) : (<pre>{ JSON.stringify(data, null, 2) }</pre>) }
		</div>
	);
}

ReactDOM.render(<TestDbConnection />, document.querySelector('#root'));
