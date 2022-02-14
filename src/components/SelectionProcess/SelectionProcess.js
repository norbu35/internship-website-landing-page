import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import RightArrow from "./images/RightArrow.png";

const SelectionProcess = () => {
  //Grid arrow
  const Arrow = () => {
    return (
      <Box
        sx={{
          ml: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={RightArrow} alt="Right arrow" height={18} />
      </Box>
    );
  };

  // Grid item
  const Steps = ({ stepNo, stepText, isArrow }) => {
    return (
      // Step box
      <Box
        sx={{
          display: "flex",
          ml: 3,
        }}
      >
        <Box
          sx={{
            width: 45,
            height: 45,
            bgcolor: "#21286A",
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Step number */}
          <Box>
            <Typography variant="body1" color="white">
              {stepNo}
            </Typography>
          </Box>
        </Box>
        {/* Step text */}
        <Box
          sx={{
            ml: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle2">{stepText}</Typography>
        </Box>
        {/* Arrow */}
        {isArrow ? <Arrow /> : null}
      </Box>
    );
  };

  // Main return
  return (
    // Container
    <Box
      sx={{
        mt: 8,
        mb: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Grid header */}
      <Box p={4}>
        <Typography variant="h4">Сонгон шалгаруулалтын дараалал</Typography>
      </Box>
      {/* Grid items */}
      <Box
        sx={{
          mt: 1,
          p: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Steps stepNo={1} stepText={"Анкет хүлээн авах"} isArrow={true} />
        <Steps
          stepNo={2}
          stepText={"Оюутны анкеттай танилцах"}
          isArrow={true}
        />
        <Steps stepNo={3} stepText={"Сонгон шалгаруулах"} isArrow={true} />
        <Steps stepNo={4} stepText={"Шийдвэр"} isArrow={false} />
      </Box>
    </Box>
  );
};

export default SelectionProcess;
