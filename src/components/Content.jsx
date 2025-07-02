import '../styles/Content.css'
import PopularArtists from './PopularArtists';
import TrendingCards from './TrendingCards';
export default function Content(){
       
    return(
    <section className="content-main">
      <TrendingCards />
      <PopularArtists/>
    </section>
    );
}