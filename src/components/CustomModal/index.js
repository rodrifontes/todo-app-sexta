import { Modal } from 'react-native';


import { ModalBody, Overlay } from './styles';

export default function CustomModal({ children, visible }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={visible}
    >
      <Overlay>
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}