import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentDivisoriaTermica } from "@/app/components/card";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
            description: 'não absorve umidade'
        },
        {
            id: 2,
            number: 2,
            description: '90mm de espessura'
        },
        {
            id: 3,
            number: 3,
            description: 'sem perfil de ferro ou plástico'
        },
        {
            id: 4,
            number: 4,
            description: `pesa apenas 12kg`
        },
        {
            id: 5,
            number: 1,
            description: 'material em eps e epe'
        },
        {
            id: 6,
            number: 2,
            description: 'espuṕmas laterais d28'
        },
        {
            id: 7,
            number: 3,
            description: 'reforço na base com chapa plástica'
        }
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Leve",
            description: "A divisória térmica bipartida Soluforte pesa apenas 12kg, o que facilita o manuseio por quem a utilizará."
        },
        {
            id: 2,
            title: "Reforçado",
            description: "Nossa divisória térmica para baú frigorífico é a única no mercado com 90mm de espessura. Isso significa entregar um produto muito melhor e mais resistente."
        },
        {
            id: 3,
            title: "Customização",
            description: "Todas as divisórias térmicas para caminhão são fabricadas sob medida, para atender as especificações do seu veículo. Também pode ser fabricada com kit de ventilação."
        },
        {
            id: 4,
            title: 'Economia de Combustível',
            description: 'Com a divisória térmica para baú, o espaço que precisa ser refrigerado diminui e, consequentemente, o tempo que o equipamento precisa ficar ligado para manter a temperatura. Isso representa uma enorme economia.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Divisória Térmica Bipartida</h1>
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
                <h1 className="text-2xl md:text-2xl font-bold">A DIVISÓRIA TÉRMICA É UTILIZADA PARA SEPARAR CARGAS CONGELADAS, RESFRIADAS E SECAS EM VEÍCULOS REFRIGERADOS. OTIMIZE SUA LOGÍSTICA TRANSPORTANDO MAIS DE UMA CARGA EM UM SÓ VEÍCULO.</h1>
                <span className="mt-2">Estruturada e leve, a divisória térmica bipartida Soluforte é fabricada sob medida, com placas de EPS e EPE, tem espessura de 90mm e é revestida com lona vinílica 530 micras, pesa cerca de 12kg e pode ser utilizada em qualquer veículo refrigerado.</span>
            </div>

        </div>


         <CardComponentDivisoriaTermica items={cardConfig} />
            
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
                <h1 className="text-2xl md:text-2xl font-bold">Composição</h1>
                <span className="mt-2 mb-8">No intuito de aumentar a durabilidade, facilitar a limpeza e diminuir o peso, a Soluforte trabalha com os melhores materiais na composição do bolsão térmico.</span>
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