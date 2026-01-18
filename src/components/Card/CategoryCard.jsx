import { Box, Typography } from "@mui/material";
import Image from "next/image";

const CategoryCard = ({ icon, label }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: 90,
          height: 90,
          bgcolor: "#dff1f1",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
      >
        <Image src={icon} width={40} height={40} alt={label} />
      </Box>
      <Typography fontWeight={500}>{label}</Typography>
    </Box>
  );
};

export default CategoryCard;
