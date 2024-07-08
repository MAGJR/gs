import Image from "next/image";


export function Header() {
 return (
    <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg" alt="Logo" className="h-12" />
            <h1 className="text-2xl font-bold text-blue-900">GS</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Sobre Nós
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Produtos
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contato
            </a>
            <a href="#" className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
              Loja Virtual
            </a>
          </nav>
        </header>
 )
}