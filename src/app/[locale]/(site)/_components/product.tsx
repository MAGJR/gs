import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


import Produto from "../../../../public/assets/Producto.jpg"
import Produto1 from "../../../../public/assets/Product1.jpg"
import Product3 from "../../../../public/assets/Product3.jpg"
import { useTranslations } from "next-intl";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Product() {
  const [parent] = useAutoAnimate()
  const t = useTranslations();
  
  const product = [
    {
        id: 1,
        title: t("site.main.product.product01.title"),
        description: t("site.main.product.product01.description"),
        img: Produto,
        price: t("site.main.product.product01.price")
    },
    {
        id: 2,
        title: t("site.main.product.product02.title"),
        description: t("site.main.product.product02.description"),
        img: Produto1,
        price: t("site.main.product.product02.price")
    },
    {
        id: 3,
        title: t("site.main.product.product03.title"),
        description: t("site.main.product.product03.description"),
        img: Product3,
        price: t("site.main.product.product03.price"),
        
    }
]  
  
  return (
        <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
             

          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("site.main.title")}</h2>
          <div ref={parent} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {product.map((products) => (
            <Card  key={products.id}>
              <div className="flex items-center justify-center">
                <Image
                alt="Products"
                className="rounded-t-lg "
                height={200}
                src={products.img}
                style={{
                  aspectRatio: "250/200",
                  objectFit: "cover",
                }}
                
                width={300}
              />
              </div>
              <CardContent className="pt-4 grid items-center justify-center">
                <h3 className="text-lg font-bold mb-2">{products.title}</h3>
                <small className="text-gray-600 mb-4">{products.description}</small>
                <div className="flex items-center justify-between">
                
        
          <div className="flex items-center gap-0.5">
            {product.map(start => (
              <StarIcon key={start.id} className="w-5 h-5 fill-primary" />
            ))}
            
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
                  <Button className="justify-end" size="sm">{t("site.button.title")}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>
    )
}