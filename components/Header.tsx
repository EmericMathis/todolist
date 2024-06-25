import { List, ListCollapse } from "lucide-react"
import { ThemeToggle } from "./ModeToggle"


const Header = () => {
    return (
        <header className="flex py-4 mb-6 border border-b-primary border-transparent justify-between">

            <div className="flex">
                <ListCollapse className="p-1" size="32" />
                <h1 className="text-2xl font-bold">ToDoList</h1>
            </div>
            <div />
            <ThemeToggle />
        </header>
    )
}

export default Header