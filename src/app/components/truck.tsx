import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { Clock, Earth, Truck } from 'lucide-react'

// TODO: Arrumar esse trem, não está centralizado

export function TruckComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 mt-10">
      <Card className="">
        <CardContent className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Truck width={60} height={60} />
          </div>
          <div className="mt-2 flex flex-col items-center justify-center">
            <CardTitle className="truncate mb-1 text-blue-900 text-sm">Fast Production</CardTitle>
            <CardDescription className="truncate text-xs">
              We produce and dispatch your order within 48 hours
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      <Card className="">
        <CardContent className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Earth width={60} height={60} />
          </div>
          <div className="mt-2 flex flex-col items-center justify-center">
            <CardTitle className="truncate mb-1 text-blue-900 text-sm">
              Delivery to any point on the planet
            </CardTitle>
            <CardDescription className="truncate text-xs">
              Delivery by courier for the entire territory
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      <Card className="">
        <CardContent className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Clock width={60} height={60} />
          </div>
          <div className="mt-2 flex flex-col items-center justify-center">
            <CardTitle className="truncate mb-1 text-blue-900 text-sm">
              Product warranty 
            </CardTitle>
            <CardDescription className="truncate text-xs">
              Lab test resulted in up to 44 hours of protection
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
