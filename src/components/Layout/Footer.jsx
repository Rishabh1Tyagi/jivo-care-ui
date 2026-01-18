import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: "#0f766e",
          color: "white",
          mt: 6,
          py: 3,
          textAlign: "center",
        }}
      >
        <Typography>Footer Section</Typography>
      </Box>
    </>
  );
};

export default Footer;
