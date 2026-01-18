import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";
import DefaultIcon from "@/public/globe.svg";

const ServiceCard = ({ title, subtitle, icon }) => {
  return (
    <Card
      sx={{
        width: 220,
        height: 150,
        background: "#003236",
        color: "white",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={icon || DefaultIcon} width={50} height={50} alt={title} />
      </Box>

      <Box sx={{ mt: 1 }}>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mt: 0.5 }}>
          {subtitle}
        </Typography>
      </Box>
    </Card>
  );
};

export default ServiceCard;
