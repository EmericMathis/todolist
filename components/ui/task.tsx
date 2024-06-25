import { Terminal } from "lucide-react"

import { TaskProps } from "@/types"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const Task = ({ individualTask, handleCompleteTask, handleDeleteTask }: TaskProps) => {
    return (
        <Alert role="li" className="mb-2">
            <Terminal className="h-4 w-4" />
            <AlertDescription>
                {individualTask.completed ?
                    <del>{individualTask.task}</del>
                    : <li>{individualTask.task}</li>
                }
            </AlertDescription>
        </Alert>
    )
}

export default Task