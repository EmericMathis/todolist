import Task from "@/models/tasks"; 
import { connectToDB } from "@/utils/database"; 

import { NextResponse } from "next/server"; // import de la fonction NextResponse pour gérer les réponses de la requête HTTP 

export const POST = async(request: Request) => {
    const  { task } = await request.json(); // je récupère la tâche envoyée dans le body de la requête

    try {
        await connectToDB(); 
        const newTask = new Task({task}); // je crée une nouvelle instance de la tâche avec le contenu de la tâche envoyée depuis le client

        await newTask.save(); // je sauvegarde la tâche dans la base de données

        return NextResponse.json(
            newTask,
            {status: 201} // le code 201 signifie que la ressource a été créée avec succès
        )
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(
            "Failed to create a new task",
            {status: 500} // le code 500 signifie une erreur interne du serveur
        )
    }
}