"use client"

import TaskList from "@/components/TasksList"
import { getAllList } from "@/actions/todoActions";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchTodos = async () => {
        try {
            const todoList = await getAllList();
            setData(todoList);
        } catch (error) {
            console.log("Failed to fetch todos:", error);
        }
    };
    fetchTodos();
  }, []);
  console.log(data);
  return (
    <>
    { data && data.map((todo:any, key:string)=>(
      <div key={key}>
        <TaskList todo={todo} />
      </div>
    ))}
    </>
  )
}
