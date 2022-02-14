import React from "react";
import { Box, Typography } from "@mui/material";
import FaqAccordion from "./Accordion/FaqAccordion";

const FAQ = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 4,
      }}
    >
      {/* Header */}
      <Box>
        <Typography variant="h4" textAlign="center">
          Түгээмэл асуулт, хариулт
        </Typography>
      </Box>
      {/* Accordion */}
      <Box
        sx={{
          width: 1100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "0 auto",
          mt: 12,
        }}
      >
        {/* Left Accordion */}
        <Box width={500}>
          <FaqAccordion />
        </Box>
        {/* Right Accordion */}
        <Box width={500}>
          <FaqAccordion />
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
