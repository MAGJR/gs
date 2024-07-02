"use client"

import Image from "next/image"
import Hero1 from '../../../../../public/assets/Hero.png'
import ImageDivisionTermic from '../../../../../public/assets/HeroImg.png'
import DivisionTermic from '../../../../../public/assets/DivisãoTermica.png'
import TransportImg from '../../../../../public/assets/transport.png'
import DivisorTermic from '../../../../../public/assets/Divisoria-Termica-Movel_carac1.png'
import DivisionTermicTwo from '../../../../../public/assets/Divisoria-Termica-Movel_comp1.png'
import Corousel1 from '../../../../../public/assets/carroussel1.png'
import Corousel2 from '../../../../../public/assets/carroussel2.png'
import Corousel3 from '../../../../../public/assets/carroussel3.png'
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Earth, Shield, Truck } from "lucide-react"


type ProductsProps = {
    id: number,
    product: string
}

type ItemsInfoProps = {
    id: number,
    title: string,
    description: string
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

export function Hero () {

    const items: ItemsInfoProps[] = [
        {
            id: 1,
            title: "Leve",
            description: "A divisória térmica móvel é leve e muito fácil de ser utilizada e movimentada, por conta da sua estrutura e preenchimento leve."
        },
        {
            id: 2,
            title: "Revestimento",
            description: "Nossa divisória é revestida em lona auto-extinguível, com aditivos anti UV, antioxidante e antifungo, tornando-a muito mais resistente."
        },
        {
            id: 3,
            title: "Customização",
            description: "Além do tamanho, podemos colocar porta central ou lateral, kit de ventilação. O trilho pode ser superior ou lateral, tudo de acordo com o que melhor lhe atender."
        },
        {
            id: 3,
            title: "Estrutura de Alúminio",
            description: "O grande diferencial da nossa divisória térmica móvel é a estrutura em alumínio e o carrinho em inox."
        }
    ]

    const numbers: DetailsInfoProps[] = [
        {
            id: 1,
            number: 1,
            description: 'Leve'
        },
        {
            id: 2,
            number: 2,
            description: 'Movel'
        },
        {
            id: 3,
            number: 3,
            description: 'Produzidos sob medida'
        },
        {
            id: 4,
            number: 1,
            description: 'Estrutura em alumínio'
        },
        {
            id: 5,
            number: 2,
            description: 'Preenchimento em eps'
        },
        {
            id: 6,
            number: 3,
            description: 'Reforço na base com chapa plástica'
        },
        {
            id: 6,
            number: 4,
            description: 'Revestimento lona 550 micras'
        }
    ]

    const imagesCorousel: ImageCorouselProps[] = [
        {
            id: 1,
            img: Corousel1
        } ,
        {
            id: 2,
            img: Corousel2
        } ,
        {
            id: 3,
            img: Corousel3
        }
    ]

    const products: ProductsProps[] = [
        {
            id: 1,
            product: 'Carnes'
        },
        {
            id: 2,
            product: 'Embutidos'
        },
        {
            id: 3,
            product: 'Verduras'
        },
        {
            id: 4,
            product: 'Frutas'
        },
        {
            id: 5,
            product: 'Carnes congeladas'
        },
        {
            id: 6,
            product: 'E muito mais'
        }
    ]


    return (
        <div className=" w-full flex flex-col items-center justify-center"> 
        <div className="w-full">
        <Image src={Hero1} 
        alt="Hero" 
        width={1000} 
        layout="responsive"
        objectFit="cover"
        />
        </div>

        <div className="flex flex-col items-center justify-center pt-5 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4"> Divisão térmica Móvel</h1>
            <Image src={ImageDivisionTermic} alt="Hero" />
            </div>    

            <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
            
            <Image src={DivisionTermic} 
            alt="teste" 
            className="rounded-md ml-5"
            />
            <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">A DIVISÓRIA TÉRMICA É UTILIZADA PARA SEPARAR CARGAS CONGELADAS, RESFRIADAS E SECAS EM VEÍCULOS REFRIGERADOS. OTIMIZE SUA LOGÍSTICA TRANSPORTANDO MAIS DE UMA CARGA EM UM SÓ VEÍCULO.</h1>
                <span className="mt-2">Estruturada de alumínio, é utilizada principalmente em baús frigoríficos, e é instalada em um trilho padrão de 3 metros, dando flexibilidade no carregamento e descarregamento de mercadorias. Este modelo pode ser fabricado com porta, kit de ventilação e com trilho superior ou lateral.</span>
            </div>
            </div>

            <div className="pt-8 pb-8 ">
                <div style={{position: 'relative'}}>
                    <div className="absolute top-10 left-60 w-[800px] h-[200px] bg-gray-200 rounded-sm ">
                <div className="grid grid-cols-3 m-12 gap-y-6">
                            {products.map((product) => (
                        <div className="flex items-center " key={product.id}>
                            <div className="w-8 h-8 flex items-center justify-center rounded-br-lg rounded-tl-lg">
                                <span className="text-blue-800 font-bold">✓</span>
                            </div>
                                <h1 className="text-lg text-bold">{product.product}</h1>
                        </div>
                        ))}

                        

                    </div>
                </div>
                    <Image  src={TransportImg} alt="transport"/>
                </div>
            </div>

            <div className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex">
                    <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                        <h1 className="text-3xl md:text-4xl font-bold ">O que isso significa para você?</h1>
                    </div>
                    <div className="ml-7 w-1/2 ">
                    <p>Economia financeira na diminuição de produtos estragados e danificados por variações de temperatura em trânsito. Com nossa experiência, podemos ajudá-lo em sua operação logística, com a solução adequada para proteger sua carga.</p>    
                    
                    <p className="mt-4">Por sua estrutura leve, em alumínio, torna o trabalho do dia a dia mais prático e fácil. O revestimento em lona auto-extinguível, com aditivos anti UV, antioxidante e antifungo que aumentam a resistência do produto mesmo sob variações de temperatura e ação de intempéries, torna ainda mais resistente e firme a nossa divisória.</p>
                    </div>
                    
            </div>
            <div className="pt-8 text-center ">
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
                <div className="mt-10 ">
                    <h1 className="text-3xl md:text-4xl font-bold pb-4">Caracteristicas</h1>
                    
                <div className="flex items-center justify-between gap-8 bg-slate-100">
                    <div className="text-left ml-36 ">
                        {numbers.filter(number => [1, 2, 3].includes(number.id)).map(number => (
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
                    src={DivisorTermic} 
                    alt='Image'
                    width={500}
                    height={500}
                    />
                    </div>
                </div>
                <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
                    <Image src={DivisionTermicTwo} alt='Image' />
                    
                <div className="flex flex-col" style={{maxWidth: "600px"}}>
                <h1 className="text-2xl md:text-2xl font-bold">Composição</h1>
                <span className="mt-2 mb-8">Modelo fabricado com estrutura de alumínio, material leve e que não enferruja, sua estrutura é fixada ao veículo através de trilhos.</span>
                        {numbers.filter(number => [4, 5, 6].includes(number.id)).map(number => (
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
      <CarouselNext />
    </Carousel>

        <div className="flex flex-col items-center justify-center mt-8 mb-10 p-4 bg-slate-100 rounded-lg">
            <div className="flex justify-around items-center  gap-10  ">
                <div className="flex flex-col items-center">
                    <Truck width={80} height={80} />
                    <h1 className="text-center text-lg font-bold">Produção Rápida</h1>
                    <span className="text-gray-600">Produzimos e remetemos seu pedido em 24h</span>
                </div>
                <div className="flex flex-col items-center ">
                    <Earth width={80} height={80} />
                    <h1 className="text-center text-lg font-bold">Entrega em qualquer ponto do planeta</h1>
                    <span className="text-gray-600">Produzimos e remetemos seu pedido em 24h</span>
                </div>
                <div className="flex flex-col items-center ">
                    <Clock width={80} height={80} />
                    <h1 className="text-center text-lg font-bold">Rapidez de Entrega</h1>
                    <span className="text-gray-600">Produzimos e remetemos seu pedido em 24h</span>
                </div>
            </div>
        </div>
        </div>
        
        
    );
    
}