import type {ReactNode} from "react";
import { Navbar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";

interface LayoutProps{
  children: ReactNode;
}
export const Layout = ({children} : LayoutProps) =>{
  return (
    <div className="min-h-screen flex flex-col min-w-full">
      <Navbar/>      
      <main className=" flex-1 p-4">
        {children}
      </main>
      <Footer/>
    </div>
  )
}