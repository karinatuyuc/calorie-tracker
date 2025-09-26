import type { Activity } from "../types/index.ts";


type CalorieTrackerProps = {
    activities: Activity[]
}


export default function CalorieTracker({activities} : CalorieTrackerProps) {
    return (
        <div>CalorieTracker</div>
    )
}