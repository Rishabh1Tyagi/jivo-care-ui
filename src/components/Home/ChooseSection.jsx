import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import ChooseUsCard from "@/src/components/Card/ChooseUsCard";
// import logo
import DefaultIcon from "@/public/globe.svg";
import CovidImage from "@/public/images/Covid 19.svg";
import Preganancy from "@/public/images/Pregnancy.svg";
import Diabetes from "@/public/images/Diabetes.svg";
import Vitamin from "@/public/images/Vitamin.svg";
import DoctorImage from "@/public/images/Doctor-image.svg";

const categories = [
  { label: "Quality", icon: CovidImage || DefaultIcon },
  { label: "On-Time Services", icon: Preganancy || DefaultIcon },
  { label: "Convenience", icon: Diabetes || DefaultIcon },
  { label: "Availability", icon: Vitamin || DefaultIcon },
  { label: "Expert Assistance", icon: Vitamin || DefaultIcon },
];

const ChooseSection = () => {
  return (
<Box
  sx={{
    mt: 1,
    p: 8,
    background: "#FAFAFA",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Left Content */}
  <Box sx={{ width: "60%" }}>
    {/* Heading */}
    <Box sx={{ ml: 2, mb: 3 }}>
      <Typography variant="h5" fontWeight="bold">
        Why Book Tests With Us ?
      </Typography>
      <Typography variant="body2" sx={{ mt: 0.5, color: "gray" }}>
        According to the study presented at the 78th UN General Assembly,
      </Typography>
      <Typography variant="body2" sx={{ color: "gray" }}>
        Jivo Care’s tests are up to 8 times more cost-effective than national treatment coverage.
      </Typography>
    </Box>

    {/* Cards */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 2,
        ml: 2,
      }}
    >
      {categories.map((item, index) => (
        <ChooseUsCard key={index} icon={item.icon} label={item.label} />
      ))}
    </Box>
  </Box>

  {/* Doctor Image */}
  <Box
    sx={{
      position: "absolute",
      right: "5%",
      bottom: 40,
    }}
  >
    <Image src={DoctorImage} width={300} height={420} alt="doctor" />
  </Box>
</Box>

  );
};

export default ChooseSection;
