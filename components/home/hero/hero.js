// Import Components
import ImageSlider from "./image-slider";
import SelfIntro from "./selfIntro";
// Import Styles
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.heroContainer}>
      <ImageSlider />

      <SelfIntro />
    </section>
  );
}

export default Hero;
