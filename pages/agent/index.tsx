import { NextPage } from "next";
import { useState } from "react";
import withLayoutBasic from "../libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";

const Agent: NextPage = () => {
    return (
      <div style={{margin: '20px 0'}}>
        <Stack className="container"> Agent </Stack>
       </div>
  );
};

export default withLayoutBasic(Agent);