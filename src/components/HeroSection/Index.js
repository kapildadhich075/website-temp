import React, {useState} from "react";
import Video from "../Video/video.mp4";
import {
  HeroContainer,
  VideoBg,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
  const [hover , setHover] = useState(false);

  const onHover = () => setHover(!hover);  
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>White Label Bookeeping, Services For Accountants</HeroH1>
          <HeroP>
            Outsource your bookkeeping to Remote Books Online, your new virtual
            employee
          </HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get a Quote {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
