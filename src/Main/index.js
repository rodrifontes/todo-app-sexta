import { useState } from 'react';

import { ActivityIndicator, Image } from 'react-native';

import { CenteredContainer, Container } from './styles';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import EditTaskModal from '../components/EditTaskModal';
import Header from '../components/Header';
import NewTaskModal from '../components/NewTaskModal';
import Tasks from '../components/Tasks';

import tasksEmpty from '../assets/images/task.png';
import { Text } from '../components/Text';

export default function Main() {
  const [tasks, setTasks] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdited, setTaskBeingEdited] = useState(false);
  const [taskIdBeingDeleted, setTaskIdBeingDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteTask(id) {
    setTaskIdBeingDeleted(id);
    setIsDeleteModalVisible(true);
  }

  function handleEditTask(task) {
    setTaskBeingEdited(task);
    setIsEditTaskModalVisible(true);
  }

  function handleChangeStatus(id) {
    alert(`Excluir tarefa de id ${id}`);
  }

  function handleConfirmDeleteleTask() {
    alert(`Excluir a tarefa de id ${taskIdBeingDeleted}`);
  }

  function handleCreateTask(task) {
    alert(`{ title: ${task.title}, description: ${task.description} }`);
    setIsNewTaskModalVisible(false);
  }

  function handleUpdateTask(task) {
    alert(`{ id: ${task.id}, title: ${task.title}, description: ${task.description} }`);
    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />

      {!isLoading && tasks.length > 0 && (
        <Tasks
          tasks={tasks}
          onChangeStatus={handleChangeStatus}
          onDelete={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      )}

      {!isLoading && tasks.length === 0 && (
        <CenteredContainer>
          <Image source={tasksEmpty} style={{ width: 200, height: 200, marginBottom: 16 }} />
          <Text weight="600" size={20} opacity={0.8} style={{ marginBottom: 8 }}>Sem tarefas</Text>
          <Text opacity={0.5}>Não há tarefas a serem visualizadas</Text>
        </CenteredContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator size='large' color="#666" />
        </CenteredContainer>
      )}

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

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleUpdateTask}
        task={taskBeingEdited}
      />
    </Container>
  );
}