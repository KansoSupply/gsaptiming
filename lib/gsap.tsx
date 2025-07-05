import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);

// const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2;
// const RECIPROCAL_GR = 1 / GOLDEN_RATIO;
// const DURATION = RECIPROCAL_GR;
const EASE = CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

// Configuring GSAP with custom settings that aren't Tween-specific
gsap.config({
  autoSleep: 60,
  nullTargetWarn: false,
});

// Setting default animation properties that should be inherited by ALL tweens
gsap.defaults({
  duration: 1,
  ease: "power1.out",
});

// Once the desired configurations are set, we simply export what we need to work with in the future.
export {
  CustomEase,
  // DURATION,
  EASE,
  // GOLDEN_RATIO,
  gsap,
  SplitText,
  ScrollTrigger,
  useGSAP,
};
