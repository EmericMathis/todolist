import { CheckIcon, Dot, TerminalIcon, TerminalSquare, ThermometerSnowflake, Trash2, X } from "lucide-react"

import { TaskProps } from "@/types"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Button } from "./button"
import clsx from "clsx"

const Task = ({ individualTask, handleCompleteTask, handleDeleteTask }: TaskProps) => {
    return (
        <div className="mb-2 flex gap-1 break-all">
            <Alert className={clsx({
                "text-muted bg-primary-foreground": individualTask.completed
            })} >
                <AlertDescription >
                    <li className={clsx({ "line-through": individualTask.completed })}>{individualTask.task}</li>
                </AlertDescription>
            </Alert>
            <Button className="justify-center mx-auto mt-auto" size="icon" onClick={() => handleCompleteTask(individualTask._id)}>
                {individualTask.completed ? <X /> : <CheckIcon />}
            </Button>
            <Button className="justify-center mx-auto mt-auto" size="icon" onClick={() => handleDeleteTask(individualTask._id)}><Trash2 /></Button>
        </div>
    )
}

export default Task