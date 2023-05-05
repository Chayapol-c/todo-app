import {Todo} from "./Todo";
import {useAtom} from "jotai/index";
import {ITodo} from "./todo.type";
import {
  readTodoListAtom,
  deleteTodoListAtom,
  checkedTodoListAtom,
  readWriteFilterAtom,
  updateTodoListAtom,
  clearTodoListAtom,
} from "./atom";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

export const TodoList = () => {
  const [todoList] = useAtom<ITodo[]>(readTodoListAtom);
  const [, deleteTodoList] = useAtom(deleteTodoListAtom);
  const [, checkedTodoList] = useAtom(checkedTodoListAtom);
  const [, updateTodoList] = useAtom(updateTodoListAtom);
  const [, clearTodoList] = useAtom(clearTodoListAtom);
  const [filter, setFilter] = useAtom(readWriteFilterAtom);
  const handleDeleteTodo = (id: string) => {
    const deletedTodo = todoList.find((todo) => todo.id === id);
    if (deletedTodo) {
      deleteTodoList(deletedTodo.id);
    }
  };
  
  const handleChecked = (id: string) => {
    const checkTodo = todoList.find((todo) => todo.id === id);
    if (checkTodo) {
      checkedTodoList(checkTodo.id);
    }
  };
  
  const handleDragEnd = (droppedItem: DropResult) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    const updatedList = [...todoList];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    updateTodoList(updatedList);
  };
  return (
    <>
      <section className="todo-list-section">
        <DragDropContext onDragEnd={handleDragEnd}>
          {todoList.length > 0 ? (
            <Droppable droppableId="list-container">
              {(provided) => (
                <div
                  className="list-container"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {todoList.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          className="item-container"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <Todo
                            data={item}
                            onChecked={() => handleChecked(item.id)}
                            onDelete={() => handleDeleteTodo(item.id)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ) : (
            <div className="content-text py-8 text-center text-lg border-b border-grayish-200 dark:border-grayish-800">No Todos</div>
          )}
        </DragDropContext>
        <div className="flex items-center p-4">
          <div className="menu-text mr-auto text-xs">
            {todoList.length} items left
          </div>
          <div className="md:flex gap-5 hidden">
            <button
              className={`${
                filter === "all" ? "text-primary dark:text-primary" : ""
              } menu-text`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`${
                filter === "active" ? "text-primary dark:text-primary" : ""
              } menu-text`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`${
                filter === "completed" ? "text-primary dark:text-primary" : ""
              } menu-text`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
          <button className="menu-text ml-auto" onClick={() => clearTodoList()}>
            Clear Completed
          </button>
        </div>
      </section>
      <div className="flex justify-center gap-5 bg-grayish-100 dark:bg-grayish-900 mt-4 p-4 shadow-md rounded-md">
        <button
          className={`${
            filter === "all" ? "text-primary dark:text-primary" : ""
          } menu-text`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active" ? "text-primary dark:text-primary" : ""
          } menu-text`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed" ? "text-primary dark:text-primary" : ""
          } menu-text`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
    </>
  );
};
