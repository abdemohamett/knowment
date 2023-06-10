import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/LOGO.png'
import PeopleGrid from '@/components/people-grid'

export default function Home() {
  return (
  <main>
    <section className="items-center flex flex-col justify-center pt-24">
      <Link href={'/'} className="flex flex-row -space-x-2 items-center mb-2">
      <Image 
       src={Logo} 
       alt="" 
       width={60} 
       height={60}
        />
        <h1 className='text-2xl font-semibold'>Know<span className='text-sky-600'>Ment</span></h1>
      </Link>
        
      <PeopleGrid/>
    </section>
  </main>
  )
}
