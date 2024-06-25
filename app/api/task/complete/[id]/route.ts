import Task from "@/models/tasks";
import { connectToDB } from "@/utils/database";

import { NextResponse } from "next/server";
import { IDeleteTaskRequestParams } from "@/types";

export const PATCH = async(request: Request, { params }: 
    IDeleteTaskRequestParams) => {
        try {
            await connectToDB()

            const existingTask = await Task.findById(params.id);

            if (!existingTask) {
                return NextResponse.json("Task not found", { status: 404 });
            }
            existingTask.completed = !existingTask.completed;
            await existingTask.save();

            return NextResponse.json("Task completed successfully", { status: 200 });
        }
        catch (error) {
            return NextResponse.json("Error completing task", { status: 500});
        }
    }