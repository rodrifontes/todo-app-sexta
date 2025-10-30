import { useState } from 'react';

import { Container } from './styles';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import Header from '../components/Header';
import NewTaskModal from '../components/NewTaskModal';
import Tasks from '../components/Tasks';

import { tasks } from '../mocks/tasks';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  function handleDeleteTask(id) {
    //alert(`Excluir tarefa de id ${id}`);
    setIsDeleteModalVisible(true);
  }

  function handleEditTask(task) {
    alert(`Alterar tarefa de id ${task.id}`);
  }

  function handleChangeStatus(id) {
    alert(`Excluir tarefa de id ${id}`);
  }

  function handleConfirmDeleteleTask() {
    alert('Excluir a tarefa');
  }

  function handleCreateTask(task) {
    alert(`{ title: ${task.title}, description: ${task.descrition} }`);
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

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onConfirm={handleConfirmDeleteleTask}
        onClose={() => setIsDeleteModalVisible(false)}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />
    </Container>
  );
}