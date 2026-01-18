import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NorthEastIcon from "@mui/icons-material/NorthEast";
// cart image
import CartImage from "@/public/images/Cart Icon.svg";
import CartFrame from "@/public/images/Frame.svg";
import Logo from "@/public/images/Logo.svg";
import ConsultSpecialist from "@/public/images/Consult Specialist.svg";
import LabTest from "@/public/images/Lab Test.svg";
import BuyMedicine from "@/public/images/Buy Medicines.svg";
import AmbulanceServices from "@/public/images/Health Specialist.svg";
import HealthInsurance from "@/public/images/Health Insurance Illustration.svg";
import HandImage from "@/public/images/Hand Image.svg";
import Shades from "@/public/images/Shades.svg";
import Report from '@/public/images/Report.svg';
import Truck from "@/public/images/truck.svg";
import SmartReport from "@/public/images/Smart_Report 1.svg";
// import component
import ServiceCard from "@/src/components/Card/ServiceCard";
import InfoItem from "@/src/components/InfoItem/InfoItem";

export default function Home() {
  return (
    <Box>
      {/* Header */}
      <AppBar
        position="static"
        style={{ background: "linear-gradient(135deg,#0f766e,#115e59)" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Image src={Logo} width={130} height={100} alt="Logo" style={{ cursor:"pointer" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Offerings
              <ExpandMoreIcon
                fontSize="small"
                style={{ marginBottom: "5px" }}
              />
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Health Insurance
              <ExpandMoreIcon
                fontSize="small"
                style={{ marginBottom: "5px" }}
              />
            </Button>
            <Button color="inherit" sx={{ textTransform: "none" }}>
              Wellness Calculators
              <ExpandMoreIcon
                fontSize="small"
                style={{ marginBottom: "5px" }}
              />
            </Button>
            <Box
              sx={{
                position: "relative",
                width: 28,
                height: 24,
                marginRight: "15px",
              }}
            >
              {/* Main Cart Image */}
              <Image
                src={CartImage}
                width={80}
                height={90}
                alt="Cart Logo"
                style={{ position: "absolute" }}
              />

              {/* Frame on top */}
              <Image
                src={CartFrame}
                width={18}
                height={16}
                alt="Frame Logo"
                style={{ position: "absolute", top: 4, left: 5 }}
              />
            </Box>

            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              style={{ background: "white", color: "black" }}
            >
              Sign Up <NorthEastIcon fontSize="16" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg,#0f766e,#115e59)",
          color: "white",
          py: 8,
        }}
      >
        <Container>
          <Box
            sx={{ display: "flex", gap: 2, justifyContent: "space-between" }}
          >
            <ServiceCard
              title="Consult Specialist"
              subtitle="Connect with healthcare experts"
              icon={ConsultSpecialist}
            />
            <ServiceCard
              title="Lab Test"
              subtitle="Convenient home sample collection"
              icon={LabTest}
            />
            <ServiceCard
              title="Buy Medicines"
              subtitle="Fast and secure medicine delivery"
              icon={BuyMedicine}
            />
            <ServiceCard
              title="Ambulance Services"
              subtitle="Reliable 24/7 emergency support"
              icon={AmbulanceServices}
            />
            <ServiceCard
              title="Health Insurance"
              subtitle="Cost-effective health coverage"
              icon={HealthInsurance}
            />
          </Box>
        </Container>
        <Container sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              right: "-70px",
              top: "-40px",
              zIndex: 1,
            }}
          >
            <Image src={HandImage} width={250} height={250} alt="Hand" />
          </Box>
          <Box sx={{ mt: 5 }}>
            <Typography variant="h4" fontWeight="bold">
              Book your next
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Lab Test Appointment
            </Typography>
            <Typography sx={{ mt: 1 }}>
              Search top-rated diagnostic labs across India, book instantly, and
              get your tests done with trusted health professionals.
            </Typography>
            <Box
              sx={{
                position: "absolute",
                right: "120px",
                top: "60%",
                transform: "translateY(-20%)",
              }}
            >
              <Image src={Shades} width={20} height={20} alt="shades logo" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 2,
              mt: 3,
              overflow: "hidden",
              padding: "10px",
              width: "90%",
            }}
          >
            {/* Location Input */}
            <TextField
              variant="standard"
              placeholder="Search Location"
              InputProps={{ disableUnderline: true }}
              sx={{
                flex: 1,
                px: 2,
                "& input::placeholder": {
                  color: "#003236",
                  opacity: 1,
                },
              }}
            />

            {/* Divider */}
            <Box
              sx={{
                width: "1px",
                height: "40px",
                bgcolor: "#e0e0e0",
                mx: 1,
              }}
            />

            <TextField
              variant="standard"
              placeholder="Find your Packages/Tests/Scan"
              InputProps={{ disableUnderline: true }}
              sx={{
                flex: 2,
                px: 2,
                "& input::placeholder": {
                  color: "#003236",
                  opacity: 1, // default opacity override
                },
              }}
            />

            {/* Search Button */}
            <Box
              sx={{
                bgcolor: "#003d33",
                px: 2,
                height: "50px",
                width: "50px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginRight: "8px",
              }}
            >
              <SearchIcon sx={{ color: "white" }} />
            </Box>
          </Box>
        </Container>
        {/* new info section start here */}
                <Container>
          <Box
            sx={{ 
              display: "flex", 
              gap: 1, 
              justifyContent: "space-between",
              marginTop: "20px"
            }}
          >
            <InfoItem
              text="Free Sample Collection within 60 Mins of Booking*"
              icon={Truck}
            />
            <InfoItem
              text="Smart Reports with Real-Time Updates"
              icon={SmartReport}
            />
            <InfoItem
              text="Free Report Counselling"
              icon={Report}
            />
          </Box>
        </Container>
        {/* new info section ends here */}
      </Box>
    </Box>
  );
}
