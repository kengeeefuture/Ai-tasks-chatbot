"use client";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    const newTask = { id: Date.now(), title };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">My Tasks</h1>

        <div className="flex mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New task..."
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="p-2 bg-gray-50 rounded border border-gray-200"
            >
              {t.title}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}