"use client";

import toast from "react-hot-toast";

import { useRef } from "react";
import { createTodo } from "../actions/todo.action";
import ButtonForm from "./button-form.todo";

import { ZodError } from "zod";
import { TodoZodSchema } from "../schema/todo.zod.schema";

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string;

    try {
      // validaciones de frontend
      TodoZodSchema.parse({ title });

      const responseBackend = await createTodo(title);

      if (!responseBackend.success) {
        return toast.error(responseBackend.message);
      }

      toast.success(responseBackend.message);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.issues.map((issue) => toast.error(issue.message));
      }
    } finally {
      formRef.current?.reset();
    }
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex"
    >
      <input
        type="text"
        name="title"
        className="border rounded border-gray-400 mr-2 p-2 w-full"
      />
      <ButtonForm />
    </form>
  );
};
export default FormTodo;
