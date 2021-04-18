import Slider from "react-slick";

import styles from "./styles/SliderComponent.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    slidesToShow: 1,
  };

  return (
    // <div className={styles.container}>
    // <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <Slider {...settings}>
      <div>
        <img className={styles.slide_item} src="スクリーンショットA.png" />
      </div>
      <div>
        <img className={styles.slide_item} src="スクリーンショットB.png" />
      </div>
      <div>
        <img className={styles.slide_item} src="スクリーンショットA.png" />
      </div>
      <div>
        <img className={styles.slide_item} src="スクリーンショットB.png" />
      </div>
      <div>
        <img className={styles.slide_item} src="スクリーンショットA.png" />
      </div>
    </Slider>
    // </div>
  );
};

export default SliderComponent;
