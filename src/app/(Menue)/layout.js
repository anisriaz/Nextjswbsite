import Navbar from "./Navbar/page";


export default function MenueLayout({children}) {
  return (
    <div>
     
     <Navbar />
     {children}
     
    </div>
  )
}