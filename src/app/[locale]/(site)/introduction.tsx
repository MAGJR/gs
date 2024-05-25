import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Sol from "../../../../../public/assets/sol.jpg"

export default function Introduction () {
    const t = useTranslations();

    return (
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
    )
}