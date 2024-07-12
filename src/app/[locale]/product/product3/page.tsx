import { CardComponentBolsaTermica } from '@/app/components/card'
import Image, { StaticImageData } from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { cardConfig } from '@/config/card'
import isolamentoTermicoVeiculos from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_prin2.png'
import IsolamentoTermicoVeiculos2 from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_desc.png'
import IsolamentoTermicoVeiculosCaracteristicas from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_numbers.png'
import IsolamentoTermicoVeiculosCompisition from '../../../../../public/assets/Isolamento-Termico-para-Veiculos_comp3.png'
import { TruckComponent } from '@/app/components/truck'

type DetailsInfoProps = {
  id: number
  number: number
  description: string
}

type ImageCorouselProps = {
  id: number
  img: StaticImageData
}

type ItemsInfoProps = {
  id: number
  title: string
  description: string
}

export default function Page() {
  const imagesCorousel: ImageCorouselProps[] = [
    {
      id: 1,
      img: IsolamentoTermicoVeiculos2,
    },
  ]

  const numbers: DetailsInfoProps[] = [
    {
      id: 1,
      number: 1,
      description: 'ideal for small trips',
    },
    {
      id: 2,
      number: 2,
      description: 'guarantees up to 24 hours',
    },
    {
      id: 3,
      number: 3,
      description: 'prevents interior and exterior temperature exchange',
    },
    {
      id: 4,
      number: 4,
      description: 'replaces insulation panels and refrigeration system',
    },
    {
      id: 5,
      number: 1,
      description: 'layers joined by compression seams',
    },
    {
      id: 6,
      number: 2,
      description: 'waterproof nylon coating',
    },
  ]

  const items: ItemsInfoProps[] = [
    {
      id: 1,
      title: 'Convenience',
      description:
        "Installing the thermal blanket is super simple. When you receive your blanket, remove it from the packaging and attach the hooks to your vehicle. When it's not in use or you want to wash it, just remove it easily.",
    },
    {
      id: 2,
      title: 'Low cost',
      description:
        'Our thermal insulation for vehicles is the most affordable on the market. You can use any model of vehicle, including passenger carrier trunks.',
    },
    {
      id: 3,
      title: 'Custom made',
      description:
        'We can customize sizes that specifically fit your vehicle, maximizing your results within your budget and need. Because it is flexible, the fabric of the blanket adapts to any surface.',
    },
    {
      id: 4,
      title: 'Lightweight',
      description:
        'Resistance and durability also combine with a lightweight product. We use the best and most resistant materials, which take into account weight. Light weight means practicality and agility.',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-5 mb-36">
        <CardTitle className="mb-4"> Thermal blanket</CardTitle>
        <Image width={400} src={isolamentoTermicoVeiculos} alt="Hero" />
      </div>

      <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
        <Image
          src={IsolamentoTermicoVeiculos2}
          width={300}
          alt="teste"
          className="rounded-md ml-5"
        />

        <div className="flex flex-col" style={{ maxWidth: '600px' }}>
          <CardTitle>
            DEVELOPED FOR USE IN THE TRANSPORT OF FROZEN AND COOLED PRODUCTS IN
            VEHICLES WITHOUT REFRIGERATION
          </CardTitle>
          <CardDescription className="mt-2">
            Vehicles without refrigeration equipment cannot maintain the
            temperature of perishable goods. For these cases, Soluforte
            developed the Thermal Bag, a thermal insulation for vehicles,
            removable, for the transport of frozen and cooled products, without
            the use of refrigeration systems.
          </CardDescription>
        </div>
      </div>

      <CardComponentBolsaTermica items={cardConfig} />

      <div className="pt-8 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold pb-10"> Benefits</h1>
        <div className="flex items-center justify-center">
          <div className="flex gap-2 ">
            {items.map((descriptions) => (
              <div key={descriptions.id} className="bg-gray-100 rounded-lg p-2">
                <h1 className="text-3xl md:text-xl font-bold">
                  {descriptions.title}
                </h1>

                <p>{descriptions.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold"> Characteristics</h1>
      <div className="flex items-center mt-8 justify-between gap-8 bg-slate-100">
        <div className="text-left ml-36 ">
          {numbers
            .filter((number) => [1, 2, 3, 4].includes(number.id))
            .map((number) => (
              <div key={number.id} className="flex items-center gap-2">
                <div className="flex items-center justify-center mt-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-br-lg rounded-tl-lg  ">
                  <h1>{number.number}</h1>
                </div>
                <p className="">{number.description}</p>
              </div>
            ))}
        </div>
        <div>
          <Image
            src={IsolamentoTermicoVeiculosCaracteristicas}
            alt="Image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
        <Image
          src={IsolamentoTermicoVeiculosCompisition}
          width={500}
          alt="Image"
        />

        <div className="flex flex-col" style={{ maxWidth: '600px' }}>
          <CardTitle>Composition</CardTitle>
          <CardDescription className="mt-2 mb-4">
            In order to increase durability, ease cleaning and reduce weight,
            Soluforte works with the best materials in the thermal lining
            composition.
          </CardDescription>
          <CardDescription className="mt-2 mb-4">
            For the coating, we use nylon, a material easy to clean, waterproof
            and lightweight.
          </CardDescription>
          <CardDescription className="mt-2 mb-4">
            The internal thermal layers follow the same concept of lightness and
            durability, being joined by compression seams, ensuring long life to
            the product.
          </CardDescription>
          {numbers
            .filter((number) => [5, 6].includes(number.id))
            .map((number) => (
              <div key={number.id} className="flex items-center gap-2">
                <div className="flex items-center justify-center mt-2 w-8 h-8 bg-blue-600 text-white font-bold rounded-br-lg rounded-tl-lg  ">
                  <h1>{number.number}</h1>
                </div>
                <p className="">{number.description}</p>
              </div>
            ))}
        </div>
        <div></div>
      </div>

      <Carousel className="w-full max-w-3xl mt-36">
        <CarouselContent>
          {imagesCorousel.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-10">
                    <Image src={img.img} alt="Image" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div>
        <TruckComponent />
      </div>
    </div>
  )
}
