import closeIcon from "./images/icon-cross.svg";
import { ITodo } from "./todo.type";
import { ChangeEvent, MouseEvent } from "react";
import iconCheck from "./images/icon-check.svg";

type TodoProps = {
  data: ITodo;
  onChecked: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const Todo = ({ data, onChecked, onDelete }: TodoProps) => {
  return (
    <div className="todo">
      <div
        className={`checkbox-container ${
          data.checked ? "gradient-marked" : ""
        }`}
      >
        <div
          className={`aspect-square bg-grayish-100 dark:bg-grayish-900 ${
            data.checked ? "gradient-marked" : ""
          } flex h-[1.1rem] w-[1.1rem] items-center justify-center rounded-full`}
        >
          <input
            type="checkbox"
            className="absolute z-10 h-full w-full cursor-pointer opacity-0"
            onChange={onChecked}
            checked={data.checked}
          />
          <img
            src={iconCheck}
            alt="check-icon"
            className={data.checked ? "opacity-100" : "opacity-0"}
          />
        </div>
      </div>
      <p
        className={`${
          data.checked ? "checked-text" : ""
        } content-text cursor-pointer`}
      >
        {data.content}
      </p>
      <button className="ml-auto select-none" onClick={onDelete}>
        <img src={closeIcon} alt="close-btn" />
      </button>
    </div>
  );
};
