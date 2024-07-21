import { MissionType } from "@/types/mission"

type MissionProps = {
    items: MissionType
}


export function Mission ({items}: MissionProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-stretch bg-gray-100 p-4 sm:p-8 rounded-xl shadow-lg space-y-4 sm:space-y-0">
          {items.mainMission.map((item) => (
            <div className="w-full sm:w-1/3 p-4" key={item.id}>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-900">{item.title}</h2>
              <p className="mt-4 text-gray-700 text-center sm:text-left">
               {item.description}
              </p>
            </div>
          </div>
          ))}
          
          {/* <div className="w-full sm:w-1/3 p-4 border-t sm:border-t-0 sm:border-l sm:border-r">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-900">Vision</h2>
              <p className="mt-4 text-gray-700">
                To be the reference company in the industry, recognized as the
                best option by customers, employees, suppliers, and society as a
                whole.
              </p>
            </div>
          </div>
          <div className="w-1/3 p-4">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-900">Values</h2>
              <p className="mt-4 text-gray-700">
                Integrity, commitment, human valuation, achievement of results,
                continuous improvement of processes, innovation, respect for the
                environment.
              </p>
            </div>
          </div> */}
        </div>
    )
}

