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
        <BannerTitle>Tired of the back-and-forth in event planning? </BannerTitle>

        <BannerDescription variant="subtitle">
        Quickly confirm attendance by creating and sending event invitations to friends, family, and colleagues.
          <Button
            variant="contained"
            href="/register"
            sx={{
              background: "#E98074",
              mt: "3vh",
              height: "5vh",
              fontSize: "1.1rem",
              width: "10rem",
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
