"use client"

import './globals.css';
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { GlobalProvider } from "./GlobelProvider/page"; 


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.classList.add(inter.className);
    return () => {
      document.body.classList.remove(inter.className);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <GlobalProvider>
       
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}







// import './globals.css'
// import { Inter } from 'next/font/google'
// import GlobalProvider from "./GlobelProvider/page"

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}> 
//       <GlobalProvider></GlobalProvider>
//        {children}
       
//        </body>
//     </html>
//   )
// }
