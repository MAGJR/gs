import { CardInfos } from "@/types/card"


type CardProps = {
    items: CardInfos
}

export default function CardComponent ({items}: CardProps) {
    return (
        <div >
                    {items.mainHome.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

// TODO: Arrumar esse trem texto centralizado
export function CardComponentCapaTermica ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productCapaTermica.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white  p-6">
                        <div className="  justify-center items-center text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

export function CardComponentLonaTermica ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productCapaTermica.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

export function CardComponentBolsaTermica ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productBolsaTermica.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

export function CardComponentBiPartida ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productBiPartida.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}


export function CardComponentDivisoriaTermica ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productDivisoriaTermica.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

export function CardComponentDivisoriaCortina ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productDivisoriaCortina.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

export function CardComponentGancheira ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productGancheira.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}

export function CardComponentPrateleira ({items}: CardProps) {
    return (
        <div className="px-4">
                    {items.productPrateleira.map((item) => (
                        <div key={item.title} className="bg-gray-950 pt-8 w-[1120px] h-[300px] rounded-tl-3xl text-white flex p-6">
                        <div className="flex items-center justify-center w-1/2 text-center ml-2" >
                            <h1 className="text-3xl md:text-4xl font-bold ">{item.title}</h1>
                        </div>
                        <div className="ml-7 w-1/2 ">
                        <p>{item.description}</p>    
                        
                        <p className="mt-4">{item.subdescription}</p>
                        </div>
                        
                </div>
                    ))}       
            </div>
    )
}