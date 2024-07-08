import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica } from "@/app/components/card";
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
            img: IsolamentoTermicoVeiculos2
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
            title: "Facilidade",
            description: "A instalação do bolsão térmico é super simples. Ao receber o seu bolsão, retire-o da embalagem, e fixe os ganchos em seu veículo. Quando não estiver em uso, ou quiser lava-lo, é só retira-lo facilmente."
        },
        {
            id: 2,
            title: "Baixo custo",
            description: "É a solução de isolamento térmico para veículos mais barata do mercado. Você poderá utilizar qualquer modelo de veículo, inclusive bagageiros de carros de passeio."
        },
        {
            id: 3,
            title: "Sob medida",
            description: "Podemos personalizar tamanhos que atendam especificamente o seu veículo, maximizando seus resultados, dentro do seu orçamento e necessidade. Por ser maleável, o tecido do bolsão se adapta a qualquer superfície."
        },
        {
            id: 4,
            title: 'Leve',
            description: 'Resistência e durabilidade também combinam com um produto leve. Utilizamos os melhores e mais resistentes materiais, que levam em conta, também, o peso. Peso baixo significa praticidade e agilidade.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Bolsão térmico</h1>
            <Image
            width={400} 
            src={isolamentoTermicoVeiculos} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={IsolamentoTermicoVeiculos2} 
            width={400}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">DESENVOLVIDO PARA SER UTILIZADO NO TRANSPORTE DE PRODUTOS CONGELADOS E RESFRIADOS EM VEÍCULOS NÃO REFRIGERADO</h1>
                <span className="mt-2">Veículos sem equipamento de refrigeração não conseguem manter a temperatura de mercadorias perecíveis. Para estes casos, a Soluforte desenvolveu o Bolsão Térmico, um isolamento térmico para veículo, removível, para o transporte de produtos congelados e resfriados, sem a utilização de sistemas de refrigeração.</span>
            </div>

        </div>


         <CardComponentBolsaTermica items={cardConfig} />
            
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
                    src={IsolamentoTermicoVeiculosCaracteristicas} 
                    alt='Image'
                    width={500}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={IsolamentoTermicoVeiculosCompisition} width={500} alt='Image' />
                    
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
        <TruckComponent/>
        </div>
                    
                </div>
    )
}