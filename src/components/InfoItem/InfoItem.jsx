import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DefaultIcon from "@/public/globe.svg";
import RectangleImage from "@/public/images/Rectangle.svg";

const InfoItem = ({ icon, text }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box sx={{ position: "relative", width: 30, height: 30 }}>
        <Image
          src={RectangleImage}
          width={30}
          height={30}
          alt="rectangle-icon"
        />

        {/* Inner Icon */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image src={icon || DefaultIcon} width={30} height={30} alt="icon" />
        </Box>
      </Box>

      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default InfoItem;
