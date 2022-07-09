// Import Next Components
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
// Import MUI Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// Import Styles
import classes from "./image-slider.module.css";

function ImageSlider() {
  const imageList = ["1.jpg", "2.jpg", "3.jpg"];
  const [selectedImg, setSelectedImg] = useState(0);
  const [imgSlidePercent, setImgSlidePercent] = useState(0);
  const [counter, setCounter] = useState(0);
  const [slideInterval, setSlideInterval] = useState();

  // Functions
  function sliderAnimateLeftHandler() {
    let translatePercent;
    const diff = imageList.length - 1 - selectedImg;
    const imgUnit = 100 / imageList.length;
    translatePercent = imgSlidePercent + diff * imgUnit;

    if (counter === 0) {
      setSelectedImg(imageList.length - 2);
      imgContainer.style.setProperty(
        "--img-slider-translate-percent",
        `${translatePercent}%`
      );
      setImgSlidePercent(translatePercent);
      setCounter(counter + 1);
    }
    if (counter > imageList.length - 2) {
      setCounter(0);
      setSelectedImg(0);
      setImgSlidePercent(0);
      imgContainer.style.setProperty("--img-slider-translate-percent", `0%`);
    } else {
    }
  }

  function sliderAnimateRightHandler() {
    let translatePercent;
    const imgUnit = 100 / imageList.length;
    translatePercent = imgSlidePercent - imgUnit;

    if (counter > imageList.length - 2) {
      setCounter(0);
      setSelectedImg(0);
      setImgSlidePercent(0);
      imgContainer.style.setProperty("--img-slider-translate-percent", `0%`);
    } else {
      setSelectedImg(selectedImg + 1);
      imgContainer.style.setProperty(
        "--img-slider-translate-percent",
        `${translatePercent}%`
      );
      setImgSlidePercent(translatePercent);
      setCounter(counter + 1);
    }
  }

  function imgNavHandler(e) {
    const { id } = e.target;
    const targetParentElement = e.target.parentElement;
    const imgIndex = parseInt(id.toString().charAt(6));

    e.target.setAttribute("indactive", true);

    for (let i = 0; i < targetParentElement.children.length; i++) {
      if (i !== imgIndex)
        targetParentElement.children[i].setAttribute("indactive", false);
    }

    imgSliderAnimation(parseInt(selectedImg), imgIndex);
    setSelectedImg(imgIndex);
  }

  function imgSliderAnimation(currentImgIndex, nextImgIndex) {
    if (
      currentImgIndex === "" ||
      nextImgIndex === "" ||
      currentImgIndex === nextImgIndex
    ) {
      return;
    }

    let translatePercent;
    const imgUnit = 100 / imageList.length;
    const diff = Math.abs(nextImgIndex - currentImgIndex);
    const imgContainer = document.getElementById("imgContainer");

    if (nextImgIndex === 0) {
      setImgSlidePercent(0);
      imgContainer.style.setProperty("--img-slider-translate-percent", `0%`);
    } else if (nextImgIndex > currentImgIndex) {
      translatePercent = imgSlidePercent - diff * imgUnit;
      setImgSlidePercent(translatePercent);

      imgContainer.style.setProperty(
        "--img-slider-translate-percent",
        `${translatePercent}%`
      );
    } else if (nextImgIndex < currentImgIndex) {
      translatePercent = imgSlidePercent + diff * imgUnit;
      setImgSlidePercent(translatePercent);

      imgContainer.style.setProperty(
        "--img-slider-translate-percent",
        `${translatePercent}%`
      );
    }
  }

  function startSlider() {
    setSlideInterval();
    // setInterval(() => {
    //   sliderAnimateRightHandler();
    // }, 3000)
  }

  function pauseSlider() {
    clearInterval(slideInterval);
  }

  useEffect(() => {
    startSlider();

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className={classes.imageSliderContainer}>
      <div
        className={classes.imageContainer}
        id="imgContainer"
        onMouseEnter={pauseSlider}
        onMouseLeave={startSlider}
      >
        {imageList.map((img, index) => {
          return index === 0 ? (
            <Image
              src={`/images/img-slider/${img}`}
              width={800}
              height={450}
              layout="responsive"
              priority="true"
              className={classes.sliderImg}
              id={`img-${index}`}
              key={index}
            />
          ) : (
            <Image
              src={`/images/img-slider/${img}`}
              width={800}
              height={450}
              layout="responsive"
              className={classes.sliderImg}
              key={index}
            />
          );
        })}
      </div>
      <div
        className={classes.btnContainer}
        onMouseEnter={pauseSlider}
        onMouseLeave={startSlider}
      >
        <ChevronLeftIcon
          className={classes.sliderBtn}
          id={classes.btnLeft}
          onClick={sliderAnimateLeftHandler}
        />
        <ChevronRightIcon
          className={classes.sliderBtn}
          id={classes.btnRight}
          onClick={sliderAnimateRightHandler}
        />
      </div>
      <div className={classes.indicatorsContainer}>
        {imageList.map((img, index) => {
          return index === 0 ? (
            <div
              className={classes.indicatorOuterCircle}
              key={index}
              id={`indic-${index}`}
              indactive="true"
              onClick={imgNavHandler}
            ></div>
          ) : (
            <div
              className={classes.indicatorOuterCircle}
              key={index}
              id={`indic-${index}`}
              indactive="false"
              onClick={imgNavHandler}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
