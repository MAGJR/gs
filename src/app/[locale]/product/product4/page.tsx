import CardComponent, { CardComponentBiPartida, CardComponentBolsaTermica, CardComponentCapaTermica } from "@/app/components/card";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import isolamentoTermicoVeiculos from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_prin2.png'
import IsolamentoTermicoVeiculos2 from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_desc.png'
import IsolamentoTermicoVeiculosCaracteristicas from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_numbers.png'
import IsolamentoTermicoVeiculosCompisition from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_comp3.png'
import { TruckComponent } from "@/app/components/truck";
import divisoriaCargaSecaBipartida from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_prin6.png'
import divisoriaCargaSecaBipartidaInfo from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_desc1.png'
import divisoriaCargaSecaBipartidaNumber from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_carac4.png'
import divisoriaCargaSecaBipartidaComp from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_comp1.png'

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
            img: divisoriaCargaSecaBipartidaInfo
        } ,
        
        
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'estrutura em alumínio'
        },
        {
            id: 2,
            number: 2,
            description: 'produzidas sob medida'
        },
        {
            id: 3,
            number: 1,
            description: 'estrutura de alumínio'
        },
        {
            id: 4,
            number: 2,
            description: `revestimento com chapa de 4mm`
        },
        {
            id: 5,
            number: 3,
            description: 'esponja de alta densidade'
        },
        {
            id: 6,
            number: 4,
            description: 'revestimento da esponja com lona 300 micras'
        },
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Leve",
            description: "Com a divisória de cargas secas, o operador logístico consegue maximizar a utilização dos veículos, e com isso, otimizar a operação."
        },
        {
            id: 2,
            title: "Reforçada",
            description: "Além da estrutura de alumínio, a divisória ainda conta com revestimento plástico de 4mm em cada lado."
        },
        {
            id: 3,
            title: "Otimização Logística",
            description: "Com a divisória de cargas secas, o operador logístico consegue maximizar a utilização dos veículos, e com isso, otimizar a operação."
        },
       
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Divisória Carga Seca Bipartida</h1>
            <Image
            width={400} 
            src={divisoriaCargaSecaBipartida} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={divisoriaCargaSecaBipartidaInfo} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">AS DIVISÓRIAS SÃO UMA FERRAMENTA INDISPENSÁVEL NA GESTÃO DE SUA FROTA, GERANDO ECONOMIA E OTIMIZANDO A SUA OPERAÇÃO.</h1>
                <span className="mt-2">No transporte de cargas, a divisória visa otimizar a logística de sua frota, separando diferentes cargas, maximizando o desempenho no transporte e reduzindo custos.</span>
            </div>

        </div>


         <CardComponentBiPartida items={cardConfig} />
            
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

                    <h1 className="text-3xl md:text-4xl font-bold"> Caracteristicas</h1>
                    <div className="flex items-center mt-8 justify-between gap-8 bg-slate-100">
                    <div className="text-left ml-36 ">
                        {numbers.filter(number => [1, 2].includes(number.id)).map(number => (
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
                    src={divisoriaCargaSecaBipartidaNumber} 
                    alt='Image'
                    width={300}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={divisoriaCargaSecaBipartidaComp} width={400} alt='Image' />
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">Composição</h1>
                <span className="mt-2 mb-8">No intuito de aumentar a durabilidade, facilitar a limpeza e diminuir o peso, a Soluforte trabalha com os melhores materiais na composição do bolsão térmico.</span>
                        {numbers.filter(number => [3, 4, 5, 6].includes(number.id)).map(number => (
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
        {/* <Image src={} alt=''/> */}
    </div>
        <div>
        <TruckComponent/>
        </div>
                    
        </div>
    )
}