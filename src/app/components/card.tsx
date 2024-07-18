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
          className="bg-gray-950 pt-8 w-full rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full ">
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
          className="bg-gray-950 pt-8 w-full rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full text-center">
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
          className="bg-gray-950 pt-8 w-full rounded-tl-3xl text-white flex items-center justify-center p-6 flex-col"
        >
          <div className="flex items-center justify-center w-full text-center ml-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {item.title}
            </h1>
          </div>
          <div className="ml-7 w-full ">
            <p>{item.description}</p>

            <p className="mt-4">{item.subdescription}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Other functions remain the same for mobile responsiveness
