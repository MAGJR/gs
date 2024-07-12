import { ProductsInfo } from "@/types/product";

import imageCapaTermica from '../../public/assets/Lona-Termica_capa5.png'
import capaTermica from '../../public/assets/CapaTermica.png'
import isolamentoTermico from '../../public/assets/Isolamento-Termico-para-Veiculos_capa1.png'
import divisoriaCargaSeca from '../../public/assets/Divisoria-Carga-Seca-Bipartida_capa1.png'
import divisorBipartida from '../../public/assets/divisor.png'
import divisoriaCortina from '../../public/assets/Divisoria-Termica-Cortina_capa.png'
import divisãoTermica from '../../public/assets/DivisãoTermica.png'
import divisoriaGancheira from '../../public/assets/Divisoria-Termica-Gancheira_capa.jpg'
import divisoriaPrateleira from '../../public/assets/Divisoria-Termica-Prateleira_capa.jpg'


export const productConfig: ProductsInfo = {
    mainProduct : [
        {
            id: 1,
            title: 'Thermal Cover',
            description: 'Also known as thermal blanket for pallets, it was developed to protect merchandise during transportation...',
            image: capaTermica,
            href: '/en/product/product1'
        } ,
        {
            id: 2,
            title: 'Thermal Blanket',
            description: 'The Thermal Blanket  is a multi-layered insulation material developed with a system...',
            image: imageCapaTermica,
            href: '/en/product/product2'

        },
        {
            id: 3,
            title: 'Thermal Cargo',
            description: 'Vehicles without refrigeration equipment cannot maintain the temperature of merchandise...',
            image: isolamentoTermico,
            href: '/en/product/product3'

        },
        {
            id: 4,
            title: 'Bipartite Dry Cargo Division',
            description: 'In cargo transportation, the division aims to optimize the logistics of your fleet, separating different...',
            image: divisoriaCargaSeca,
            href: '/en/product/product4'

        },
        {
            id: 5,
            title: 'Bipartite Thermal Division',
            description: 'Light and structured, the bipartite thermal division GS is made to order, with plates...',
            image: divisorBipartida,
            href: '/en/product/product5'

        },
        {
            id: 6,
            title: 'Thermal Curtain Division',
            description: 'Used mainly by distributors, who make transportation for short periods of time, usually...',
            image: divisoriaCortina,
            href: '/en/product/product6'

        },
        {
            id: 7,
            title: 'Mobile Thermal Division',
            description: 'Aluminum structured, it is mainly used in refrigerated containers, and is installed on a...',
            image: divisãoTermica,
            href: '/en/product/product7'

        },
        {
            id: 8,
            title: 'Thermal Gantry Division',
            description: 'For use in gantry trucks, with a hinged part to be stored next to the...',
            image: divisoriaGancheira,
            href: '/en/product/product8'

        },
        {
            id: 9,
            title: 'Thermal Plate Division',
            description: 'Used mainly by refrigerated food distributors, with many stops for...',
            image: divisoriaPrateleira,
            href: '/en/product/product9'

        }
        
    ]
}



