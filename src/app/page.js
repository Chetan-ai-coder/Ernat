import Image from "next/image"
import Categories from "@/components/categories"
import Header from "../components/header"
import TopDeals from "@/components/Cards/topDeals"
import ShopCategory from "@/components/Cards/shopCategory"
import { Aboreto, Inter } from 'next/font/google'
import { Fredoka } from "next/font/google";


const aboreto = Aboreto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aboreto',
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export default function Home() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Categories />

        {/* Main Section Start */}
        <div className="w-full px-4 md:px-5 lg:px-8 py-4 ">

          {/* Hero Section Start */}
          <div className="w-full h-[270px] lg:h-[400px] py-4 md:py-5 flex justify-center items-center">
            <div className="bg-[url('/images/home/HeroSlider2.png')] bg-cover bg-[position:90%_0%] bg-no-repeat w-full h-full rounded-[10px] relative">

              <h1
                className={`${aboreto.className} text-[28px] sm:text-[30px] md:text-[35px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] absolute top-1/2 -translate-y-1/2 left-5 text-[#f77f00]`}
              >
                SAVE MORE EVERYDAY <br />
                GRAB THE BEST OFFER NOW.
              </h1>

              <div
                className={`${fredoka.className} flex justify-center items-center absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-[#F8860E]/61 gap-2 lg:gap-3`}
              >
                <p className="">Big Savings Start Here - Only at Earnat</p>

                <button className="bg-[#f77f00] px-2 py-1 rounded-[999px] text-[12px] text-white font-[300]">
                  Shop Now
                </button>
              </div>

            </div>
          </div>
          {/* Hero Section End */}

          {/* Main Content Start */}
          <div className="w-full py-4 ">

            {/* Top Deals  */}
            <div className="w-full flex flex-col gap-10">

              <div className="w-full h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
                <h1>Top Deals</h1>
              </div>

              <div className="px-4 md:px-8 lg:px-16 flex justify-between items-center">

                <TopDeals
                  image="/images/products/Samsung Phone.png"
                  category="On Mobile Phones"
                  discount="Flat 20% off"
                />

                <TopDeals
                  image="/images/products/Kurti's.png"
                  category="On Mobile Phones"
                  discount="Flat 20% off"
                />

                <TopDeals
                  image="/images/products/Men's Fashion.png"
                  category="On Mobile Phones"
                  discount="Flat 20% off"
                />

                <TopDeals
                  image="/images/products/Bags 2.png"
                  category="On Mobile Phones"
                  discount="Flat 20% off"
                />

                <TopDeals
                  image="/images/products/Toys.png"
                  category="On Mobile Phones"
                  discount="Flat 20% off"
                />
              </div>
            </div>

            {/* Shop By Category */}
            <div className="w-full py-5 flex flex-col gap-10 ">
              <div className="w-full px-4 md:px-8 lg:px-16 h-12 flex justify-start items-center bg-[#d9d9d9] text-[24px] font-bold ">
                <h1>Shop By Category</h1>
              </div>

              <div className="px-4 md:px-8 lg:px-16 flex justify-between items-centerd ">
                {/* <ShopCategory 
          
            /> */}
              </div>
            </div>

          </div>
          {/* Main Content End */}

        </div>

        {/* Main Content End */}

      </div>

    </>

  )
}