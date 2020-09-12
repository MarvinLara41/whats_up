import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useConversations } from '../context/ConversationsProvider';
import { useContacts } from '../context/ContactsProvider';

export default function NewConversationModal({ closeModal }) {
	const [selectedContactIds, setSelectedContactIds] = useState([]);
	const { contacts } = useContacts();
	const { createConversation } = useConversations();

	function handleCheckBoxChange(contactId) {
		setSelectedContactIds((prevSelectedContactIds) => {
			if (prevSelectedContactIds.includes(contactId)) {
				return prevSelectedContactIds.filter((prevId) => {
					return contactId !== prevId;
				});
			} else {
				return [...prevSelectedContactIds, contactId];
			}
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		createConversation(selectedContactIds);

		closeModal();
	}

	return (
		<>
			<Modal.Header closeButton> Create Conversation </Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					{contacts.map((contact) => (
						<Form.Group controlId={contact.id} key={contact.id}>
							<Form.Check
								type="checkbox"
								value={selectedContactIds.includes(contact.id)}
								label={contact.name}
								onChange={() => handleCheckBoxChange(contact.id)}
							/>
						</Form.Group>
					))}
					<Button type="submit">Create</Button>
				</Form>
			</Modal.Body>
		</>
	);
}
