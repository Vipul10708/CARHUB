import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants'


const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className='flex max-md:flex-col flex-wrap gap-5 justify-between sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.svg" alt='logo' width={118}
            height={18}
            className='object-contain' />
          <p className='text-base text-gray-700'>Car Hub 2025<br />All Rights reserved &copy; </p>
        </div>
        <div className='flex-1 w-full flex md:justify- flex-wrap max-md:mt-10 gap-6 ;'>
          {footerLinks.map((link) => (
            <div key={link.title}
              className='flex flex-col gap-6 px-6 text-base min-w-[170px];'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500 '
                >
                  {item.title}
                </Link>
              ))}
            </div>

          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10;'>
        <p>@2025 CARHUB ALL RIGHTS RESERVED</p>
        <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-6'>
          <Link href='/' className='text-gray-500'>Privacy Policy</Link>
          <Link href='/' className='text-gray-500'>Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}


export default Footer