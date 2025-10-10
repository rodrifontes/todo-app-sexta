import { Container } from './styles';

import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { tasks } from '../mocks/tasks';

export default function Main() {
  function handleDeleteTask(id) {
    alert(`Excluir tarefa de id ${id}`);
  }

  function handleEditTask(task) {
    alert(`Alterar tarefa de id ${task.id}`);
  }

  function handleChangeStatus(id) {
    alert(`Excluir tarefa de id ${id}`);
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onDelete={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </Container>
  );
}