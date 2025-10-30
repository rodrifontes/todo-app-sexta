import CustomModal from "../CustomModal";

import { Text } from '../Text';

import Button from "../Button";

import { ActionsContainer } from './styles';

export default function DeleteConfirmModal({ onClose, onConfirm, visible }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Text
        size={18}
        weight="600"
      >
        Tem certeza que deseja remover a tarefa?
      </Text>
      <Text
        opacity={0.5}
        style={{ marginTop: 6 }}
      >
        Essa ação não podera ser desfeita
      </Text>

      <ActionsContainer>
        <Button primary={false} onPress={onClose}>Cancelar</Button>

        <Button onPress={onConfirm}>Confirmar</Button>
      </ActionsContainer>
    </CustomModal>
  );
}