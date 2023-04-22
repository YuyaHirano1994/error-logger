import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box component="Header" sx={{ width: "100vw", height: "100px", backgroundColor: "blue" }}>
      <Box component="div" sx={{ width: "100%", margin: "0 auto" }}>
        <Typography variant="h3" color={"white"} sx={{ letterSpacing: "2px", paddingTop: 2, paddingLeft: 2 }}>
          Error-logger
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
