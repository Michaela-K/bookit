import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Mobile from "./NavMobile";
import Desktop from "./NavDesktop";

export default function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? <Mobile matches={matches} /> : <Desktop matches={matches} />}
    </>
  );
}
