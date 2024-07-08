import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentDivisoriaTermica } from "@/app/components/card";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import IsolamentoTermicoVeiculos2 from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_desc.png'
import { TruckComponent } from "@/app/components/truck";
import divisoriaTermicaBipartidafrom from '../../../../../public/assets/Divisoria-Termica-Bipartida_prin.png'
import divisoriaTermicaBipartidaInfo from '../../../../../public/assets/Divisoria-Termica-Bipartida_desc.png'
import divisoriaTermicaBipartida from '../../../../../public/assets/Divisoria-Termica-Bipartida_carac.png'
import divisoriaTermicaBipartidaNumber from '../../../../../public/assets/Divisoria-Termica-Bipartida_comp.png'
import carrouselbipartida from '../../../../../public/assets/carrouselbipartida.png'
import carrouselbipartida2 from '../../../../../public/assets/carrouselbipartida2.png'



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
            img: carrouselbipartida
        } ,
        {
            id: 2,
            img: carrouselbipartida2
        }
                
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'does not absorb moisture'
        },
        {
            id: 2,
            number: 2,
            description: '90mm thickness'
        },
        {
            id: 3,
            number: 3,
            description: 'no iron or plastic profile'
        },
        {
            id: 4,
            number: 4,
            description: `weighs only 12kg`
        },
        {
            id: 5,
            number: 1,
            description: 'material in eps and epe'
        },
        {
            id: 6,
            number: 2,
            description: 'side spacers d28'
        },
        {
            id: 7,
            number: 3,
            description: 'strengthening at the base with plastic plate'
        }
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Lightweight",
            description: "The bipartite thermal divider Soluforte weighs only 12kg, making it easier to handle."
        },
        {
            id: 2,
            title: "Reinforced",
            description: "Our thermal divider for freezer cabinet is the only one on the market with a thickness of 90mm. This means delivering a better and more resistant product."
        },
        {
            id: 3,
            title: "Customization",
            description: "All thermal dividers for trucks are manufactured to order to meet the specifications of your vehicle. Also, it can be manufactured with ventilation kit."
        },
        {
            id: 4,
            title: 'Fuel Economy',
            description: 'With the thermal divider for cabinet, the space that needs to be cooled is reduced, and consequently, the time the equipment needs to be turned on to maintain temperature. This represents a huge fuel savings.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 mb-36">   
            <CardTitle className="mb-4">Bipartite Thermal Divider</CardTitle>
            <Image
            width={400} 
            src={divisoriaTermicaBipartidafrom} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={divisoriaTermicaBipartidaInfo} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >THE THERMAL DIVIDER IS USED TO SEPARATE FROZEN, COOLED AND DRY LOADS IN REFRIGERATED VEHICLES. OPTIMIZE YOUR LOGISTICS BY CARRYING MORE THAN ONE CARGO IN ONE VEHICLE.</CardTitle>
                <CardDescription className="mt-2">Structured and light, the bipartite thermal divider Soluforte is manufactured to order, with foam panels and polyethylene tape, it has a thickness of 90mm and is covered with vinyl lona 530 micras, weighs around 12kg and can be used in any refrigerated vehicle.</CardDescription>
            </div>

        </div>


         <CardComponentDivisoriaTermica items={cardConfig} />
            
            <div className="pt-8 text-center mb-8">
                <CardTitle className="text-3xl md:text-4xl font-bold pb-10"> Benefits</CardTitle>
                <div className="flex items-center justify-center">
                    <div className="flex gap-2 ">
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
                    src={divisoriaTermicaBipartida} 
                    alt='Image'
                    width={300}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={divisoriaTermicaBipartidaNumber} width={400} alt='Image' />
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >Composition</CardTitle>
                <CardDescription className="mt-2 mb-8">Designed for separation of loads in refrigerated trucks. The robust structure is produced by the union of EPS and EPE panels, with lateral foam D28.</CardDescription>
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
        
        {/*
        //TODO: criar imagem
         <Image src={} alt=''></Image> 
         
         */}
    </div>
        <div>
        <TruckComponent/>
        </div>
                    
                </div>
    )
}