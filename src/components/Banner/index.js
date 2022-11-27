import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/Banner";
// import image from "../../assets/yellowHero.jpeg"

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/assets/happyHero.png" />
      <BannerContent>
        {/* <Typography variant="h6">Huge Collection</Typography> */}
        <BannerTitle variant="h2">
          Agree to Disagree?
        </BannerTitle>

        <BannerDescription variant="subtitle">
          <h3>How about No! </h3>
          The App to use so you can ALL agree on the meet up time and date. Finally!
          <Button variant="contained" href="/register" sx={{background:"#E98074", borderRadius: "2px", mt: "2vh"}}>Register</Button>
        </BannerDescription>

      </BannerContent>
    </BannerContainer>
  );
}