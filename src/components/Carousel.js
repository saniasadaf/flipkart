import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Slider.css"

function Carousel() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    }
    return (
      <div className="carousel">
        <Slider className="carousel-one" {...settings}>
          <div>
            <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJj1XzeywajX8z2cAmQfMxSTJCO5D_hz9tQ&usqp=CAU" alt="" />
          </div>
          <div>
          <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEM5Nnu4DTmQHYCZ8mcDyyypTSyqs_GMTzDg&usqp=CAU" alt="" />
          </div>
          <div>
            <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDJ_HGyv0fEdweKsBoLAqKmy0KgWRNWkvLQ&usqp=CAU" alt="" />
          </div>
          <div>
          <img className="slideimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVgnR8kNBX9d04FatgaTY7n0MRnj3phld5w&usqp=CAU" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
export default Carousel;
