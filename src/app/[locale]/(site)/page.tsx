'use client'

import Timeline from '@/app/components/time-line'
import Image from 'next/image'
import Divisor from '../../../../public/assets/divisor.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TruckComponent } from '@/app/components/truck'
import Truck from '../../../../public/assets/truck.jpg'
import Airplane from '../../../../public/assets/aviao.png'
import Ship from '../../../../public/assets/navio2.png'
import Home from '../../../../public/assets/homeTruck.png'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import aviao2 from '../../../../public/assets/aviao2.jpg'
import box from '../../../../public/assets/box.jpg'
import {Customer} from '../../components/client'
import { Mission } from '@/app/components/mission'
import { missionConfig } from '@/config/mission'
export default function Page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col items-center p-4 sm:p-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center justify-center">
              <div className="space-y-4 text-center">
                <CardDescription className="font-semibold text-center sm:text-left">
                  TERMIC SEPARATORS
                </CardDescription>
                <CardTitle className="font-bold text-blue-900 text-center sm:text-left">
                  Distribution of loads within trucks
                </CardTitle>
                <CardDescription className="text-center sm:text-left">
                  For frozen, cooled and dry loads
                </CardDescription>
                <Link href={'/product'}>
                  <Button className="px-4 py-2 mt-2">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex justify-center">
                <Slider
                  {...settings}
                  autoplaySpeed={10000}
                  className="mt-8 w-full max-w-2xl"
                >
                  <div>
                    <Image
                      src={Home}
                      width={600}
                      height={300}
                      alt="Home Truck"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={aviao2}
                      width={600}
                      height={300}
                      alt="Truck"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={box}
                      width={600}
                      height={300}
                      alt="Airplane"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-36" />
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="p-4 bg-white rounded shadow">
            <Image src={Airplane} alt="Air Transport" width={300} />
            <h3 className="mt-4 text-center text-gray-700">SOLUTIONS FOR</h3>
            <h2 className="text-xl font-bold text-center text-blue-900">
              AIR TRANSPORT
            </h2>
            <span className="text-red-500 italic flex items-center justify-center">
              soon...
            </span>
          </div>
          <Link href="/product" className="p-4 bg-white rounded shadow">
            <Image src={Truck} alt="Land Transport" width={300} />
            <h3 className="mt-4 text-center text-gray-700">SOLUTIONS FOR</h3>
            <h2 className="text-xl font-bold text-center text-blue-900">
              LAND TRANSPORT
            </h2>
          </Link>
          <div className="p-4 bg-white rounded shadow">
            <Image src={Ship} alt="Maritime Transport" width={300} />
            <h3 className="mt-4 text-center text-gray-700">SOLUTIONS FOR</h3>
            <h2 className="text-xl font-bold text-center text-blue-900">
              MARITIME TRANSPORT
            </h2>
            <span className="text-red-500 italic flex items-center justify-center">
              soon...
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gray-200 w-full sm:w-full rounded-lg pt-2"> {/* Updated width to be full for mobile */}
          <Image src={Divisor} alt="image" />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-900 text-center sm:text-left">
              Our motto is to serve the customer
            </h1>
            <div className="mt-2 text-center sm:text-left">
              <p>
                GS was founded in 1982 and continues in the market
                because it pursues a clear goal: in partnership with our
                customers, to develop solutions for the logistical problems and
                bottlenecks. From the problems presented by our customers in
                their daily challenges is that our products are born and
                developed.
              </p>
            </div>
            <div className="mt-3 text-center sm:text-left">
              <p>
                GS manufactures and commercializes thermal insulation,
                thermal separators, pallet coverings and thermal foam.
              </p>
            </div>
            <div className="mt-8 text-center sm:text-left">
              <Link href="/product">
                <Button> See all our products</Button>
              </Link>
            </div>
          </div>
        </div>
        <TruckComponent />
        <Separator className="my-36" />
        <Timeline />
        <Separator className="my-36" />
        <Mission items={missionConfig}/>
        <Customer />
      </main>
    </div>
  )
}
