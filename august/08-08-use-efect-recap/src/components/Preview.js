import { useEffect } from "react";

export default function Preview() {
    useEffect(() => {
        return () => {
            console.log("Preview Component removed");
        }
    }, [])
    
    return (
        <div>Preview</div>
    )
}