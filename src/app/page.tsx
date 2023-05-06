"use client";
import Todo from "@/interfaces/TodoInterface";

const sampleData: Todo[] = [
  {
    task: "Put Butter on bread",
    isCompleted: false,
  },
  {
    task: "Heat Bread First",
    isCompleted: true,
  },
  {
    task: "Put Rose petals in the pan first",
    isCompleted: false,
  },
  {
    task: "Do not close your eyes",
    isCompleted: false,
  },
];

export default function Home() {
  return (
    <main className="select-none flex min-h-screen flex-col items-center justify-center px-2 md:px-0">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-bold text-2xl">
          Create, Assign, and Conquer your Tasks 📝
        </h1>
        <div className="bg-gray-500 h-0.5 rounded-full mb-2"></div>
        <AddTodo />
        <TodoList tList={sampleData} />
      </div>
    </main>
  );
}

function TodoList({ tList }: { tList: Todo[] }) {
  return (
    <div className="flex flex-col gap-y-2">
      {tList.map((v, idx) => {
        return <Todo t={v} key={Math.random() + idx} />;
      })}
    </div>
  );
}

function Todo({ t }: { t: Todo }) {
  return (
    <div className="max-w-xl flex gap-x-2 hover:gap-x-3 shadow hover:shadow-gray-800 rounded-xl px-2 py-1 border border-gray-500 hover:border-2">
      <input type="checkbox" name="" id="" checked={t.isCompleted} />
      <span>{t.task}</span>
    </div>
  );
}

function AddTodo() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-transparent w-full rounded-xl border border-gray-500 outline-none px-2 py-1"
          placeholder="Add new todo's here"
          enterKeyHint="enter"
        />
        <button className="absolute inset-y-0 right-0 px-4" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
