import { AlertCircle } from "lucide-react"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const NoTask = () => {
    return (
        <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle >There are no tasks at the moment</AlertTitle>
        </Alert>
    )
}

export default NoTask