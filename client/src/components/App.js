import React from 'react';
import Login from './Login';
import DashBoard from './DashBoard';
import useLocalStorage from '../hooks/useLocalStorage';
import { ContactsProvider } from '../context/ContactsProvider';
import { ConversationsProvider } from '../context/ConversationsProvider';
import { SocketProvider } from '../context/SocketProvider';

function App() {
	const [id, setId] = useLocalStorage('id');

	const dashBoard = (
		<SocketProvider id={id}>
			<ContactsProvider>
				<ConversationsProvider id={id}>
					<DashBoard id={id} />
				</ConversationsProvider>
			</ContactsProvider>
		</SocketProvider>
	);

	return id ? dashBoard : <Login onIdSubmit={setId} />;
}

export default App;
