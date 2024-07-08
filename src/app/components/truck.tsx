import { Clock, Earth, Truck } from "lucide-react";


export function TruckComponent () {
    return (
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
    )
}