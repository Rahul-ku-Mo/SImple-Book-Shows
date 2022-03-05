import { Typography } from "@mui/material";
import React from "react";

const Text = ({ value }) => {
  return (
    <Typography sx={{ fontFamily: " 'Poppins', serif", fontWeight: "500" }}>
      {value}
    </Typography>
  );
};

export default Text;
