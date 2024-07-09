import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica } from "@/app/components/card";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import IsolamentoTermicoVeiculos2 from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_desc.png'
import { TruckComponent } from "@/app/components/truck";
import HeroImg from '../../../../../public/assets/HeroImg.png'
import divisãoTermica from '../../../../../public/assets/DivisãoTermica.png'
import divisoriaTermicaMovel from '../../../../../public/assets/Divisoria-Termica-Movel_carac1.png'
import divisoriaTermicaMovelComp from '../../../../../public/assets/Divisoria-Termica-Movel_comp1.png'
import carroussel1 from '../../../../../public/assets/carroussel1.png'
import carroussel2 from '../../../../../public/assets/carroussel2.png'
import carroussel3 from '../../../../../public/assets/carroussel3.png'

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
            img: carroussel1
        } ,
        {
            id: 2,
            img: carroussel2
        } ,
        {
            id: 3,
            img: carroussel3
        } ,
        
        
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'lightweight'
        },
        {
            id: 2,
            number: 2,
            description: 'movable'
        },
        {
            id: 3,
            number: 1,
            description: 'aluminum structure'
        },
        {
            id: 4,
            number: 2,
            description: 'eps filling'
        },
        {
            id: 5,
            number: 3,
            description: 'base reinforcement with plastic sheet'
        },
        {
            id: 6,
            number: 4,
            description: 'nylon 550 micron lining'
        },
        
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Lightweight",
            description: "The mobile thermal divider is lightweight and easy to use and move, due to its structure and light-weight filling."
        },
        {
            id: 2,
            title: "Coating",
            description: "Our thermal divider is coated with flame-retardant non-woven fabric, with UV-blocking agents, antioxidants and fungicides, making it much more resistant."
        },
        {
            id: 3,
            title: "Customization",
            description: "In addition to the size, we can put central or lateral door, ventilation kit. The track can be on top or side, depending on what best suits you."
        },
        {
            id: 4,
            title: 'Aluminum structure',
            description: 'The big difference of our mobile thermal divider is the aluminum structure and the inox cart.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                   
        <div className="flex flex-col items-center justify-center pt-5 mb-36">   
            <CardTitle className="mb-4">Mobile Thermal Divider</CardTitle>
            <Image
            width={400} 
            src={HeroImg} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={divisãoTermica} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >The THERMAL DIVIDER is used to separate frozen, refrigerated and sealed loads in vehicles cooled. OPTIMIZE YOUR LOGISTICS BY TRANSPORTING MORE THAN ONE LOAD IN ONE VEHICLE.</CardTitle>
                <CardDescription className="mt-2">Structured in aluminum, it is mainly used in refrigerated bays, and is installed on a standard 3-meter track, giving flexibility in loading and unloading goods. This model can be fabricated with a door, ventilation kit, and with an upper or lateral track.</CardDescription>
            </div>

        </div>


         <CardComponent items={cardConfig} />
            
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
                    src={divisoriaTermicaMovel} 
                    alt='Image'
                    width={400}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={divisoriaTermicaMovelComp} width={400} alt='Image' />
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle >Composition</CardTitle>
                <CardDescription className="mt-2 mb-8">Model built with aluminum structure, light material that doesn&apos;t rust, and its structure is fixed to the vehicle through rails.</CardDescription>
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
    {/* TODO: FICHA TÉCNICA */}
        <div>
        <TruckComponent/>
        </div>
        </div>
    )
}