import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import { useRef, useState,useEffect } from "react";
import ListItem from './ListItem';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ImageThree from '../assets/Exterior 01.jpg'
import ImageFour from '../assets/Exterior 04.jpg'
import ImageFive from '../assets/Gym.jpg'
import ImageEight from '../assets/Lounge_angle 3.jpg'
import ImageNine from '../assets/Receptiopn.jpg'
import ImageTen from '../assets/Waiting Area.jpg'
import ImageEleven from '../assets/Exterior 03.jpg'
import ImageTwelve from '../assets/Exterior 01b.jpg'
import ImageThirteen from '../assets/Exterior 05.jpg'
import ImageFourteen from '../assets/Exterior 06.jpg'
import ImageFifteen from '../assets/Exterior 06b.jpg'
import ImageSixteen from '../assets/Exterior 07.jpg'

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