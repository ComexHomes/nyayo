import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useRef, useState,useEffect } from "react";
import ListItem from './ListItem';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ImageThree from '../assets/Comex-Homes---Nyayo-View-Suites-1.jpg'
import ImageFour from '../assets/Bedroom.jpeg'
import ImageFive from '../assets/ComexHomes.jpg'
import ImageEight from '../assets/SittingRoom-OneBedroom.jpg'
import ImageNine from '../assets/SlidersRoofTop.jpg'
import ImageTen from '../assets/SlidersRoofTop-1.jpg'
import ImageEleven from '../assets/Studio.jpeg'
import ImageTwelve from '../assets/Studio 1.jpg'
import ImageThirteen from '../assets/Studio 1-1.jpg'
import ImageFourteen from '../assets/StudioROOM.jpg'
import ImageFifteen from '../assets/WhatsApp Image 2021-12-22 at 19.49.04.jpeg'
import ImageSixteen from '../assets/WhatsApp Image 2022-02-10 at 10.53.58 PM.jpeg'

function Amenitiesslider() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  const Images = [
    {
      id: 0,
      src: ImageThree,
      alt: 'image slider Three'
    },
    {
      id: 1,
      src: ImageFour,
      alt: 'image slider Four'
    },
    {
      id: 2,
      src: ImageFive,
      alt: 'image slider Five'
    },
    {
      id: 3,
      src: ImageEight,
      alt: 'image slider Eight'
    },
    {
      id: 4,
      src: ImageNine,
      alt: 'image slider Nine'
    },
    {
      id: 5,
      src: ImageTen,
      alt: 'image slider Ten'
    },
    {
      id: 6,
      src: ImageEleven,
      alt: 'image slider Eleven'
    },
    {
      id: 7,
      src: ImageTwelve,
      alt: 'image slider Twelve'
    },
    {
      id: 8,
      src: ImageThirteen,
      alt: 'image slider ImageThirteen'
    },
    {
      id: 9,
      src: ImageFourteen,
      alt: 'image slider ImageFourteen'
    },
    {
      id: 10,
      src: ImageFifteen,
      alt: 'image slider ImageFifteen'
    },
    {
      id: 11,
      src: ImageSixteen,
      alt: 'image slider ImageSixteen'
    }
  ]

    return (
        <div data-aos='fade-up' className='list'>
            <div className="wrapper">
                <AiOutlineArrowLeft className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>

                  {
                    Images.map((image) => (
                      <ListItem key={image.id} index={image.id} src={image.src} alt={image.alt} />
                    ))
                  }
                    {/* <ListItem index={0} /> */}
                </div>

                <AiOutlineArrowRight className="sliderArrow right" onClick={() => handleClick("right")}
        />
            </div>

        </div>
    )
}

export default Amenitiesslider