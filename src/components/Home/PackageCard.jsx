import { Box, Typography, Button, Chip } from "@mui/material";

const PackageCard = ({
  title,
  description,
  price,
  oldPrice,
  fasting,
  tests,
  reportsTime,
  tag,
  type,
}) => {
  return (
    <Box
      sx={{
        width: 300,
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Chip label={type} size="small" />
        <Chip label={tag} size="small" color="primary" />
      </Box>

      <Typography fontWeight="bold">{title}</Typography>

      {/* Description */}
      <Typography variant="body2" color="gray">
        {description}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="caption">⏱ {fasting}</Typography>
        <Typography variant="caption">🧪 {tests}</Typography>
        <Typography variant="caption">📄 {reportsTime}</Typography>
      </Box>

      <Box>
        <Typography fontWeight="bold">₹{price}</Typography>
        <Typography
          variant="caption"
          sx={{ textDecoration: "line-through", color: "red" }}
        >
          ₹{oldPrice}
        </Typography>
      </Box>

<Box sx={{ display: "flex", gap: 1 }}>
  <Button
    variant="outlined"
    sx={{
      flex: 1,
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 0.5,
    }}
  >
    Add to Cart <span>+</span>
  </Button>

  <Button
    variant="contained"
    sx={{
      flex: 1,
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 0.5,
    }}
  >
    Book Now <span>→</span>
  </Button>
</Box>

    </Box>
  );
};

export default PackageCard;
