import React from 'react'
import './HeroSlide.scss'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  
  // install Swiper modules
  SwiperCore.use([Navigation]);

// configure Swiper to use modules





const HeroSlide = () => {

    const data =[
        {
            imga:'https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII',
            title:"chauhaoivu đã làm cái này nè mọi người ơi ",
            review:"nội dung nè",
            childrenimg:"https://i.picsum.photos/id/141/2048/1365.jpg?hmac=xcZmN-VINP95YwmI3AXCTIxfzd61fhaczQmodKQjLbY"
        },
        {
            imga:'https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU',
            title:"chauhaoivu đã làm cái này nè mọi người ơi ",
            review:"nội dung nè",
            childrenimg:"https://i.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I"
        },
        {
            imga:'https://i.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E',
            title:"chauhaoivu đã làm cái này nè mọi người ơi ",
            review:"nội dung nè",
            childrenimg:"https://i.picsum.photos/id/143/3600/2385.jpg?hmac=gSMmnYrmuP5BJ47kmErfYdYu1L1GLePM1SNm-D2lqiA"
        },
        {
            imga:'https://i.picsum.photos/id/129/4910/3252.jpg?hmac=g1KzJMIp75lG_scR48R1baC6TjhVmkEyygSyngKYRsg',
            title:"chauhaoivu đã làm cái này nè mọi người ơi ",
            review:"nội dung nè",
            childrenimg:"https://i.picsum.photos/id/137/4752/3168.jpg?hmac=dGsgAtPkFewFByZXZOmSg0U7Mohr43GyVu3n1AHVIyg"
        }
    ]
  return (
    <div className='hero-slide'>

<Swiper 
// navigation={true}
pagination={{ clickable: true }}
scrollbar={{ draggable: true }}
onSwiper={(swiper) => console.log(swiper)}
onSlideChange={() => console.log('slide change')}
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={1}


>
{
    data.map((item,i) =>(
        <SwiperSlide key={i}>
            {
                ({isActive}) =>(
                    
                    <HeroSlideItem item={item} className = {`${isActive ? "active" : ''}` } /> 
                
                )
            }

        </SwiperSlide>
    ))
}
      
  </Swiper>

       

    </div>
  )
}

const HeroSlideItem = props =>{
    const item = props.item


    return(
        <div className={`hero-slide__item ${props.className}`} 
        
        style={{backgroundImage:`url(${item.imga})`, height:"100vh"}}>
        
        <div className='hero-slide__item__content container' >
            <div className='hero-slide__item__content__infor'>
                <p className='title'>{item.title}</p>
                <p className='overview'>{item.review}</p>
                <div className='btn'>
                    <button>1</button>
                    <button>2</button>


                </div>



            </div>
            <div className='hero-slide__item__content__poster'>
                <img src = {item.childrenimg} alt='' />

            </div>

        </div>

        </div>
    )
}

export default HeroSlide