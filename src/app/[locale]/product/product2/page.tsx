import { CardComponentCapaTermica } from '@/app/components/card'
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
import CoberturaTermicaParaPalete from '../../../../../public/assets/Cobertura-Termica-para-Palete_comp.png'
import LonaTermica from '../../../../../public/assets/termica.png'
import LonaTermicaInfo from '../../../../../public/assets/Lona-Termica_desc13.png'
import LonaTermicaNumbers from '../../../../../public/assets/Lona-Termica_carac.png'
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
      img: LonaTermica,
    },
    {
      id: 2,
      img: LonaTermicaInfo,
    },
  ]

  const numbers: DetailsInfoProps[] = [
    {
      id: 1,
      number: 1,
      description: 'Double layer of thermal materials',
    },
    {
      id: 2,
      number: 2,
      description: 'Nylon coating',
    },
    {
      id: 3,
      number: 3,
      description: 'Custom-made',
    },
    {
      id: 4,
      number: 4,
      description: 'Seams that join the layers',
    },
    {
      id: 5,
      number: 1,
      description: 'JOINTED LAYERS BY COMPRESSION STAYS',
    },
    {
      id: 6,
      number: 2,
      description: 'DOUBLE THERMAL LAYER',
    },
    {
      id: 7,
      number: 3,
      description: 'IMPERMEABLE NYLON COATING',
    },
  ]

  const items: ItemsInfoProps[] = [
    {
      id: 1,
      title: 'Efficiency',
      description:
        'Provides passive thermal load protection during all phases of the logistics cycle.',
    },
    {
      id: 2,
      title: 'Customized',
      description:
        'We manufacture sizes that meet your logistics operation, maximizing your results within your budget and needs.',
    },
    {
      id: 3,
      title: 'Cost X Benefit',
      description:
        'The thermal insulation for pallets is a solution with excellent cost X benefit for protecting your palletized load. Have the security of an active system with low investment value.',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-5 mb-36">
        <CardTitle className="mb-4">Thermal cloth</CardTitle>
        <Image src={LonaTermica} width={400} alt="Hero" />
      </div>

      <div className="flex items-start gap-5 mr-auto pl-8 pb-8 mt-8">
        <Image
          src={LonaTermicaInfo}
          alt="teste"
          className="rounded-md ml-5"
          width={400}
        />

        <div className="flex flex-col" style={{ maxWidth: '600px' }}>
          <CardTitle>
            THE THERMAL BLANKET IS THE IDEAL SOLUTION FOR THE TRANSPORT OF
            PERISHABLE PRODUCTS, GUARANTING PROTECTION AGAINST TEMPERATURE
            VARIATIONS
          </CardTitle>
          <CardDescription className="mt-2">
            Also known as thermal blanket for pallet, it was developed to
            protect palletized goods sensitive to temperature variations. They
            are produced according to the &apos;client&apos;s needs, in the
            measures that best fit their logistics operation. The thermal
            blanket for pallet, or thermal coverage for pallet, or simply
            thermal blanket, is a viable solution for perishable goods
            transporters, reducing the risk of temperature breakage and
            consequent loss and contamination of their products.
          </CardDescription>
        </div>
      </div>

      <CardComponentCapaTermica items={cardConfig} />
      <div className="pt-8 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold pb-10">Benefits</h1>
        <div className="flex items-center justify-center">
          <div className="flex gap-2 w-[900px]">
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
            src={LonaTermicaNumbers}
            alt="Image"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
        <Image src={CoberturaTermicaParaPalete} width={400} alt="Image" />

        <div className="flex flex-col" style={{ maxWidth: '600px' }}>
          <CardTitle>Composition</CardTitle>
          <CardDescription className="mt-2 mb-4">
            In order to increase durability, facilitate cleaning and reduce
            weight, GS works with the best materials in the composition
            of the thermal blanket.
          </CardDescription>
          <CardDescription className="mt-2 mb-8">
            For the coating we use nylon, a material that is easy to clean,
            impermeable and light.
          </CardDescription>
          <CardDescription className="mt-2 mb-8">
            The internal thermal layers follow the same concept of lightness and
            durability, being joined by compressive seams, ensuring a long life
            to the product.
          </CardDescription>
          {numbers
            .filter((number) => [5, 6, 7].includes(number.id))
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
