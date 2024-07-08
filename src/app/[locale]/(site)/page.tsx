'use client'
import { Header } from "./_components/header"; 
import Timeline from "@/app/components/time-line";
import Image from "next/image";
import Divisor from '../../../../public/assets/divisor.png'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TruckComponent } from "@/app/components/truck";
import Truck from '../../../../public/assets/truck.png'
import Airplane from '../../../../public/assets/aviao.png'
import Ship from '../../../../public/assets/navio.png'

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
        {/* <Header/> */}

        <main className="flex flex-col items-center p-8 space-y-8">
          <div className="flex items-center space-x-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-500">TERMIC SEPARATORS</h2>
              <h1 className="text-3xl font-bold text-blue-900">Distribution of loads within trucks</h1>
              <p className="text-gray-700">For frozen, cooled and dry loads</p>
              <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Learn More</button>
              <div className="flex space-x-2">
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
                <span className="w-2 h-2 bg-gray-300 rounded-full" />
              </div>
              
            </div>
                <Image 
                src={Truck} 
                width={500}
                alt="Truck" 
                className="rounded-lg"
                />
          </div>
          <div className="flex space-x-8">
            <div className="p-4 bg-white rounded shadow">
            <Image 
              src={Airplane} 
              alt="Air Transport" 
              width={300}
               />
              <h3 className="mt-4 text-center text-gray-700">SOLUTIONS FOR</h3>
              <h2 className="text-xl font-bold text-center text-blue-900">AIR TRANSPORT</h2>
            </div>
            <Link href='/product' className="p-4 bg-white rounded shadow">
              <Image 
              src={Truck} 
              alt="Land Transport" 
              width={300}
               />
              <h3 className="mt-4 text-center text-gray-700">SOLUTIONS FOR</h3>
              <h2 className="text-xl font-bold text-center text-blue-900">LAND TRANSPORT</h2>

            </Link>
            <div className="p-4 bg-white rounded shadow">
            <Image 
              src={Ship} 
              alt="Maritime Transport" 
              width={300}
               />
              <h3 className="mt-4 text-center text-gray-700">SOLUTIONS FOR</h3>
              <h2 className="text-xl font-bold text-center text-blue-900">MARITIME TRANSPORT</h2>
            </div>
          </div>

          <div className="flex justify-center space-x-6 bg-slate-100 w-[1120px] rounded-tl-3xl ">
            <Image src={Divisor} alt='image'/>
            
            <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-900">Our motto is to serve the customer</h1>
            <div className="mt-2">

            <p>Soluforte was founded in 1982 and continues in the market because it pursues a clear goal: in partnership with our customers, to develop solutions for the logistical problems and bottlenecks. From the problems presented by our customers in their daily challenges is that our products are born and developed.</p>
            </div>

            <div className="mt-3">
              <p>Soluforte manufactures and commercializes thermal insulation, thermal separators, pallet coverings and thermal foam.</p>
            </div>
            <div className="mt-8">
            <Link href='/product'>
            <Button > See all our products</Button>
            </Link>


            </div>
            </div>
          </div>
          <TruckComponent />
          <Timeline />
        </main>
      </div>
    )
}
