import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentDivisoriaCortina } from "@/app/components/card";
import Image from "next/image";

import DivisionTermicTwo from '../../../../../public/assets/Divisoria-Termica-Movel_comp1.png'
import Corousel1 from '../../../../../public/assets/carroussel1.png'
import Corousel2 from '../../../../../public/assets/carroussel2.png'
import Corousel3 from '../../../../../public/assets/carroussel3.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
            description: 'fixação por sistema de pressão'
        },
        {
            id: 2,
            number: 2,
            description: '10mm de espessura'
        },
        {
            id: 3,
            number: 3,
            description: 'pesa apenas 7kg'
        },
        {
            id: 4,
            number: 4,
            description: `não absorve umidade`
        },
        {
            id: 5,
            number: 1,
            description: 'fixação por traverse palete'
        },
        {
            id: 6,
            number: 2,
            description: 'revestimento com nylon impermeabilizado'
        },
       
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Leve",
            description: "A mais leve das divisórias. Pesa apenas 7kg. É sinônimo de fácil instalação e manuseio."
        },
        {
            id: 2,
            title: "Praticidade",
            description: "É fixada por um trava pallet de catraca, que é instalado nas laterais do veículo. Fácil de instalar. Fácil de retirar."
        },
        {
            id: 3,
            title: "Customização",
            description: "Além do tamanho, ainda podemos fabricar com abertura central, com zíper ou velcro, bem como instalar o kit de ventilação, 12V ou 24V."
        },
        {
            id: 4,
            title: 'Otimização',
            description: 'Por não possuir estrutura, a divisória térmica cortina pode ser instalada em veículos maiores ou menores, sendo ajustada apenas na catraca do trava.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Divisória Térmica Cortina</h1>
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
                <h1 className="text-2xl md:text-2xl font-bold">A DIVISÓRIA TÉRMICA É UTILIZADA PARA SEPARAR CARGAS CONGELADAS, RESFRIADAS E SECAS EM VEÍCULOS REFRIGERADOS. OTIMIZE SUA LOGÍSTICA TRANSPORTANDO MAIS DE UMA CARGA EM UM SÓ VEÍCULO.</h1>
                <span className="mt-2">Utilizada principalmente por distribuidoras, que fazem o transporte por pouco tempo, geralmente completando a entrega dentro do mesmo dia. São leves, sem estrutura, presas ao teto através de uma trava, e de baixo custo. Também pode ser utilizada para proteção da carga na espera pelo descarregamento.</span>
            </div>

        </div>


         <CardComponentDivisoriaCortina items={cardConfig} />
            
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
            {/* TODO: FAZER FICHA TÉCNICA */}
        <TruckComponent/>
        </div>
                    
                </div>
    )
}