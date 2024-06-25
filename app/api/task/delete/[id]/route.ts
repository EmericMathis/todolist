import Task from "@/models/tasks";
import { connectToDB } from "@/utils/database";

import { NextResponse } from "next/server";
import { IDeleteTaskRequestParams } from "@/types";

export const DELETE = async(request: Request, { params }: 
    IDeleteTaskRequestParams) => {
        try {
            await connectToDB()

            await Task.findByIdAndDelete(params.id);

            return NextResponse.json("Task deleted successfully", { status: 200 });
        }
        catch (error) {
            console.log(error);
            return NextResponse.json("Error deleting task", { status: 500});
        }
    }