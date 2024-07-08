import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentGancheira } from "@/app/components/card";
import Image from "next/image";

import DivisionTermicTwo from '../../../../../public/assets/Divisoria-Termica-Movel_comp1.png'
import Corousel1 from '../../../../../public/assets/carroussel1.png'
import Corousel2 from '../../../../../public/assets/carroussel2.png'
import Corousel3 from '../../../../../public/assets/carroussel3.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import { TruckComponent } from "@/app/components/truck";
import divisoriaTermicaGancheira from '../../../../../public/assets/Divisoria-Termica-Gancheira_prin1.png'
import divisoriaTermicaGancheiraInfo from '../../../../../public/assets/Divisoria-Termica-Gancheira_desc.jpg'
import divisoriaTermicaGancheiraCaracteristicas from '../../../../../public/assets/Divisoria-Termica-Gancheira_carac.png'

type PageProps = {
    params: {
        Id: string
    }
}

type DetailsInfoProps = {
    id: number,
    number: number,
    description: string
}


type ImageCorouselProps = {
    id: number,
    img: any
}

type ItemsInfoProps = {
    id: number,
    title: string,
    description: string
}

export default function Page ({params}: PageProps) {
    const imagesCorousel: ImageCorouselProps[] = [
        {
            id: 1,
            img: divisoriaTermicaGancheiraInfo
        } ,  
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'FLOOR LIFTING'
        },
        {
            id: 2,
            number: 2,
            description: 'ALUMINUM STRUCTURE'
        },
        {
            id: 3,
            number: 3,
            description: 'OPTION OF REINFORCEMENT IN PP'
        },
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Logistics Optimization",
            description: "Every logistics operation that uses thermally insulated cabinet can optimize the use of their trucks and diversify their loads, improving the utilization of vehicles in each trip."
        },
        {
            id: 2,
            title: "Economy",
            description: "With the use of thermally insulated cabinet, the space that needs to be refrigerated is reduced, and with this, the use of the refrigeration device is reduced, resulting in operational cost reduction."
        },
        {
            id: 3,
            title: "Customization",
            description: "Each product is manufactured to fit the specific dimensions of the vehicle the cabinet will be used on."
        },
        {
            id: 4,
            title: 'Lightweight',
            description: 'Besides durability, the structure fabricated in aluminum also becomes lightweight and easy to handle.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center mt-10 mb-36">   
            <CardTitle className="mb-4"> Insulated Partition for Gantries </CardTitle>
            <Image
            width={400} 
            src={divisoriaTermicaGancheira} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={divisoriaTermicaGancheiraInfo} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >THE THERMAL DIVIDER IS USED TO SEPARATE FROZEN, REFRIGERATED AND DRY GOODS IN REFRIGERATED TRUCKS. OPTIMIZE YOUR LOGISTICS BY CARRYING MORE THAN ONE LOAD IN A TRUCK.</CardTitle>
                <CardDescription className="mt-2">Made for use in conveyor belt gantry, with a movable part to be stored alongside the refrigeration equipment. Structured in aluminum, covered with 530-gram cloth, with reinforcement at the base with plastic. Custom-made.</CardDescription>
            </div>

        </div>


         <CardComponentGancheira items={cardConfig} />
            
            <div className="pt-8 text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold pb-10"> Benefits</h1>
                <div className="flex items-center justify-center">
                    <div className="flex gap-2">
                       {items.map((descriptions) => (
                        <div key={descriptions.id} className="bg-gray-100 rounded-lg p-2">
                           
                        <h1 className="text-3xl md:text-xl font-bold">{descriptions.title}</h1> 
                        
                        <p>{descriptions.description}</p>
                        
                        </div>
                        
                       ))}
                    </div>
                    
                </div>
            </div>

                    <h1 className="text-3xl md:text-4xl font-bold"> Characteristics</h1>
                    <div className="flex items-center mt-8 justify-between gap-8 bg-slate-100">
                    <div className="text-left ml-36 ">
                        {numbers.filter(number => [1, 2, 3, 4].includes(number.id)).map(number => (
                        <div key={number.id} className="flex items-center gap-2">
                            <div className="flex items-center justify-center mt-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-br-lg rounded-tl-lg  ">
                                <h1 >{number.number}</h1>
                            </div>
                            <p className="">{number.description}</p>
                        </div>
                        ))}
                    </div>
                    <div>
                    <Image 
                    src={divisoriaTermicaGancheiraCaracteristicas} 
                    alt='Image'
                    width={300}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >Composition</CardTitle>
                <CardDescription className="mt-2 mb-8">With the intention of increasing durability, making cleaning easier and reducing weight, Soluforte works with the best materials in the composition of its products. The structure is in aluminum, the net has a gramage of 530, the lateral protection bars are in aluminum, the ventilation kit was developed by our engineering team to give better finish to the product.</CardDescription>
                        
                </div>
                <div>
                    
                </div>

                </div>

                <Carousel className="w-full max-w-3xl mt-36">
      <CarouselContent>
        {imagesCorousel.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-10">
                  <Image src={img.img} alt='Image'  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext  />
    </Carousel>
        <div>
        <TruckComponent/>
        </div>
                    
                </div>
    )
}