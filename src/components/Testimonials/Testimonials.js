import React from "react";
import { Box, Avatar, Typography, IconButton } from "@mui/material";
import Background from "./images/Background.png";
import Next from "./images/next.png";
import Prev from "./images/prev.png";

const Testimonials = () => {
  return (
    // Component container
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        height: 695,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // "linear-gradient(101.34deg, #E2B795 0%, #C0A8DB 47.92%, #F0ECE9 100%)"
      }}
    >
      {/* Testimonial container */}
      <Box
        sx={{
          width: 1170,
          height: 420,
          display: "flex",
        }}
      >
        {/* Left arrow button */}
        <Box flex={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              display: "relative",
              top: 150,
              left: 100,
            }}
          >
            <img src={Prev} alt="Arrow prev" />
          </IconButton>
        </Box>
        {/* Testimonial content */}
        <Box
          flex={3}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Avatar */}
          <Box
            flex={1}
            sx={{
              alignSelf: "center",
              pt: 2,
            }}
          >
            <Avatar
              src="data:image/jpeg;base64,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"
              alt="Profile pic"
              sx={{
                height: 85,
                width: 85,
              }}
            />
          </Box>
          {/* Text */}
          <Box
            flex={3}
            sx={{
              textAlign: "center",
              justifyItems: "center",
              p: 1,
            }}
          >
            <Typography variant="subtitle2" color="white">
              Student name
            </Typography>
            <Typography variant="caption" color="white">
              Student Course
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{
                pt: 2,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quod facilis ratione aut voluptas amet neque laboriosam
              asperiores, nam omnis, sint, ipsa adipisci dolores fuga! Nesciunt
              voluptates minus nam asperiores velit quos optio consectetur
              exercitationem. Exercitationem provident at, pariatur, deserunt
              sit recusandae quam harum delectus sed ratione voluptas quidem
              illo!
            </Typography>
          </Box>
        </Box>
        {/* Right arrow button */}
        <Box flex={1}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              display: "relative",
              top: 150,
              left: 100,
            }}
          >
            <img src={Next} alt="Arrow next" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
