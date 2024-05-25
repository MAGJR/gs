import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from "next-intl"


export default function Testimonials() {
    const t = useTranslations()
    return (
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
    )
}