import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer2,
  BannerContent2,
  BannerDescription2,
  BannerImage2,
  BannerTitle2,
} from "../../styles/Banner2";

export default function Banner2() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer2 >
      <BannerContent2>
        {/* <Typography variant="h6">Huge Collection</Typography> */}
        <BannerTitle2 variant="h2">
          Control your Calendar
        </BannerTitle2>

        <BannerDescription2 variant="subtitle">
          <h3>So Why not ?! </h3>
          Click Register to Get started
        </BannerDescription2>

      </BannerContent2>
      <BannerImage2 src="/assets/happyHero2.png"/>
    </BannerContainer2>
  );
}