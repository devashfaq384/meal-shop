"use client"
import { useEffect , useState } from 'react'
import One from '../../../assets/burger.jpg'
import Two from '../../../assets/curry.jpg'
import Three from '../../../assets/dumplings.jpg'
import Four from '../../../assets/logo.png'
import Five from '../../../assets/macncheese.jpg'
import Six from '../../../assets/pizza.jpg'
import Seven from '../../../assets/schnitzel.jpg'
import Eight from '../../../assets/tomato-salad.jpg'
import { clearInterval } from 'timers'
import Image from 'next/image'
const imageSlideShow = () => {
    const [ val , setVal ] = useState(0)

    const images = [One, Two, Three, Four, Five, Six, Seven, Eight]

    useEffect(() => {
        const intervalId = setInterval(() => {
          setVal((prevInd) => (prevInd < images.length - 1 ? prevInd + 1 : 0));
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);
    

  return (
    <div className="mx-auto col-span-12 md:col-span-6" >
        {
            images.map((image, index) => (
                <Image key={index} src={image} alt="Dishes" />
            ))
        }
    </div>
  )
}

export default imageSlideShow