import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
    const [title, setTitle] = useState <string> ("hello")
    return (<div>
        Community{" "}
        <button onClick={() => alert ("HelloMIT")} style={{margin: "15px"}}> PressMe</button>
        </div>);
};

export default withLayoutBasic(Community);