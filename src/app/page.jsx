import Link from "next/link";
import Header from './components/header'
import Image from "next/image";
import Logo from '../../assets/logo.png'
import FrontImg from '../../assets/pizza.jpg'
import ImageSlideShow from './components/imageSlideShow'
export default function Home() {
  return (
    <div>

      <div className="grid grid-cols-12 gap-4" >
        <div className="mx-auto col-span-12 md:col-span-6" >
          <Image src={Logo} alt="Dishes" className="" />
        </div>
        <div className="col-span-12 md:col-span-6 my-auto text-white">
          <div className="w-full flex flex-col md:justify-start justify-center" >
            <div className="text-3xl leading-normal md:text-[50px] font-bold " >The Best Food In Town</div>
            <div className="text-3xl leading-normal mb-3 md:text-[50px] font-bold " >For Everyone's Diet</div>
            <div className="font-light text-sm md:text-md" >So let's browse our new and most famous meals</div>
            <Link href="/meals" >
              <button className="max-w-fit py-2 px-5 bg-gradient-to-r  rounded-lg my-5 transition-all duration-500 hover:scale-110 from-red-600  to-orange-600" >
                Explore the Meals
              </button>
            </Link>
          </div>
        </div>

      </div>
     
    </div>
  );
}
