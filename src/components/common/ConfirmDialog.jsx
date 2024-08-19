import React from 'react';
import {
	CButton,
	CModal,
	CModalBody,
	CModalFooter,
	CModalHeader,
	CModalTitle,
} from '@coreui/react';

export default function ConfirmDialog({
	visible,
	title,
	body,
	onClose = () => {},
	onApprove = () => {},
}) {
	return (
		<CModal visible={visible} onClose={onClose}>
			<CModalHeader>
				<CModalTitle>{title}</CModalTitle>
			</CModalHeader>
			<CModalBody>
				<p>{body}</p>
			</CModalBody>
			<CModalFooter>
				<CButton onClick={onClose} color="light">
					No
				</CButton>
				<CButton onClick={onApprove} color="primary">
					Yes
				</CButton>
			</CModalFooter>
		</CModal>
	);
}
