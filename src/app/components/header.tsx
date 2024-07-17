import Link from 'next/link'
import Logo from './logo'
// import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-separator'

export default function Header() {
  // const t = useTranslations()

  return (
    <>
    <header className="bg-gray-200 text-black py-4 px-6 md:px-8 flex items-center justify-between">
      
      <Link className="flex items-center gap-2 font-bold text-lg" href="/">
        <Logo />
      </Link>
      
      <nav className="hidden md:flex items-center gap-6">
        <Link className=" " href="/product">
          <CardTitle className="text-blue-600 hover:underline  text-sm">
            PRODUCT
          </CardTitle>
        </Link>
        <Link className="" href="/">
          <CardTitle className="text-blue-600 hover:underline  text-sm">
            ABOUT
          </CardTitle>
        </Link>
        <Link className="" href="/">
          <CardTitle className="text-blue-600 hover:underline  text-sm">
            CONTACT
          </CardTitle>
        </Link>
      </nav>
      <Button className="md:hidden" variant="outline"></Button>
    </header>
    </>
  )
}
