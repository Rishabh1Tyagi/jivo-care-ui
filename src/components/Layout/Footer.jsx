import { Box, Typography, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Logo from "@/public/images/Logo.svg";
import SocialLogoOne from "@/public/images/Logo_One 1.svg";
import SocialLogoTwo from "@/public/images/Logo_One 2.svg";
import SocialLogoThree from "@/public/images/Logo_One 3.svg";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#0b4b46", color: "white", pt: 6, pb: 3 }}>
      <Grid container spacing={4} px={4}>
        <Grid item xs={12} md={2}>
          <Image 
            src={Logo}
            width={100}
            height={100}
            alt="logo"
          />
          <Typography variant="caption">One Platform, Total Care</Typography>
        </Grid>

        {[
          {
            title: "Know Us",
            items: [
              "About Us",
              "Contact Us",
              "Press Coverage",
              "Careers",
              "Business Partnership",
              "Become a Healthier Partner",
              "Corporate Governance",
            ],
          },
          {
            title: "Our Policies",
            items: [
              "Privacy Policy",
              "Terms & Conditions",
              "Editorial Policy",
              "Return Policy",
              "IP Policy",
              "Grievance Redressal Policy",
              "Fake Jobs & Fraud Disclaimer",
            ],
          },
          {
            title: "Our Services",
            items: [
              "Online Doctor Consultation",
              "Lab Test Booking",
              "Medicine Delivery",
              "Ambulance Services",
              "Health Insurance Plans",
              "BMI & Health Calculator",
            ],
          },
          {
            title: "Lab Tests",
            items: [
              "RT PCR Test at Home",
              "Book Lab Tests at Home",
              "Renal Profile (KFT, RFT Test)",
              "Lipid Profile Test",
              "Thyroid Profile Test (T3 T4 Tsh Test)",
              "Urine Culture Test",
              "Complete Blood Count (CBC Test)",
              "Liver Function Test (LFT Test)",
            ],
          },
        ].map((col, i) => (
          <Grid item xs={6} md={2} key={i}>
            <Typography fontWeight="bold" mb={1}>
              {col.title}
            </Typography>
            {col.items.map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                {item}
              </Typography>
            ))}
          </Grid>
        ))}

        <Grid item xs={12} md={2}>
          <Typography fontWeight="bold" mb={1}>
            Connect With Us
          </Typography>
          <Typography variant="body2">Social Links</Typography>
          <Box sx={{ mt: 1 }}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit">
              <YouTubeIcon />
            </IconButton>
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <Image src={SocialLogoOne} width={40} height={40} alt="badge1" />
            <Image src={SocialLogoTwo} width={40} height={40} alt="badge2" />
            <Image src={SocialLogoThree} width={40} height={40} alt="badge3" />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          borderTop: "1px solid #2f6f69",
          mt: 4,
          pt: 2,
          px: 4,
        }}
      ></Box>
      <Grid container spacing={3} px={4} mt={4}>
        {[
          {
            title: "Reliable",
            desc: "All products displayed on Jivo Care are procured from verified and licensed pharmacies.",
          },
          {
            title: "Secure",
            desc: "128-bit encryption and PCI DSS compliant payments.",
          },
          {
            title: "Affordable",
            desc: "Find affordable medicine substitutes.",
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Typography fontWeight="bold">{item.title}</Typography>

            <Typography
              variant="body2"
              sx={{
                whiteSpace: "normal",
                wordBreak: "break-word",
                lineHeight: 1.5,
                width: "100%",
              }}
            >
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          borderTop: "1px solid #2f6f69",
          mt: 4,
          pt: 2,
          px: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="caption">
          The content provided here and elsewhere on the Jivo Care website or
          mobile app is for general informational purposes only. It is not
          intended to serve as medical advice, diagnosis, or treatment. Jivo
          Care does not provide medical services directly. Always consult your
          healthcare provider for any medical concerns or specific advice
          regarding your health. 
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
