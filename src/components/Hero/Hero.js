import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "../Header/Header";
import Logo from "./images/100.png";
import Shapes from "./images/Shapes.png";
import Dots from "./images/Dots.png";
import Background from "./images/Background.png";

const Hero = () => {
  return (
    // Component container
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        height: 695,
        // "linear-gradient(101.34deg, #E2B795 0%, #C0A8DB 47.92%, #F0ECE9 100%)"
      }}
    >
      {/* Site header */}
      <Header />
      {/* Hero container */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* Left box */}
        <Box
          flex={1}
          sx={{
            maxHeight: 585,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Hero Title */}
          <Box
            sx={{
              flexGrow: 3,
              display: "flex",
              alignItems: "flex-end",
              pl: 32,
              pb: 4,
            }}
          >
            <Typography variant="h3" textAlign="left">
              Оюутны тэтгэлэгч хөтөлбөр
            </Typography>
          </Box>
          {/* Hero Subtitle */}
          <Box
            sx={{
              flexGrow: 4,
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              pl: 32,
            }}
          >
            <Typography variant="subtitle2">
              Бүртгэлийн хугацаа 2021 оны 12-р сарын 10 наас 12-р сарын 19-г
              <br />
              дуустал үргэлжилнэ
            </Typography>
            {/* Button */}
            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                pl: 4,
                pr: 4,
                borderRadius: 13,
                bgcolor: "#21286A",
              }}
            >
              АНКЕТ ИЛГЭЭХ
            </Button>
          </Box>
        </Box>
        {/* Right box */}
        <Box
          flex={[1]}
          sx={{
            display: "flex",
            height: 585,
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Hero image */}
          <Box
            sx={{
              position: "absolute",
              height: 420,
              left: 75,
              top: 40,
              zIndex: 2,
              overflow: "hidden",
              borderRadius: 4,
            }}
          >
            <img src={Shapes} alt="Hero image" height="100%" />
          </Box>
          {/* Hero logo */}
          <Box
            sx={{
              bgcolor: "#fff",
              position: "relative",
              height: 200,
              width: 200,
              right: -350,
              bottom: -120,
              zIndex: 3,
              borderRadius: 5,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
            }}
          >
            <img src={Logo} alt="Hero logo" height={200} />
          </Box>
          {/* Hero dots */}
          <Box
            sx={{
              position: "absolute",
              height: 180,
              left: 35,
              bottom: 90,
              zIndex: 1,
            }}
          >
            <img src={Dots} alt="Dots" height={180} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
