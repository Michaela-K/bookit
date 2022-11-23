import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer, TestimonialImage } from "../../styles/Testimonials";
import { Colors } from "../../styles/theme";

const customers = [
  "Agree to Agree !", 
  "Manage your calendar",
  "Connect to Gmail or Outlook",
]

export default function Testimonials() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
            setTimeout(() => {
              setShow(false);
            }, 3000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % customers.length);

      // slide the message in
        setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef} overflow="hidden" src="/assets/yellowHero.jpeg">
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        container={containerRef.current}
        timeout={{
          enter: 500,
          exit: 400,
        }}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TestimonialImage src="/assets/yellowHero.jpeg" />
          <MessageText>
            {customers[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}