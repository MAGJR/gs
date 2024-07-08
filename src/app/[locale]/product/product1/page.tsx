import CardComponent, { CardComponentCapaTermica } from "@/app/components/card";
import Image from "next/image";


import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
            description: 'Fechamento com Velcro'
        },
        {
            id: 2,
            number: 2,
            description: 'Revestimento com material impermeável'
        },
        {
            id: 3,
            number: 3,
            description: 'Base térmica separada'
        },
        {
            id: 4,
            number: 4,
            description: 'visor para identificação'
        },
        {
            id: 5,
            number: 1,
            description: 'Costuras de compresão'
        },
        {
            id: 6,
            number: 2,
            description: 'Material impermeável'
        },
        {
            id: 6,
            number: 4,
            description: 'Revestimento lona 550 micras'
        }
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Eficiência",
            description: "Fornece proteção passiva de carga sensível à temperatura durante todas as fases do ciclo logístico."
        },
        {
            id: 2,
            title: "Customizada",
            description: "Fabricamos tamanhos que atendam a sua operação logística, maximizando seus resultados dentro do seu orçamento e necessidade."
        },
        {
            id: 3,
            title: "Custo X benefício",
            description: "A capa térmica para palete é uma solução com ótimo custo x benefício para proteção da sua carga paletizada. Tenha a segurança de um sistema ativo, com baixo valor de investimento."
        },
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Capa Térmica para Palete</h1>
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
                <h1 className="text-2xl md:text-2xl font-bold">REVESTIMENTO TÉRMICO PARA MERCADORIAS PALETIZADAS QUE NECESSITAM DE CONTROLE DE TEMPERATURA NO PROCESSO LOGÍSTICO.</h1>
                <span className="mt-2">Também conhecida como manta térmica para pallet, foi desenvolvida para proteger mercadorias paletizadas sensíveis à variação de temperatura. São produzidas de acordo com a necessidade do cliente, nas medidas que melhor se adequem à sua operação logística. A capa térmica para palete, ou cobertura térmica para pallet, ou simplesmente manta térmica, é uma solução viável para os transportadores de produtos perecíveis, diminuindo o risco de quebra de temperatura e consequente perda e contaminação de seus produtos.</span>
            </div>

        </div>


         <CardComponentCapaTermica items={cardConfig} />
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
                <h1 className="text-2xl md:text-2xl font-bold">Composição</h1>
                <span className="mt-2 mb-8">Modelo fabricado com estrutura de alumínio, material leve e que não enferruja, sua estrutura é fixada ao veículo através de trilhos.</span>
                        {numbers.filter(number => [5, 7].includes(number.id)).map(number => (
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