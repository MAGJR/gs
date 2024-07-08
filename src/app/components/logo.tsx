import Image from "next/image";
import Home from '../../../public/assets/Home.jpg'

export default function Logo() {
    return (
        <Image 
          src={Home} 
          alt="Image Home" 
          width={50}
          height={50}
          className="border-collapse border-2 border-transparent rounded-full"
          />
    )
}