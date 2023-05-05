import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ITodo } from "./todo.type";

const todoListAtom = atom<ITodo[]>([]);

const readTodoListAtom = atom((get) => {
  const filter = get(filterAtom);
  switch (filter) {
    case "completed":
      return get(todoListAtom).filter((todo) => todo.checked);
    case "active":
      return get(todoListAtom).filter((todo) => !todo.checked);
    default:
      return get(todoListAtom);
  }
});
const addTodoListAtom = atom(null, (get, set, update: ITodo) => {
  // `update` is any single value we receive for updating this atom
  set(todoListAtom, [...get(todoListAtom), update]);
});

const deleteTodoListAtom = atom(null, (get, set, todoId: string) => {
  const deleteTodo = get(todoListAtom).filter((todo) => todo.id !== todoId);
  set(todoListAtom, deleteTodo);
});

const clearTodoListAtom = atom(null, (get, set) => {
  const clearedTodo = get(todoListAtom).filter((todo) => !todo.checked);
  set(todoListAtom, clearedTodo);
});

const checkedTodoListAtom = atom(null, (get, set, todoId: string) => {
  const updateTodo = get(todoListAtom).map((todo) => {
    if (todo.id === todoId) {
      return { ...todo, checked: !todo.checked };
    }
    return todo;
  });
  set(todoListAtom, updateTodo);
});

const filterAtom = atom("all");
const readWriteFilterAtom = atom(
  (get) => get(filterAtom),
  (get, set, newValue: string) => {
    set(filterAtom, newValue);
  }
);

const updateTodoListAtom = atom(
  (get) => get(todoListAtom),
  (get, set, newValue: ITodo[]) => {
    set(todoListAtom, newValue);
  }
);

const isDarkModeAtom = atomWithStorage("isDarkMode", true);

export {
  todoListAtom,
  readTodoListAtom,
  addTodoListAtom,
  deleteTodoListAtom,
  checkedTodoListAtom,
  updateTodoListAtom,
  readWriteFilterAtom,
  clearTodoListAtom,
  isDarkModeAtom,
};
