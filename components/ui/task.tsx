import { CheckIcon, Terminal, Trash2 } from "lucide-react"

import { TaskProps } from "@/types"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Button } from "./button"

const Task = ({ individualTask, handleCompleteTask, handleDeleteTask }: TaskProps) => {
    return (
        <div className="mb-2 flex gap-3 break-all">
            <Alert  >
                <Terminal className="h-3 w-3" />
                <AlertDescription>
                    {individualTask.completed ?
                        <li><del>{individualTask.task}</del></li>
                        : <li>{individualTask.task}</li>
                    }
                </AlertDescription>
            </Alert>
            <Button className="justify-center m-auto" size="icon" onClick={() => handleCompleteTask(individualTask._id)}><CheckIcon /></Button>
            <Button className="justify-center m-auto" size="icon" onClick={() => handleDeleteTask(individualTask._id)}><Trash2 /></Button>
        </div>
    )
}

export default Task