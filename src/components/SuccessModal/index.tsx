import { useEffect, useRef } from "react"

import CloseIcon from "../icons/Close"
import P from "../text/P"
import Button from "../Button"
import { ModalOverlay, Modal, closeButtonStyle, ModalContent } from "./styles"

type SuccessModalProps = {
  message: string
  buttonLabel: string
  handleButtonClick: () => void
  handleClose: () => void
}

const SuccessModal = ({ message, buttonLabel, handleButtonClick, handleClose }: SuccessModalProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if(buttonRef.current) {
      buttonRef.current.focus()
    }
  },[])

  return (
    <ModalOverlay onClick={handleClose}>
      <Modal>
        <CloseIcon onClick={handleClose} style={closeButtonStyle} />
        <ModalContent>
          <P>{message}</P>
          <Button 
            ref={buttonRef}
            variant='primary' 
            label={buttonLabel} 
            onClick={handleButtonClick} 
          />
        </ModalContent>
      </Modal>
    </ModalOverlay>
  )
}

export default SuccessModal