import FormTodo from "@/app/todo/components/form.todo";
import ListTodo from "@/app/todo/components/list.todo";
import { prisma } from "@/libs/prismadb";

import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

import { UserButton } from "@clerk/nextjs";

const TodoPage = async () => {
  const user: User | null = await currentUser();

  if (!user) {
    return <div>loading...</div>;
  }

  const todos = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
  });

  return (
    <div className="space-y-5">
      <h1 className="text-center text-3xl my-10">Todos: {user.username}</h1>
      <UserButton afterSignOutUrl="/" />
      <FormTodo />
      <ListTodo todos={todos} />
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
};

export default TodoPage;
