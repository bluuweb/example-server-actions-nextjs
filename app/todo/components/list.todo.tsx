import { TodoInterface } from "../interfaces/todo.interface";
import ItemTodo from "./item.todo";

interface ListTodoProps {
  todos: TodoInterface[];
}

const ListTodo = ({ todos }: ListTodoProps) => {
  if (!todos.length)
    return <div className="text-center text-2xl">No hay tareas</div>;

  return (
    <div>
      {todos.map((todo) => (
        <ItemTodo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};
export default ListTodo;
