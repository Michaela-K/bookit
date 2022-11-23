import { Typography, useMediaQuery } from "@mui/material";
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
      <BannerImage src="/assets/yellowHero.jpeg" />
      <BannerContent>
        {/* <Typography variant="h6">Huge Collection</Typography> */}
        <BannerTitle variant="h2">
          On Your Time
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

      </BannerContent>
    </BannerContainer>
  );
}