import { Button } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/Banner";

export default function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Finalize the details and Let's meet!</BannerTitle>

        <BannerDescription variant="subtitle">
          <b>FINALLY!</b>
          <Button
            variant="contained"
            href="/register"
            sx={{
              background: "#E98074",
              mt: "3vh",
              height: "5vh",
              fontSize: "1.4rem",
            }}
          >
            Get Started
          </Button>
        </BannerDescription>
      </BannerContent>
      <BannerImage src="/assets/happyHero2.png" />
    </BannerContainer>
  );
}
