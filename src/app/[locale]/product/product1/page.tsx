import CardComponent, { CardComponentCapaTermica } from "@/app/components/card";
import Image from "next/image";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import coberturaTermica from '../../../../../public/assets/Cobertura-Termica-para-Palete_desc.png'
import CoberturaTermica from '../../../../../public/assets/CapaTermica.png'
import CoberturaTermicaParaPalete from '../../../../../public/assets/Cobertura-Termica-para-Palete_comp.png'
import { TruckComponent } from "@/app/components/truck";
import coberturaTermicaMain from '../../../../../public/assets/p44ked.png'

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
            img: coberturaTermica
        } ,
        {
            id: 2,
            img: CoberturaTermica
        }
        
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'Closure with Velcro'
        },
        {
            id: 2,
            number: 2,
            description: 'Impermeable coating'
        },
        {
            id: 3,
            number: 3,
            description: 'Separate thermal base'
        },
        {
            id: 4,
            number: 4,
            description: 'View for identification'
        },
        {
            id: 5,
            number: 1,
            description: 'Compression stitches'
        },
        {
            id: 6,
            number: 2,
            description: 'Impermeable coating'
        },
        {
            id: 7,
            number: 2,
            description: 'Lona 550 micras coating'
        }
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Efficiency",
            description: "Provides passive thermal protection of sensitive loads during all stages of the logistical cycle."
        },
        {
            id: 2,
            title: "Customization",
            description: "We manufacture sizes that meet your logistics operation, maximizing your results within your budget and need."
        },
        {
            id: 3,
            title: "Cost-Benefit",
            description: "The thermal sheet for pallets is a solution with excellent cost-benefit for load protection. Enjoy the security of an active system with low investment."
        },
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 mb-36">   
            <CardTitle className="mb-4">Thermal Insulation Cover for Pallets</CardTitle>
            <Image 
            src={coberturaTermicaMain} 
            width={500}
            alt="Hero" />
        </div>
        
        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image 
            src={coberturaTermica}
            width={300} 
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle className="">THERMAL LINING FOR PALLETIZED GOODS REQUIRING TEMPERATURE CONTROL DURING THE LOGISTICS PROCESS.</CardTitle>
                <CardDescription className="mt-2">
                    Also known as thermal blanket for pallet, it was developed to protect palletized goods sensitive to temperature variation. They are produced according to the customer&apos;s need, in the measures that best fit their logistics operation. The thermal blanket for pallet, or thermal covering for pallet, or simply thermal blanket, is a viable solution for freight forwarders of perishable products, reducing the risk of temperature breakage and consequent loss and contamination of their products.
                </CardDescription>
            </div>

        </div>


         <CardComponentCapaTermica items={cardConfig} />
            <div className="pt-8 text-center mb-8">
                <CardTitle className="text-3xl md:text-4xl font-bold pb-10">Benefits</CardTitle>
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

                    <h1 className="text-3xl md:text-4xl font-bold">Characteristics</h1>
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
                    src={CoberturaTermica} 
                    alt='Image'
                    width={300}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={CoberturaTermicaParaPalete} width={400} alt='Image' />
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <CardTitle>Composition</CardTitle>
                <CardDescription className="mt-2 mb-4">To increase durability, ease cleaning, and reduce weight, Soluforte works with the best materials in the thermal cover composition.</CardDescription>
                <CardDescription className=" mb-8">For the coating, we use nylon, a easy to clean, waterproof and lightweight material.</CardDescription>
                <CardDescription className=" mb-8">The internal thermal layers follow the same concept of lightness and durability, being joined by compression seams, ensuring long life to the product.</CardDescription>
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
        <TruckComponent/>
        </div>
                    
                </div>
    )
}