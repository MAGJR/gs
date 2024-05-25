"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

import Image from "next/image"
import Produto from "../../../../public/assets/Producto.jpg"
import Produto1 from "../../../../public/assets/Product1.jpg"
import Product3 from "../../../../public/assets/Product3.jpg"
import Sol from "../../../../public/assets/sol.jpg"
import {useTranslations} from 'next-intl';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { StarIcon } from "lucide-react"
import Logo from "./_components/logo"
import Home from '../../../../public/assets/Home.jpg'
import Header from "./_components/header"
import Footer from "./_components/footer"
import Product from "./_components/product"


export default function Page() {
  
  
  const t = useTranslations()
   
    
  return (
    <>
      <Header />
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
      <Product />
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
      <Footer />
    </>
  )
}


