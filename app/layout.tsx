
import { AuthContextProvider } from "./firebase/auth/AuthContext";
import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import localFont from '@next/font/local'

const futura = localFont({
  src:'../fonts/FuturaLT-Book.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={futura.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
