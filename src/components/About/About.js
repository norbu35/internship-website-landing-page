import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import IconLamp from "./images/Lamp.png";
import IconWindow from "./images/Window.png";
import IconCircles from "./images/Circles.png";
import IconRuler from "./images/Ruler.png";
import IconLaptop from "./images/Laptop.png";
import IconPhone from "./images/Phone.png";

const About = () => {
  const Item = ({ icon, text }) => {
    return (
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={icon} alt="" height={48} width={48} />
        <Typography variant="" mt={2} width={150}>
          {text}
        </Typography>
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Grid container */}
      <Grid
        container
        gap={1}
        rowSpacing={6}
        justifyContent="space-around"
        width={976}
        textAlign="center"
      >
        {/* Grid header */}
        <Grid item xs={12} pb={5}>
          <Typography variant="h4">Бидний нэг болсноор</Typography>
        </Grid>
        {/* Grid items */}
        <Item
          icon={IconLamp}
          text={"Эрч хүчтэй, бүтээлч, чадварлаг хамт олон"}
        />
        <Item
          icon={IconWindow}
          text={"Мэргэжлийн чадварлаг банкируудтай хамт өсөж дэвжих боломж"}
        />
        <Item
          icon={IconCircles}
          text={"Мэргэжлийн чадварлаг банкируудтай хамт өсөж дэвжих боломж"}
        />
        <Item icon={IconRuler} text={"Өрсөлдөхүйц цалин хөлс, урамшуулал"} />
        <Item icon={IconLaptop} text={"Тасралтгүй сурч хөгжих боломж"} />
        <Item
          icon={IconPhone}
          text={"Бүх төрлийн нийгэм, ахуйн хөнгөлөлт, хангамж"}
        />
      </Grid>
    </Box>
  );
};

export default About;
