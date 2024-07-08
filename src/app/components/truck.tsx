import { Clock, Earth, Truck } from "lucide-react";


// TODO: Arrumar esse trem, não está centralizado

export function TruckComponent () {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mb-10 p-4 bg-slate-100 rounded-lg w-[900px]">
        <div className="flex justify-around items-center  gap-10  ">
                <div className="flex flex-col items-center">
                    <Truck width={80} height={80} />
                    <h1 className="text-center text-lg font-bold">Fast Production</h1>
                    <span className="text-gray-600">We produce and dispatch your order within 24 hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <Earth width={80} height={80} />
                    <h1 className="text-center text-lg font-bold">Delivery to any point on the planet</h1>
                    <span className="text-gray-600">We produce and dispatch your order within 24 hours</span>
                </div>
                <div className="flex flex-col items-center">
                    <Clock width={80} height={80} />
                    <h1 className="text-center text-lg font-bold">Speed Delivery</h1>
                    <span className="text-gray-600">We produce and dispatch your order within 24 hours</span>
                </div>
            </div>
        </div>
    )
}