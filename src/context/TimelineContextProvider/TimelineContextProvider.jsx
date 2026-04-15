import { useState } from "react";
import { TimelineDataContext } from "./TimelineDataContext";


const TimelineContextProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);

    const data = {
        name: "abdullah",
        timeline,
        setTimeline,
    }
    return (
        <TimelineDataContext value={data}>
            {children}
        </TimelineDataContext>
    );
};

export default TimelineContextProvider;