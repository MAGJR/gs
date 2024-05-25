import Link from "next/link";
import Logo from "./logo";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Header() {
    const t = useTranslations();

    return (
        <header  className="bg-black text-white py-4 px-6 md:px-8 flex items-center justify-between">
        <Link className="flex items-center gap-2 font-bold text-lg" href="#">
          <Logo />
          
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
    )
}