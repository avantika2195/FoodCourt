import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="/">ST PIZZA</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href="/home">Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login" className="bg-primary rounded-full text-white px-8 py-2">Login</Link>
        </nav>
      </header>
      <section>
        <h1>"Pizza makes me think that anything is possible."</h1>
        <p>"Pizza is a circle. It has no beginning and no end. And that's how I like my life to be."</p>
      </section>
      <div>
      <Image
        src="/pizza.png"
        
      />
      
    </div>
    </>
  )
}