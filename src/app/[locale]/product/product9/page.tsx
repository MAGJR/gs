import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentPrateleira } from "@/app/components/card";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
            description: 'ideal para pequenas viagens'
        },
        {
            id: 2,
            number: 2,
            description: 'garanta até 24h'
        },
        {
            id: 3,
            number: 3,
            description: 'impede a troca de temperatura interior e exterior'
        },
        {
            id: 4,
            number: 4,
            description: `substitui placas de isolamento e sistema de refrigeração`
        },
        {
            id: 5,
            number: 1,
            description: 'camadas unidas por costuras de compressão'
        },
        {
            id: 6,
            number: 2,
            description: 'revestimento em nylon impermeabilizado'
        },
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Encaixe Perfeito",
            description: "São fabricadas sob medida para um encaixe perfeito e para poder facilitar a movimentação dentro do baú frigorífico."
        },
        {
            id: 2,
            title: "Leve",
            description: "Fabricada em alumínio, é leve e fácil de operar."
        },
        {
            id: 3,
            title: "Revestimento",
            description: "O revestimento é feito com lona de 530 micras, com tratamento retardante de chamas, antifúngico e bactericida."
        },
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Divisória Térmica Prateleira</h1>
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
                <h1 className="text-2xl md:text-2xl font-bold">A DIVISÓRIA TÉRMICA É UTILIZADA PARA SEPARAR CARGAS CONGELADAS, RESFRIADAS E SECAS EM VEÍCULOS REFRIGERADOS. OTIMIZE SUA LOGÍSTICA TRANSPORTANDO MAIS DE UMA CARGA EM UM SÓ VEÍCULO.</h1>
                <span className="mt-2">Utilizada principalmente por distribuidoras de alimentos refrigerados, com muitas paradas para diversas entregas durante a viagem. São fabricadas em detalhe para o encaixe perfeito nas prateleiras do baú. Geralmente esta divisória sai junto com o baú, na fábrica. Porém, com nossa equipe de engenharia, podemos fabricar a divisória prateleira para qualquer cliente do Brasil inteiro. Para este modelo, no entanto, as medidas corretas são essenciais.</span>
            </div>

        </div>


         <CardComponentPrateleira items={cardConfig} />
            
            <div className="pt-8 text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold pb-10"> Vantagens</h1>
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