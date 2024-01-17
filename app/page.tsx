import Description from "@/components/Description"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Nav from "@/components/nav/Nav"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Nav />
      <Hero />
      <Description />
      <Footer />
    </main>
  )
}
