import Slider from "react-slick";
import "./carousel.css"

function Carousel({ children }){

    //configurações biblioteca de carrosel
    const settings = {
        dots: false, //pontos que indicam quantidade no carrosel
        infinite: false, //retorna ao começo quando acabar os cards do carrosel
        speed: 300, 
        centerMode: false, 
        variableWidth: true, //responsivo
        adaptativeHeight: true, //responsivo
        // slidesToShow 5,
        slidesToScroll: 1, //passar de um em um
    }

    return (
        <div>
            <Slider {...settings}> 
                { children } 
            </Slider>
        </div>
    )
}

export default Carousel;