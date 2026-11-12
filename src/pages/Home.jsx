import Loader from '../sections/home/HomeTop4';
import Hero from '../sections/home/HomeMain1Top';
import StudioSection from '../sections/home/HomeMain2Studio';
import Projects from '../sections/home/HomeMain3Projects';
import ArtLabSection from '../sections/home/HomeMain4ArtLab';
import HomeMain5 from '../sections/home/HomeMain5';
import HomeMain6 from '../sections/home/HomeMain6';
import Footer from '../sections/home/HomeTop6';
export default function Home() {
  return (<>
    <Loader />
    <main id="main">
      <Hero /><StudioSection /><Projects /><ArtLabSection /><HomeMain5 /><HomeMain6 />
    </main>
    <Footer />
  </>);
}
