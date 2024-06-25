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
        <div className="mb-2 flex gap-3">
            <Alert  >
                <Terminal className="h-3 w-3" />
                <AlertDescription>
                    {individualTask.completed ?
                        <del>{individualTask.task}</del>
                        : <li>{individualTask.task}</li>
                    }
                </AlertDescription>
            </Alert>
            <Button className="justify-center m-auto" size="icon"><CheckIcon /></Button>
            <Button className="justify-center m-auto" size="icon"><Trash2 /></Button>
        </div>
    )
}

export default Task