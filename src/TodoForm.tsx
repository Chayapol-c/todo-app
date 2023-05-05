import { FormEvent, useState } from "react";
import { useAtom } from "jotai";
import { addTodoListAtom, readTodoListAtom } from "./atom";

export const TodoForm = () => {
  const [_, setTodoList] = useAtom(addTodoListAtom);
  const [todoList] = useAtom(readTodoListAtom);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSubject = event.target.todo.value;
    if (!newSubject) return;
    setTodoList({
      id: (todoList.length - 1).toString(),
      content: newSubject,
      checked: false,
    });
    event.target.todo.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form mb-8">
      <div className="aspect-square h-5 w-5 rounded-full border border-grayish-200 dark:border-grayish-800"></div>
      <input
        type="text"
        id="todo"
        placeholder="Enter todo"
        className="w-full bg-inherit focus:outline-none"
        name="todo"
      />
    </form>
  );
};
