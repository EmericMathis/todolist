import { AddTaskProps } from "@/types"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
    return (
        <div className="flex gap-5">
            <Input
                placeholder="Add a task"
                onChange={(e) => setTask(e.target.value)}
                value={task}
            />
            <Button onClick={handleCreateTask}>Add Task</Button>
        </div>
    )
}

export default AddTask