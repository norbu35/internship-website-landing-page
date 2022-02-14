import { Box, Stack, ListItem, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        m: "0 auto",
        pt: 12,
        width: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack direction="row">
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </Stack>
      </Box>
      <Box textAlign="center">
        <Typography variant="caption">© 2022 | Golomt Bank </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
