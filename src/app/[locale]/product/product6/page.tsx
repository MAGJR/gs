import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentDivisoriaCortina } from "@/app/components/card";
import Image from "next/image";

import DivisionTermicTwo from '../../../../../public/assets/Divisoria-Termica-Movel_comp1.png'
import Corousel1 from '../../../../../public/assets/carroussel1.png'
import Corousel2 from '../../../../../public/assets/carroussel2.png'
import Corousel3 from '../../../../../public/assets/carroussel3.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import coberturaTermica from '../../../../../public/assets/Cobertura-Termica-para-Palete_desc.png'
import CoberturaTermica from '../../../../../public/assets/CapaTermica.png'
import CoberturaTermicaParaPalete from '../../../../../public/assets/Cobertura-Termica-para-Palete_comp.png'
import isolamentoTermicoVeiculos from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_prin2.png'
import IsolamentoTermicoVeiculos2 from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_desc.png'
import IsolamentoTermicoVeiculosCaracteristicas from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_numbers.png'
import IsolamentoTermicoVeiculosCompisition from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_comp3.png'
import { TruckComponent } from "@/app/components/truck";
import divisoriaTermicaCortina from '../../../../../public/assets/Divisoria-Termica-Cortina_prin.png'
import divisoriaTermicaCortinaInfo from '../../../../../public/assets/Divisoria-Termica-Cortina_desc.png'
import divisoriaTermicaCortinaDetails from '../../../../../public/assets/Divisoria-Termica-Cortina_carac1.png'
import divisoriaTermicaCortinaComp from '../../../../../public/assets/Divisoria-Termica-Cortina_comp1.png'
import carrouselCortina from '../../../../../public/assets/carrouselCortina.png'
import carrouselCortina2 from '../../../../../public/assets/carrouselCortina2.png'

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
            img: carrouselCortina
        } ,
        {
            id: 2,
            img: carrouselCortina2
        } ,
        
        
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'fixation by pressure system'
        },
        {
            id: 2,
            number: 2,
            description: '10mm thickness'
        },
        {
            id: 3,
            number: 3,
            description: 'weighs only 7kg'
        },
        {
            id: 4,
            number: 4,
            description: 'does not absorb moisture'
        },
        {
            id: 5,
            number: 1,
            description: 'fixation by pallete rail'
        },
        {
            id: 6,
            number: 2,
            description: 'coating with impermeable nylon'
        },
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Light",
            description: "The lightest of the thermal dividers. It weighs only 7kg. It is synonymous with easy installation and handling."
        },
        {
            id: 2,
            title: "Convenience",
            description: "It is fixed by a pallet trailer for the vehicle, which is installed on the sides of the vehicle. Easy to install. Easy to remove."
        },
        {
            id: 3,
            title: "Customization",
            description: "Besides the size, we can also have it made with a central opening, zip or velcro, as well as install the ventilation kit, 12V or 24V."
        },
        {
            id: 4,
            title: 'Optimization',
            description: 'Because it does not have a structure, the thermal divider can be installed in larger or smaller vehicles, being adjusted only in the pallet trailer.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                   
        <div className="flex flex-col items-center justify-center pt-5 mb-36">   
            <CardTitle className="mb-4">Thermal Divider Curtain</CardTitle>
            <Image
            width={400} 
            src={divisoriaTermicaCortina} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={divisoriaTermicaCortinaInfo} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >A THERMAL DIVIDER IS USED TO SEPARATE FROZEN, COOLED AND DRY GOODS IN REFRIGERATED VEHICLES. OPTIMIZE YOUR LOGISTICS BY TRANSPORTING MORE THAN ONE LOAD IN A VEHICLE. </CardTitle>
                <CardDescription className="mt-2">Typically used by distributors, who transport for a short time, usually completing the delivery within the same day. They are lightweight, without structure, attached to the roof through a bracket, and have a low cost. They can also be used for cargo protection during the wait for unloading.</CardDescription>
            </div>

        </div>


         <CardComponentDivisoriaCortina items={cardConfig} />
            
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
                    src={divisoriaTermicaCortinaDetails} 
                    alt='Image'
                    width={300}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={divisoriaTermicaCortinaComp} width={300} alt='Image' />
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >Composition</CardTitle>
                <CardDescription className="mt-2 mb-4">The purpose of increasing durability, making cleaning easier, and reducing weight is to work with the best materials in the thermal curtain composition. In the reinforcement, we use nylon, a easy-to-clean, waterproof, and light material, which ensures a long life to the product.</CardDescription>
                <CardDescription className="mt-2 mb-4">The internal thermal layers follow the same concept of lightness and durability, being joined by compression seams, guaranteeing a long life to the product.</CardDescription>
                        {numbers.filter(number => [5, 6].includes(number.id)).map(number => (
                            <div key={number.id} className="flex items-center gap-2">
                            <div className="flex items-center justify-center mt-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-br-lg rounded-tl-lg  ">
                                <h1 >{number.number}</h1>
                            </div>
                            <p className="">{number.description}</p>
                        </div>
                        ))}
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
            {/* TODO: FAZER FICHA TÉCNICA */}
        <TruckComponent/>
        </div>
                    
                </div>
    )
}