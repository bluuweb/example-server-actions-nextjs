"use client";

import { useTransition } from "react";
import { toast } from "react-hot-toast";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { removeTodo } from "../actions/todo.action";
import { TodoInterface } from "../interfaces/todo.interface";

interface ItemTodoProps {
  todo: TodoInterface;
}

const ItemTodo = ({ todo }: ItemTodoProps) => {
  let [isPending, startTransition] = useTransition();

  const handleClickRemove = async (id: string) => {
    const res = await removeTodo(id);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Todo removed");
    }
  };

  return (
    <div className="border border-gray-400 rounded mb-2 p-2 flex justify-between items-center">
      <span>{todo.title}</span>
      <button onClick={() => startTransition(() => handleClickRemove(todo.id))}>
        {isPending ? (
          <span className="block animate-spin">
            <FaSpinner className="transform rotate-90" />
          </span>
        ) : (
          <FaTrash />
        )}
      </button>
    </div>
  );
};
export default ItemTodo;
