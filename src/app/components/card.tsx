import { CardInfos } from '@/types/card'

type CardProps = {
  items: CardInfos
}

export default function CardComponent({ items }: CardProps) {
  return (
    <div>
      {items.mainHome.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// TODO: Arrumar esse trem texto centralizado
export function CardComponentCapaTermica({ items }: CardProps) {
  return (
    <div className="px-4 flex justify-center items-center">
      {items.productCapaTermica.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 text-center">
            <p className="text-center">{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentLonaTermica({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productCapaTermica.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentBolsaTermica({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productBolsaTermica.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentBiPartida({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productBiPartida.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentDivisoriaTermica({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productDivisoriaTermica.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentDivisoriaCortina({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productDivisoriaCortina.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentGancheira({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productGancheira.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function CardComponentPrateleira({ items }: CardProps) {
  return (
    <div className="px-4">
      {items.productPrateleira.map((item) => (
        <div
          key={item.title}
          className="bg-gray-950 pt-8 sm:pt-4 w-full sm:w-[1120px]  rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full sm:w-1/2 text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full sm:w-1/2 ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
