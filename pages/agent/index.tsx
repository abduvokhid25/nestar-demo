import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import useDeviceDetect from "../libs/hooks/useDeviceDetect";

const Agent: NextPage = () => {
const device = useDeviceDetect();
  
    if (device === "mobile") {
      return <Stack>Agent Mobile</Stack>;
    }

    else{
    return (
      <div style={{margin: '20px 0'}}>
        <Stack className="container"> Agent </Stack>
       </div>
  );
}
};

export default withLayoutBasic(Agent);