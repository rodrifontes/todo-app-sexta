import Button from '../Button';

import { Form, Input } from './styles';

export default function TaskForm({ onSave }) {
  return (
    <Form>
      <Input
        placeholder="Título"
      />

      <Input
        placeholder="Descrição"
      />

      <Button onPress={onSave} disabled={false}>
        Cadastrar
      </Button>
    </Form>
  );
}