import { useSQLiteContext } from "expo-sqlite";

export function useTasksDatabase() {
  const database = useSQLiteContext();

  async function show() {
    try {
      const query = "SELECT * FROM tasks ORDER BY create_date desc";
      const response = await database.getAllAsync(query);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function create(task) {
    try {
      const query = "INSERT INTO tasks (title, description) VALUES ($title, $description)";

      const statement = await database.prepareAsync(query);

      await statement.executeAsync({
        $title: task.title,
        $description: task.description
      });
    } catch (error) {
      console.log(error);
    } finally {
      statement.finalizeAsync();
    }
  }

  async function update(task) {
    try {
      const query = "UPDATE tasks SET title = $title, description = $description WHERE id = $id";

      const statement = await database.prepareAsync(query);

      await statement.executeAsync({
        $id: task.id,
        $title: task.title,
        $description: task.description
      });
    } catch (error) {
      console.log(error);
    } finally {
      statement.finalizeAsync();
    }
  }

  async function remove(id) {
    const query = `DELETE FROM tasks WHERE id = ${id}`;
    await database.execAsync(query);
  }

  async function updateStatus(id) {
    const query = `UPDATE tasks SET done = not done WHERE id = ${id}`;
    await database.execAsync(query);
  }

  return { show, create, update, updateStatus, remove };
}