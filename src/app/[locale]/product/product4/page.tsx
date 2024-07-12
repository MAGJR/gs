import { CardComponentBiPartida } from '@/app/components/card'
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

import { TruckComponent } from '@/app/components/truck'
import divisoriaCargaSecaBipartida from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_prin6.png'
import divisoriaCargaSecaBipartidaInfo from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_desc1.png'
import divisoriaCargaSecaBipartidaNumber from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_carac4.png'
import divisoriaCargaSecaBipartidaComp from '../../../../../public/assets/Divisoria-Carga-Seca-Bipartida_comp1.png'

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
      img: divisoriaCargaSecaBipartidaInfo,
    },
  ]

  const numbers: DetailsInfoProps[] = [
    {
      id: 1,
      number: 1,
      description: 'aluminum structure',
    },
    {
      id: 2,
      number: 2,
      description: 'custom-made',
    },
    {
      id: 3,
      number: 1,
      description: 'aluminum structure',
    },
    {
      id: 4,
      number: 2,
      description: `4mm sheet coat`,
    },
    {
      id: 5,
      number: 3,
      description: 'high-density sponge',
    },
    {
      id: 6,
      number: 4,
      description: 'sponge coat with 300 micron cotton',
    },
  ]

  const items: ItemsInfoProps[] = [
    {
      id: 1,
      title: 'Lightweight',
      description:
        'With load separators, logistics operators can maximize the use of vehicles, thus optimizing the operation.',
    },
    {
      id: 2,
      title: 'Reinforced',
      description:
        'In addition to the aluminum structure, the load separator also has a 4mm plastic lining on each side.',
    },
    {
      id: 3,
      title: 'Logistics Optimization',
      description:
        'With load separators, logistics operators can maximize the use of vehicles, thus optimizing the operation.',
    },
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-5 mb-36">
        <CardTitle className="mb-4"> Load Divider Bipartite</CardTitle>
        <Image width={400} src={divisoriaCargaSecaBipartida} alt="Hero" />
      </div>

      <div className="flex items-start gap-5 mr-auto pl-8 pb-8">
        <Image
          src={divisoriaCargaSecaBipartidaInfo}
          width={300}
          alt="teste"
          className="rounded-md ml-5"
        />

        <div className="flex flex-col" style={{ maxWidth: '600px' }}>
          <CardTitle>
            DIVISORS ARE AN IRREPLACEABLE TOOL IN THE MANAGEMENT OF YOUR FLEET,
            BRINGING ECONOMY AND OPTIMIZING YOUR OPERATION.
          </CardTitle>
          <span className="mt-2">
            In the transportation of goods, the divider aims to optimize
            logistics in your fleet, separating different loads, maximizing
            performance in transport and reducing costs.
          </span>
        </div>
      </div>

      <CardComponentBiPartida items={cardConfig} />

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
            .filter((number) => [1, 2].includes(number.id))
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
            src={divisoriaCargaSecaBipartidaNumber}
            alt="Image"
            width={300}
            height={500}
          />
        </div>
      </div>
      <div className="flex gap-5 mr-auto pl-8 pt-8 items-center ml-8">
        <Image src={divisoriaCargaSecaBipartidaComp} width={400} alt="Image" />

        <div className="flex flex-col" style={{ maxWidth: '600px' }}>
          <CardTitle className="text-2xl md:text-2xl font-bold">
            Composition
          </CardTitle>
          <CardDescription className="mt-2 mb-4">
            In order to increase durability, simplify cleaning and reduce
            weight, Soluforte works with the best raw materials in the
            composition of its products.
          </CardDescription>
          <CardDescription className="mt-2 mb-4">
            For the coating, we use plastic sheets with 4mm thickness, and
            aluminum in the structure of the partition, easy-to-clean materials.
          </CardDescription>
          <CardDescription className="mt-2 mb-4">
            On the sides, high-density foam with 5cm thickness, and we coat it
            with 300 microns of fabric, which provides a better fit to the sides
            of the vehicle.
          </CardDescription>
          {numbers
            .filter((number) => [3, 4, 5, 6].includes(number.id))
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
      <div>{/* <Image src={} alt=''/> */}</div>
      <div>
        <TruckComponent />
      </div>
    </div>
  )
}
