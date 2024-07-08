import { CardInfos } from '@/types/card';
import { Product } from './_components/product';
import { productConfig } from '@/config/products';



export default function Page() {
 return (
    <div>
        <Product items={productConfig} />
    </div>
 )
}