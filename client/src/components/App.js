import React from 'react';
import Login from './Login';
import DashBoard from './DashBoard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../context/ContactsProvider';

function App() {
	const [id, setId] = useLocalStorage('id');

	const dashBoard = (
		<ContactsProvider>
			<DashBoard id={id} />
		</ContactsProvider>
	);

	return id ? dashBoard : <Login onIdSubmit={setId} />;
}

export default App;
