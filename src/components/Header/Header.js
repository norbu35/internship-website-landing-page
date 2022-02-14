import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo from "./images/GLogo.png";

const Header = () => {
  return (
    // Container
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 4,
        pr: 16,
        pl: 16,
      }}
    >
      {/* Logo */}
      <Box flex={1}>
        <img src={Logo} alt="Golomt Logo" width={240} />
      </Box>
      {/* Contact */}
      <Box flex={2} textAlign="center">
        <Typography variant="caption">
          Холбоо барих @ 7575-1111 /1705/, /1706/, /1665/ @ hr@golomtbank.com
        </Typography>
      </Box>
      {/* Button */}
      <Box flex={1} textAlign="right">
        <Button
          sx={{
            color: "#21286A",
          }}
        >
          Хөтөлбөрүүд
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
