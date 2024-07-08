

export type Product = {
    id: number;
    title: string;
    description: string;
    image: any;
    href: string
}


export type ProductsInfo = {
    mainProduct: Product[]
}