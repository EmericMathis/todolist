"use client";

import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import { LoadingSpinner } from "@/components/ui/spinner";
import { ITask } from "@/types";
import { set } from "mongoose";
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

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
      {isLoading ? (<LoadingSpinner />)
        :
        (<ul>
          {allTasks.length > 0 ? allTasks.map((individualTask: ITask) => (
            <li key={individualTask._id}>{individualTask.task}</li>
          )) : (
            <p>No tasks</p>
          )}
        </ul>)
      }
    </>
  );
}
