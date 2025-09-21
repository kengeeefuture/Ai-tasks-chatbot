"use client";

import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react"; // 👈 import trash icon

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Load tasks from localStorage when the page first loads
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!title.trim()) return;
    const newTask = { id: Date.now(), title };
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">
          My Tasks
        </h1>

        <div className="flex mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New task..."
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none text-black placeholder-gray-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-black px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center p-2 bg-gray-50 rounded border border-gray-200 text-black"
            >
              <span>{t.title}</span>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} /> {/* 👈 trash can icon */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
