import { Box, Typography,  Button }from "@mui/material";
import PackageCard from "@/src/components/Home/PackageCard";

const packages = [
  {
    title: "Fit India Basic Health Checkup",
    description: "Test included: Random Blood Sugar, Liver Function Test, Urine Routine...",
    price: 799,
    oldPrice: 2500,
    fasting: "Fasting Required 10 Hours",
    tests: "65 Tests",
    reportsTime: "Reports in 24 Hours",
    tag: "Packages",
    type: "For Male & Female",
  },
  {
    title: "Fit India Basic Health Checkup",
    description: "Test included: Random Blood Sugar, Liver Function Test, Urine Routine...",
    price: 799,
    oldPrice: 2500,
    fasting: "Fasting Required 10 Hours",
    tests: "65 Tests",
    reportsTime: "Reports in 24 Hours",
    tag: "Packages",
    type: "For Male & Female",
  },
    {
    title: "Fit India Basic Health Checkup",
    description: "Test included: Random Blood Sugar, Liver Function Test, Urine Routine...",
    price: 799,
    oldPrice: 2500,
    fasting: "Fasting Required 10 Hours",
    tests: "65 Tests",
    reportsTime: "Reports in 24 Hours",
    tag: "Packages",
    type: "For Male & Female",
  },
    {
    title: "Fit India Basic Health Checkup",
    description: "Test included: Random Blood Sugar, Liver Function Test, Urine Routine...",
    price: 799,
    oldPrice: 2500,
    fasting: "Fasting Required 10 Hours",
    tests: "65 Tests",
    reportsTime: "Reports in 24 Hours",
    tag: "Packages",
    type: "For Male & Female",
  },
];

const PackageCardInfo = () => {
  return (
    <>
    <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
          mt:4,
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
        >
          View All
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 3, margin:4, overflowX: "auto", justifyContent:"space-between" }}>
        {packages.map((item, index) => (
          <PackageCard
            key={index}
            title={item.title}
            description={item.description}
            price={item.price}
            oldPrice={item.oldPrice}
            fasting={item.fasting}
            tests={item.tests}
            reportsTime={item.reportsTime}
            tag={item.tag}
            type={item.type}
          />
        ))}
      </Box>
</>
  );
};

export default PackageCardInfo;
