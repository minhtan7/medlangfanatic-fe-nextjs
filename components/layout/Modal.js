import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"
import ReactDOM from 'react-dom'

export default function ModalNext({ show, handleClose, title, children }) {
    const [isBrower, setIsBrowser] = useState(false)
    useEffect(() => setIsBrowser(true))

    const modalContent = show ? (
        <Modal show={show} onHide={handleClose} >
            {children}
        </Modal>
    ) : null

    if (isBrower)
        return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))
    else return null
}
