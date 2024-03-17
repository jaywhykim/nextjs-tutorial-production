import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <h1 className="text-7xl"></h1>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
