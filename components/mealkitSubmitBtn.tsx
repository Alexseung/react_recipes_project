import { Modal, ModalBody, ModalCloseButton, ModalHeader, ModalFooter, ModalContent, ModalOverlay, useDisclosure, Button } from "@chakra-ui/react";
export default function(){
  const {isOpen, onClose, onOpen} = useDisclosure();
  return <div>
    <Button onClick={onOpen}>모달창</Button>
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>제목</ModalHeader>
        <ModalCloseButton />
        <ModalBody>본문</ModalBody>
        <ModalFooter>꼬릿말</ModalFooter>
      </ModalContent>
    </Modal>
  </div>
}