import { Header } from './components/Header'
import { HeroBanner } from './components/HeroBanner'
import { IntroSection } from './components/IntroSection'
import { ProductSection } from './components/ProductSection'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-white text-slate-900 antialiased">
      <Header />
      <main>
        <HeroBanner />
        <IntroSection />
        <ProductSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
