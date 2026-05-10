import withLayoutBasic from "../libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";
import useDeviceDetect from "../libs/hooks/useDeviceDetect";

const PropertyDetail = () => {
   const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Propeety Dertail Mobile</Stack>;
  } else {
  return (
      <Container>DETAIL</Container>
  );
};
}

export default withLayoutBasic(PropertyDetail);