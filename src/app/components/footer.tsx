import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Home from '../../../public/assets/Home.jpg'

export default function Footer() {
    const t = useTranslations()
    return (
        <footer className="bg-black text-white py-8 px-6 md:px-8">
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
    )
}