"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Home from '../../../../public/assets/Home.jpg'
import Image from "next/image"
import Produto from "../../../../public/assets/Producto.jpg"
import Produto1 from "../../../../public/assets/Product1.jpg"
import Product3 from "../../../../public/assets/Product3.jpg"
import Sol from "../../../../public/assets/sol.jpg"
import {useTranslations} from 'next-intl';




export default function Page() {
  

  const t = useTranslations()


    const product = [
        {
            id: 1,
            title: 'Product x',
            img: Produto
        },
        {
            id: 2,
            title: 'Product y',
            img: Produto1
        },
        {
            id: 3,
            title: 'Product z',
            img: Product3
        }
    ]
    
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <Link className="flex items-center gap-2 font-bold text-lg" href="#">
          <Image 
          src={Home} 
          alt="Image Home" 
          width={50}
          height={50}
          className="border-collapse border-2 border-transparent rounded-full"
          />
          
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline" href="#">
            {t("site.header.product")}
          </Link>
          <Link className="hover:underline" href="#">
          {t("site.header.about")}
          </Link>
          <Link className="hover:underline" href="#">
          {t("site.header.contact")}
          </Link>
        </nav>
        <Button className="md:hidden" variant="outline">
          
        </Button>
      </header>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">{t("site.title")}</h1>
              <p className="text-gray-600 md:text-lg">
                {t("site.description")}
              </p>
              <div className="flex gap-4 items-center ">
                <Button>{t("site.button.title")}</Button>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  {t("site.link")}
                </Link>
              </div>
            </div>
            <Image
              alt="Uma Products"
              className="rounded-lg"
              height={400}
              src={Sol}
              style={{
                aspectRatio: "900/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-8">
            
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("site.main.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {product.map((products) => (
            <Card key={products.id}>
                <Image
                alt="Product 1"
                className="rounded-t-lg"
                height={200}
                src={products.img}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{products.title}</h3>
                <p className="text-gray-600 mb-4">{t("site.main.product.product01.title")}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">R$ 99,99</span>
                  <Button size="sm">{t("site.button.title")}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("site.main.product.testimonials.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-bold">{t("site.main.product.testimonials.card.name")}</h4>
                    <p className="text-gray-600">{t("site.main.product.testimonials.card.satisfy")}</p>
                  </div>
                </div>
                <p className="text-gray-600">
                {t("site.main.product.testimonials.card.description")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-bold">{t("site.main.product.testimonials.card2.name")}</h4>
                    <p className="text-gray-600">{t("site.main.product.testimonials.card2.satisfy")}</p>
                  </div>
                </div>
                <p className="text-gray-600">{t("site.main.product.testimonials.card2.description")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-bold">{t("site.main.product.testimonials.card3.name")}</h4>
                    <p className="text-gray-600">{t("site.main.product.testimonials.card3.satisfy")}</p>
                  </div>
                </div>
                <p className="text-gray-600">{t("site.main.product.testimonials.card3.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8 px-6 md:px-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Image 
              src={Home}    
              width={50}
              height={50}
              className="border-collapse border-2 border-transparent rounded-full"
              alt="Footer"
              />
              
            </div>
            <nav className="flex items-center gap-6 mt-4 md:mt-0">
              <Link className="hover:underline" href="#">
               {t("site.main.product.footer.product")}
              </Link>
              <Link className="hover:underline" href="#">
              {t("site.main.product.footer.about")}
              </Link>
              <Link className="hover:underline" href="#">
              {t("site.main.product.footer.contact")}
              </Link>
            </nav>
          </div>
          <p className="text-center mt-8 text-sm text-gray-400">{t("site.main.product.footer.title")}</p>
        </div>
      </footer>
    </>
  )
}

