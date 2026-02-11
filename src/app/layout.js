import "./index.css";
import Header from "./components/Header"; 
import Footer from "./components/Footer";


export const metadata = {
  title: "Ariba Basharat | Web Developer",
  description: "Portfolio of Ariba Basharat - Expert Frontend & WordPress Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body>
        {children}
      </body>
      <Footer />
    </html>
  );
}
