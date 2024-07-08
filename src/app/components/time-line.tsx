// components/Timeline.tsx
import { useState } from 'react';

interface Event {
  year: string;
  title: string;
  description: string;
}



const events: Event[] = [
  {
    year: '1982',
    title: 'Foundation',
    description: 'In November 1982 GS was founded. It started from zero and simple, but the dedication was total. The partnership with one of our first clients, the Sadia, now BRF, made us leave the services and start developing products.',
  },

  {
    year: '1996',
    title: 'Created the thermic divider of type curtain',
    description: 'In the transport of frozen and chilled goods, optimization of transport was needed. However, the first dividers were very heavy and impossible to be operated by only one person. The challenge was issued and the solution was developed. Appeared the divider of type curtain.'
  },
  {
    year: '2005',
    title: 'Created the bipartite and movable dividers',
    description: 'To address the needs of our clients who needed a structured product, for long distance travel and logistics, dividers were created. Bipartite and mobile dividers were created to meet the demands of customers who needed a product for long distance travel and logistics.'
  },
  {
    year: '2006',
    title: 'Created the thermic blanket',
    description: 'With the expertise we had in the thermic products we manufactured, we developed the thermic blanket, light and reinforced with compression seams.'
  },
  {
    year: '2014',
    title: 'Created the thermal insulation bag',
    description: 'With the expertise we had in the logistics chain of frozen goods, we developed another solution for the transport of perishable goods in small quantities. The thermal insulation bag is used in vans, trucks or even cars.'
  },
  {
    year: '2015',
    title: 'Created the thermic covers for pallets',
    description: 'Expanding our product line, we created thermic covers for pallets after realizing that there was a need for thermal protection products for paletized goods in short and long-distance transport.'
  },
  {
    year: '2019',
    title: 'Moved to the new headquarters',
    description: 'In 2017, GS started building the new headquarters of the company. It took more than 12 months of planning and exception, and in January 2019, moved to its new headquarters with ample space, new machinery, and new projects in development.'
  },
  {
    year: '2024',
    title: 'Opening in the United States',
    description: 'title'
  }
  // Add more events here...
];

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Nossa história</h1>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
          <div className="flex justify-between items-center relative z-10">
            {events.map((event, index) => (
              <button
                key={index}
                onClick={() => setSelectedEvent(event)}
                className="bg-white border-2 border-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-blue-500 font-bold"
              >
                {event.year}
              </button>
            ))}
          </div>
        </div>
        {selectedEvent && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold">{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}
