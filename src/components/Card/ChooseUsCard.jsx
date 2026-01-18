import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ChooseUsCard = ({ icon, label }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: "200px",
          height: 90,
          bgcolor: "#FFFFFF",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
      >
        <Image src={icon} width={40} height={40} alt={label} />
        <Typography fontWeight={500}>{label}</Typography>
      </Box>
    </Box>
  );
};

export default ChooseUsCard;
