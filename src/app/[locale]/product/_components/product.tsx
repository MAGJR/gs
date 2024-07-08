import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductsInfo } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  items: ProductsInfo
}

export function Product({ items }: ProductPageProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-12 p-7">
        {items.mainProduct.map((item) => (
          <Card key={item.id} className="flex flex-col h-full">
            <CardHeader className="flex items-center justify-center h-48">
              <div className="relative w-48 h-48">
                <Image src={item.image} alt={item.title} layout="fill" objectFit="contain" />
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="flex-1">{item.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href={item.href}>
                <Button>saiba mais</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
