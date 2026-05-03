import { useState } from "react";

const Community = () => {
    console.log("COMMUNITY PAGE - PAGES ROUTER");
    const [title, setTitle] = useState <string> ("hello")
    return (<div>
        Community{" "}
        <button onClick={() => alert ("HelloMIT")} style={{margin: "15px"}}> PressMe</button>
        </div>);
};

export default Community;