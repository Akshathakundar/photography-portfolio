import Header from "@/components/header"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
