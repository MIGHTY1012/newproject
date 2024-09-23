
import  './_styles/globals.css'
import Navbar from "./_components/Navbar";
import Footer from './_components/Footer';
export const metadata = {
  title: "Real-estate project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Navbar />
       
       {children}
      </body>
    </html>
  );
}
