import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'


const imagearr = [
  {
    img: "https://i.pinimg.com/564x/eb/88/e7/eb88e7d4f425f96e113f2b8d742e1db3.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/f1/3f/aa/f13faa9cd552edcf577db0abc737fab6.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/f1/33/18/f13318aee6d1f54ca90aa109831d708c.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/eb/88/e7/eb88e7d4f425f96e113f2b8d742e1db3.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/61/95/48/6195483cac9ce8b030e5f2d19975123b.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/f1/33/18/f13318aee6d1f54ca90aa109831d708c.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/eb/88/e7/eb88e7d4f425f96e113f2b8d742e1db3.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/61/95/48/6195483cac9ce8b030e5f2d19975123b.jpg",
  },
  {
    img: "https://i.pinimg.com/564x/61/95/48/6195483cac9ce8b030e5f2d19975123b.jpg",
  },
];


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="carousel-container">
       <Slider {...settings}>
     {imagearr.map((each)=>{
      return(
        <>
        <img src={each.img} alt="" className="carousel-img"/>
        </>
      )
     })}
    </Slider>

    </div>
   
  );
}