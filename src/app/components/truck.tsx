import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Clock, Earth, Truck } from "lucide-react";


// TODO: Arrumar esse trem, não está centralizado

export function TruckComponent () {
    return (
        <div className="grid">
            <div className="flex space-x-4 text-left">
        <Card className="">
            <CardContent className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
            <Truck width={80} height={80} />
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
            <CardTitle className="truncate mb-2">Fast Production</CardTitle>
            <CardDescription className="truncate">We produce and dispatch your order within 24 hours</CardDescription>
            </div>
            </CardContent>
        </Card>

        <Card className="">
            <CardContent className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
            <Earth width={80} height={80} />
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
            <CardTitle className="truncate mb-2">Delivery to any point on the planet</CardTitle>
            <CardDescription className="truncate">Delivery by courier for the entire territory</CardDescription>
            </div>
            </CardContent>
        </Card>

        <Card className="">
            <CardContent className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
            <Clock width={80} height={80} />
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
            <CardTitle className="truncate mb-2">Production Guarantee</CardTitle>
            <CardDescription className="truncate">Lab test resulted in up to 44 hours of protection</CardDescription>
            </div>
            </CardContent>
        </Card>
            </div>
        </div>
        
    )
}