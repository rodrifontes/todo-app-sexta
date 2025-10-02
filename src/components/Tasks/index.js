import { Text } from '../Text';

import { Task, TaskDescription, TaskFooter, TaskHeader } from './styles';

export default function Tasks() {
  return (
    <Task>
      <TaskHeader>
        <Text size={18} weight="600">Estudar para o simulado</Text>
      </TaskHeader>
      <TaskDescription>
        <Text opacity={0.5}>Simulado Mobile dia 03/10</Text>
      </TaskDescription>
      <TaskFooter></TaskFooter>
    </Task>
  );
}