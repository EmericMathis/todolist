import Task from "@/models/tasks";
import { connectToDB } from "@/utils/database";

import { NextResponse } from "next/server";

export const GET = async(request: Request) => {
    try {
        await connectToDB();

        const tasks = await Task.find();

        // Créer une réponse avec les données
        const response = NextResponse.json(tasks, { status: 200 });
        // Définir l'en-tête Cache-Control pour éviter la mise en cache
        response.headers.set('Cache-Control', 'no-store');
        
        return response;
    }
    catch (error) {
        console.log(error);
        // Gérer l'erreur et désactiver la mise en cache pour les réponses d'erreur également
        const response = NextResponse.json("Failed to fetch all tasks" , { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        
        return response;
    }
}
