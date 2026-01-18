import { Box, Typography, Button, } from "@mui/material";
import CategoryCard from "../Card/CategoryCard";
// import logo
import DefaultIcon from "@/public/globe.svg";
import CovidImage from "@/public/images/Covid 19.svg";
import Preganancy from "@/public/images/Pregnancy.svg";
import Diabetes from "@/public/images/Diabetes.svg";
import Vitamin from "@/public/images/Vitamin.svg";

const categories = [
  { label: "Covid 19", icon: CovidImage || DefaultIcon },
  { label: "Pregnancy", icon: Preganancy || DefaultIcon },
  { label: "Diabetes", icon: Diabetes || DefaultIcon },
  { label: "Vitamin", icon: Vitamin || DefaultIcon },
  { label: "Blood", icon: CovidImage || DefaultIcon },
  { label: "Liver", icon: Preganancy || DefaultIcon },
  { label: "Vitamin", icon: Diabetes || DefaultIcon },
  { label: "Blood", icon: Vitamin || DefaultIcon },
];

const SectionLayout = () => {
  return (
    <Box sx={{ mt: 1, p:8, background:"#FAFAFA" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Box style={{ marginLeft:"20px" }}>
          <Typography variant="h5" fontWeight="bold">
            Advanced Diagnostic Tests for Your Body’s Vital Organs
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, color: "gray" }}>
            Explore our comprehensive range of diagnostic tests tailored for vital body organs.
          </Typography>
        </Box>

        <Button variant="outlined"
        style={{ marginRight:"30px" }} 
        // endIcon={<ArrowForwardIcon />}
        >
          View All
        </Button>
      </Box>

      {/* Cards Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent:"space-around",
          gap: 3,
          overflowX: "auto",
          pb: 1,
        }}
      >
        {categories.map((item, index) => (
          <CategoryCard
            key={index}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </Box>
    </Box>
  );
}


export default SectionLayout;