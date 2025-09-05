import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-artistic-starry hover:text-artistic-swirl transition-colors">
        <div className="w-12 md:w-16 rounded-full overflow-hidden border-2 border-artistic-starry/30 hover:border-artistic-swirl/60 mr-2 md:mr-4 transition-colors bg-gradient-to-br from-artistic-starry/20 to-artistic-swirl/20">
            <Image 
              src="/IMG_3029.jpg" 
              alt="Nandini Pahuja" 
              width={64} 
              height={64}
              className="w-full h-full object-cover"
            />
        </div>
        <span className="font-bold text-lg md:text-xl heading-artistic">Nandini</span>
    </Link>
  )
}

export default Logo