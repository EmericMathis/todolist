"use client";

import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import { useState, useEffect } from "react";


export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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


  return (
    <>
      <Header />
      <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask} />
    </>
  );
}
