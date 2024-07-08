import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentPrateleira } from "@/app/components/card";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import isolamentoTermicoVeiculos from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_prin2.png'
import IsolamentoTermicoVeiculos2 from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_desc.png'
import IsolamentoTermicoVeiculosCaracteristicas from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_numbers.png'
import IsolamentoTermicoVeiculosCompisition from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_comp3.png'
import { TruckComponent } from "@/app/components/truck";
import divisoriaTermicaPrateleira from '../../../../../public/assets/Divisoria-Termica-Prateleira_prin.png'
import DivisoriaTermicaPrateleiraInfo from '../../../../../public/assets/Divisoria-Termica-Prateleira_desc.jpg'

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
            img: divisoriaTermicaPrateleira
        } ,
        {
            id: 2,
            img: DivisoriaTermicaPrateleiraInfo
        } ,
        
        
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'ideal for small trips'
        },
        {
            id: 2,
            number: 2,
            description: 'guarantees up to 24 hours'
        },
        {
            id: 3,
            number: 3,
            description: 'prevents temperature exchange between interior and exterior'
        },
        {
            id: 4,
            number: 4,
            description: 'replaces insulation panels and refrigeration systems'
        },
        {
            id: 5,
            number: 1,
            description: 'layers welded together by compression seams'
        },
        {
            id: 6,
            number: 2,
            description: 'impermeable coating on nylon'
        },
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Perfect Fit",
            description: "They are manufactured to fit perfectly and to make it easy to move within the fridge compartment."
        },
        {
            id: 2,
            title: "Lightweight",
            description: "Made of aluminum, it is lightweight and easy to operate."
        },
        {
            id: 3,
            title: "Coating",
            description: "The coating is made with 530 micron nylon fabric, with fire-resistant treatment, fungicide, antibacterial agent."
        },
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 mb-36">   
            <CardTitle className=" mb-4">Thermal Divisional Shelf</CardTitle>
            <Image
            width={300} 
            src={divisoriaTermicaPrateleira} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={DivisoriaTermicaPrateleiraInfo} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle className="text-2xl md:text-2xl font-bold">THE DIVISIONAL THERMAL IS USED TO SEPARATE FROZEN, REFRIGERATED AND DRY LOADS IN REFRIGERATED VEHICLES. OPTIMIZE YOUR LOGISTICS BY TRANSPORTING MORE THAN ONE LOAD IN A SINGLE VEHICLE.</CardTitle>
                <CardDescription className="mt-2">Especially used by food distributors, with many stops for different deliveries during the trip. They are manufactured in detail for perfect fitting in the shelves of the fridge. Generally, this division comes together with the fridge, in the factory. However, with our engineering team, we can manufacture the division for any client in Brazil. For this model, however, the correct measurements are essential.</CardDescription>
            </div>

        </div>


         <CardComponentPrateleira items={cardConfig} />
            
            <div className="pt-8 text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold pb-10"> Benefits</h1>
                <div className="flex items-center justify-center">
                    <div className="flex gap-2 w-[900px]">
                       {items.map((descriptions) => (
                        <div key={descriptions.id} className="bg-gray-100 rounded-lg p-2">
                           
                        <h1 className="text-3xl md:text-xl font-bold">{descriptions.title}</h1> 
                        
                        <p>{descriptions.description}</p>
                        
                        </div>
                        
                       ))}
                    </div>
                    
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