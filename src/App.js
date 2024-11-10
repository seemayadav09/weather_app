import Nav from "./components/Nav"
import Hero from "./components/Hero"

export default function App() {
  return <>
    <section>
      <Nav/>
    </section>
    <section className='m-32'>
      <Hero />
    </section>
    </>
}