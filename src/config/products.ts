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
            title: 'Capa térmica',
            description: 'Também conhecida como manta térmica para pallet, foi desenvolvida para proteger mercadorias...',
            image: capaTermica,
            href: '/en/product/product1'
        } ,
        {
            id: 2,
            title: 'LONA TÉRMICA',
            description: 'A Lona Térmica Soluforte é um material de isolação multicamada desenvolvido com um sistema...',
            image: imageCapaTermica,
            href: '/en/product/product2'

        },
        {
            id: 3,
            title: 'BOLSÃO TÉRMICO',
            description: 'Veículos sem equipamento de refrigeração não conseguem manter a temperatura de mercadorias...',
            image: isolamentoTermico,
            href: '/en/product/product3'

        },
        {
            id: 4,
            title: 'DIVISÓRIA CARGA SECA BIPARTIDA',
            description: 'No transporte de cargas, a divisória visa otimizar a logística de sua frota, separando diferentes...',
            image: divisoriaCargaSeca,
            href: '/en/product/product4'

        },
        {
            id: 5,
            title: 'DIVISÓRIA TÉRMICA BIPARTIDA',
            description: 'Estruturada e leve, a divisória térmica bipartida Soluforte é fabricada sob medida, com placas...',
            image: divisorBipartida,
            href: '/en/product/product5'

        },
        {
            id: 6,
            title: 'DIVISÓRIA TÉRMICA CORTINA',
            description: 'Utilizada principalmente por distribuidoras, que fazem o transporte por pouco tempo, geralmente...',
            image: divisoriaCortina,
            href: '/en/product/product6'

        },
        {
            id: 7,
            title: 'DIVISÓRIA TÉRMICA MÓVEL',
            description: 'Estruturada de alumínio, é utilizada principalmente em baús frigoríficos, e é instalada em um...',
            image: divisãoTermica,
            href: '/en/product/product7'

        },
        {
            id: 8,
            title: 'DIVISÓRIA TÉRMICA GANCHEIRA',
            description: 'Para o uso em carretas gancheiras, com uma parte basculante para ser armazenada junto ao...',
            image: divisoriaGancheira,
            href: '/en/product/product8'

        },
        {
            id: 9,
            title: 'DIVISÓRIA TÉRMICA PRATELEIRA',
            description: 'Utilizada principalmente por distribuidoras de alimentos refrigerados, com muitas paradas para...',
            image: divisoriaPrateleira,
            href: '/en/product/product9'

        }
        
    ]
}



