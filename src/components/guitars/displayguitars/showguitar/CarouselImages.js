import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel as NewCarousel } from 'react-responsive-carousel'; 
// import ReactImageMagnify from 'react-image-magnify';

export const CarouselImages = ({ images }) => {
  const items = [];

  images.map((el) => {
    items.push(el);
  });

  return (
    <NewCarousel
    centerMode
    infiniteLoop
    swipeable
    thumbWidth={120}
    transitionTime={1000}
    width={"100%"}
    // centerMode
    >
        {items.map((item, i) => {
            return (
            <>
            <img src={item} alt={item} key={i} className="incarousel__images"></img>
            </>
        )})}
    </NewCarousel>
  )
}


