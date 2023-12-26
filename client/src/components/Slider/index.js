import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/Slider";

const customers = [
  {title:"Plan the Family Reunion"}, 
  {title:"Quick Brainstorm meet with the Group"},
  {title:"Get the girls to agree on a lunch date !"},
  {title:"Plan the meeting"},
  {title:"No more postponing"},
  {title:"Finally We all Agree !"}, 
]

export default function Sliders() {
  const containerRef = useRef();
  const [show, setShow] = useState(true);
    const [messageIndex, setMessageIndex] = useState(0);
    useEffect(() => {
            setTimeout(() => {
              setShow(false);
            }, 4000);
    const intervalId = setInterval(() => {
      // get next message
      setMessageIndex((i) => (i + 1) % customers.length);

      // slide the message in
        setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 4000);
    }, 5000);

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
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="10px">
        {/* <SliderImage src={customers[messageIndex].src}/> */}
          <MessageText>
            {customers[messageIndex].title}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}


