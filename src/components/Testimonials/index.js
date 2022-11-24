import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer, TestimonialImage } from "../../styles/Testimonials";
// import Hero from "../../assets/yellowHero.jpeg";

const customers = [
  {src:"/assets/agree.jpeg", title:"Agree to Agree !"}, 
  {src:"/assets/pinkHero.jpeg",title:"Manage your calendar"},
  {src:"/assets/yellowHero.jpeg",title:"Connect to Gmail or Outlook"}
]

export default function Testimonials() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
            setTimeout(() => {
              setShow(false);
            }, 5000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % customers.length);

      // slide the message in
        setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 5000);
    }, 6000);

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
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="50vh">
        <TestimonialImage src={customers[messageIndex].src}/>
          <MessageText>
            {customers[messageIndex].title}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}