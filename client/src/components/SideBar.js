import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const Conversation_Key = 'conversations';
const Contact_Key = 'contacts';

export default function SideBar({ id }) {
	const [activeKey, setActiveKey] = useState(Conversation_Key);
	const conversationOpen = activeKey === Conversation_Key;
	const [modalOpen, setModalOpen] = useState(false);

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div style={{ width: '250px' }} className="d-flex flex-column">
			<Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
				<Nav variant="tabs" className="justify-content-center">
					<Nav.Item>
						<Nav.Link eventKey={Conversation_Key}>Conversations</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey={Contact_Key}>Contacts</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content className="border-right overflow-auto flex-grow-1">
					<Tab.Pane eventKey={Conversation_Key}>
						<Conversations />
					</Tab.Pane>
					<Tab.Pane eventKey={Contact_Key}>
						<Contacts />
					</Tab.Pane>
				</Tab.Content>
				<div className="p-2 border-top border-right small">
					Your ID: <span className="text-muted"> {id} </span>
				</div>
				<Button onClick={() => setModalOpen(true)} className="rounded-0">
					New {conversationOpen ? 'Conversation' : 'Contact'}
				</Button>
			</Tab.Container>

			<Modal show={modalOpen} hide={closeModal}>
				{conversationOpen ? (
					<NewConversationModal closeModal={closeModal} />
				) : (
					<NewContactModal closeModal={closeModal} />
				)}
			</Modal>
		</div>
	);
}
