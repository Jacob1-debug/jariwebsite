import React, { children } from 'react'
import Head from 'next/head'
import Link from 'next/link';

export default function  Layout({title,children}){
    // const title = "JariAfrica"

  return (
    <>
    <Head>
    <title>{title ? title + 'JariAfrica': 'JariAfrica'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex min-h-screen flex-col justify-between'> 
        <header>
            <nav className='flex h-12 px-4 items-center justify-between shadow-md'>
            <Link href='/' className='text-lg font-bold' >
           JariAfrica
            </Link>
            <div> 
               < Link href="/cart" className='p-2'>Cart</Link>
               < Link href="/login" className='p-2'>LogIn</Link>
            </div>
            </nav>
           
          
        </header>
        <main>
            {children}
        </main>
        <footer className='flex h-12 justify-center items-center shadow-inner'>
           <p>copyright 2023 Jari-Africa </p>
            
        </footer>
    </div>
    
    </>
    
  );
}
