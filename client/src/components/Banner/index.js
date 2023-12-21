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
        <BannerTitle>
            Agree to Disagree?
        </BannerTitle>

        <BannerDescription variant="subtitle">
          <h1>I don't think so! </h1>
          <h4>
            The App to use so you can ALL agree on the meet up time and date. Finally!
          </h4>
          <Button variant="contained" href="/register" sx={{background:"#E98074", mt: "2vh"}}>Get Started</Button>
        </BannerDescription>

      </BannerContent>
    </BannerContainer>
  );
}