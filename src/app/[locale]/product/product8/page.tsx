import CardComponent, { CardComponentBolsaTermica, CardComponentCapaTermica, CardComponentGancheira } from "@/app/components/card";
import Image from "next/image";

import DivisionTermicTwo from '../../../../../public/assets/Divisoria-Termica-Movel_comp1.png'
import Corousel1 from '../../../../../public/assets/carroussel1.png'
import Corousel2 from '../../../../../public/assets/carroussel2.png'
import Corousel3 from '../../../../../public/assets/carroussel3.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cardConfig } from "@/config/card";
import { TruckComponent } from "@/app/components/truck";
import divisoriaTermicaGancheira from '../../../../../public/assets/Divisoria-Termica-Gancheira_prin1.png'
import divisoriaTermicaGancheiraInfo from '../../../../../public/assets/Divisoria-Termica-Gancheira_desc.jpg'
import divisoriaTermicaGancheiraCaracteristicas from '../../../../../public/assets/Divisoria-Termica-Gancheira_carac.png'

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
            img: divisoriaTermicaGancheiraInfo
        } ,  
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'TAMPA BASCULANTE'
        },
        {
            id: 2,
            number: 2,
            description: 'ESTRUTURA EM ALUMÍNIO'
        },
        {
            id: 3,
            number: 3,
            description: 'OPÇÃO DE REFORÇO EM PP'
        },
    ]

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Otimização Logística",
            description: "Toda operação logística que utiliza divisória térmica consegue otimizar o uso de seus caminhões e diversificar suas cargas, melhorando a utilização dos veículos em cada viagem."
        },
        {
            id: 2,
            title: "Economia",
            description: "Com o uso da divisória térmica, o espaço que deve ser refrigerado diminui, e com isso, diminui também o uso do aparelho de refrigeração, o que gera um ganho operacional com diminuição dos custos."
        },
        {
            id: 3,
            title: "Customização",
            description: "Cada produto é fabricado sob medida, de acordo com as medidas do veículo que a divisória será utilizada."
        },
        {
            id: 4,
            title: 'Leve',
            description: 'Com a estrutura fabricada em alumínio, além da durabilidade, a divisória também se torna leve e fácil de ser manejada.'
        }
        
    ]
    
    return (
        <div className="w-full flex flex-col items-center justify-center">
                    AQUI É O BANNER
        <div className="flex flex-col items-center justify-center pt-5 pb-8">   
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Divisória Térmica Gancheira</h1>
            <Image
            width={400} 
            src={divisoriaTermicaGancheira} 
            alt="Hero" />
        </div>

        <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={divisoriaTermicaGancheiraInfo} 
            width={300}
            alt="teste" 
            className="rounded-md ml-5"
            />

            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">A DIVISÓRIA TÉRMICA É UTILIZADA PARA SEPARAR CARGAS CONGELADAS, RESFRIADAS E SECAS EM VEÍCULOS REFRIGERADOS. OTIMIZE SUA LOGÍSTICA TRANSPORTANDO MAIS DE UMA CARGA EM UM SÓ VEÍCULO.</h1>
                <span className="mt-2">Para o uso em carretas gancheiras, com uma parte basculante para ser armazenada junto ao equipamento de refrigeração. São fabricadas com estrutura em alumínio, revestidas com lona de gramatura 530, com reforço na base com plástico. Fabricação sob medida.</span>
            </div>

        </div>


         <CardComponentGancheira items={cardConfig} />
            
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
                    src={divisoriaTermicaGancheiraCaracteristicas} 
                    alt='Image'
                    width={300}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8 mt-8">
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">Composição</h1>
                <span className="mt-2 mb-8">No intuito de aumentar a durabilidade, facilitar a limpeza e diminuir o peso, a Soluforte trabalha com os melhores materiais na composição de seus produtos. A estrutura é em alumínio, a lona possui gramatura de 530, as barras de proteção laterais são em alumínio, o kit ventilação foi desenvolvido por nossa equipe de engenharia para dar melhor acabamento ao produto.</span>
                        
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