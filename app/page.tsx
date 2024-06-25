"use client";

import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import NoTask from "@/components/NoTask";
import { Divider } from "@/components/ui/divider";
import { LoadingSpinner } from "@/components/ui/spinner";
import Task from "@/components/ui/task";
import { ITask } from "@/types";
import { useState, useEffect } from "react";


export default function Home() {
  const [task, setTask] = useState(""); // valeur du champ de saisie
  const [isLoading, setIsLoading] = useState(true); // état de chargement
  const [allTasks, setAllTasks] = useState([]); // tableau de toutes les tâches

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      // ici j'envoie la requête POST pour créer une nouvelle tâche à l'url /api/task/new de mon serveur Next
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({  // je convertis l'objet en JSON pour l'envoyer dans le body de la requête
          task: task
        }),
      })
      if (response.ok) {
        setTask("") // je réinitialise le champ de saisie après avoir créé la tâche
        fetchTasks(); // je recharge la liste de tâches pour afficher la nouvelle tâche
      }
      else {
        console.log("error");
      }
    }
    catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleCompleteTask = async () => {

  }

  const handleDeleteTask = async (id: string) => {
    try {
      console.log('Delete button clicked');
      const response = await fetch(`/api/task/delete/${id}`, {
        method: "DELETE"
      })
      if (response.ok) {
        setAllTasks((prevTasks) => prevTasks.filter((task: ITask) => task._id !== id))
      }
      else {
        console.log("error");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
      <Divider />
      {isLoading ? (<LoadingSpinner className="m-auto" />)
        :
        (<ul>
          {allTasks.length > 0 ? allTasks.map((individualTask: ITask) => (
            <Task
              key={individualTask._id}
              individualTask={individualTask}
              handleCompleteTask={handleCompleteTask}
              handleDeleteTask={handleDeleteTask}
            />
          )) : (
            <NoTask />
          )}
        </ul>)
      }
    </>
  );
}
