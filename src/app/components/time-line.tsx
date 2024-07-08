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
    title: 'Fundação',
    description: 'Em novembro de 1982 a Soluforte foi fundada. O começo foi do zero e simples, mas a dedicação era total. A parceria de uma dos nossos primeiros clientes, a então chamada Sadia, atual BRF, nos fez sair dos serviços e começarmos a desenvolver produtos.',
  },

  {
    year: '1996',
    title: 'Criada a divisória térmica de cortina',
    description: 'No transporte de congelados e resfriados, para otimização do transporte, criou-se a divisão de cargas. No entanto, as primeiras divisórias eram muito pesadas e impossível de ser operada por apenas um funcionário. O desafio estava lançado e a solução foi desenvolvida. Surgiu a divisória tipo cortina.'
  },
  {
    year: '2005',
    title: 'Criadas as divisórias bipartidas e móveis',
    description: 'São criadas as divisórias bipartidas e móveis, para atender os clientes que necessitavam de um produto estruturado, para viagens de longa distância e também para a distribuição logística.'
  },
  {
    year: '2006',
    title: 'Criada a lona térmica',
    description: 'Com o expertise que tínhamos com os produtos térmicos que fabricávamos, desenvolvemos a lona térmica, leve e reforçada com costuras de compressão.'
  },
  {
    year: '2014',
    title: 'Criação do bolsão térmico',
    description: 'Com o “know how” que tínhamos sobre a cadeia logística do frio, desenvolvemos mais uma solução para transporte de mercadorias perecíveis em pequena quantidade, o bolsão térmico, utilizado em vans, furgões ou até mesmo em carros.'
  },
  {
    year: '2015',
    title: 'Criação das coberturas térmicas para pallet',
    description: 'Expandimos nossa linha de produtos para as coberturas térmicas para paletes ao perceber que havia, no mercado, a necessidade de produtos para proteção térmica de cargas paletizadas em viagens de curta e longa duração.'
  },
  {
    year: '2019',
    title: 'Muda para a nova sede',
    description: 'Em 2017, a GS iniciou a construção da nova sede da empresa. Foram mais de 12 meses de planejamento e exceção, e no começo de 2019, muda-se para sua nova sede, com amplo espaço, maquinários novos e novos projetos em desenvolvimento.'
  },
  {
    year: '2024',
    title: 'Abertura nos Estados Unidos',
    description: 'title'
  }
  // Adicione outros eventos aqui...
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
