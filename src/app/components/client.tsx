'use client'

import Image, { StaticImageData } from "next/image"
import eldorado from '../../../public/assets/logo-eldorado.png'
import melissa from '../../../public/assets/melissa-logo.png'
import martinBrower from '../../../public/assets/martin-brower-logo-vector.png'
import yesBrazil from '../../../public/assets/yesbr.png'
import delrey from '../../../public/assets/delrey.png'
import parqueShopping from '../../../public/assets/parqueshopping.png'
import melville from '../../../public/assets/melville.png'

type ImagePropsCustomer = {
    id: number,
    img: StaticImageData
    alt: string
}

export function Customer() {
    const imageCustomer: ImagePropsCustomer[] = [
        { id: 1, img: eldorado, alt: 'Logo Eldorado' },
        { id: 2, img: melissa, alt: 'Logo Melissa' },
        { id: 3, img: martinBrower, alt: 'Logo Martin Brower' },
        { id: 4, img: yesBrazil, alt: 'Logo Yes Brazil' },
        { id: 5, img: delrey, alt: 'Logo Delrey' },
        { id: 6, img: parqueShopping, alt: 'Logo Parque Shopping' },
        { id: 7, img: melville, alt: 'Logo Melville' },
    ];

    return (
        <div className="overflow-hidden w-full">
            <div className="flex items-center justify-center mb-4">
                <h1 className="text-3xl font-bold">Customer</h1>
            </div>
            <div className="relative flex w-full animate-loop-scroll">
                <div className="flex space-x-12 w-max animate-marquee">
                    {[...imageCustomer, ...imageCustomer].map((image, index) => (
                        <Image
                            key={`${image.id}-${index}`}
                            src={image.img}
                            width={100}
                            alt={image.alt}
                            className="max-w-none"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
