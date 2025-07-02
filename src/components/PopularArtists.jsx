import '../styles/PopularArtists.css';
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const artists = [
  { artist: 'Bad Bunny', image: 'https://erickg02.github.io/spotify-img/foto-badbony.jpeg' },
  { artist: 'Karol G', image: 'https://erickg02.github.io/spotify-img/foto-karol.jpeg' },
  { artist: 'Anuel AA', image: 'https://erickg02.github.io/spotify-img/foto-anuel.jpeg' },
  { artist: 'Daddy Yankee', image: 'https://erickg02.github.io/spotify-img/foto-daddy.jpeg' },
  { artist: 'Duki', image: 'https://erickg02.github.io/spotify-img/foto-duki.jpeg' },
  { artist: 'Romeo Santos', image: 'https://erickg02.github.io/spotify-img/foto-romeo.jpeg' },
  { artist: 'Rauw Alejandro', image: 'https://erickg02.github.io/spotify-img/foto-rauw.jpeg' },
  { artist: 'Shakira', image: 'https://erickg02.github.io/spotify-img/foto-shakira.jpeg' },
  { artist: 'Arcángel', image: 'https://erickg02.github.io/spotify-img/arcangel.jpg' },
  { artist: 'Farruko', image: 'https://erickg02.github.io/spotify-img/foto-farruko.jpeg' },
  { artist: 'Dua Lipa', image: 'https://erickg02.github.io/spotify-img/foto-dua.jpeg' },
];

export default function PopularArtists() {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkButtons();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkButtons);
      window.addEventListener("resize", checkButtons);
      return () => {
        el.removeEventListener("scroll", checkButtons);
        window.removeEventListener("resize", checkButtons);
      };
    }
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section className="artists-container">
      <div className="artists-header">
        <h3>Artistas populares</h3>
        <p>Mostrar todos</p>
      </div>
      <div className="artist-cards-wrapper">
        {canScrollLeft && (
          <button className="artist-scroll-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
        )}
        <div
          className="artist-cards-scroll"
          ref={scrollRef}
       
        >
          {artists.map((artist, index) => (
            <div className="artist-card" key={index}>
              <div className="artist-card-cover">
                <img src={artist.image} alt={artist.artist} />
                <div className="artist-card-play">
                  <FaPlay />
                </div>
              </div>
              <p>{artist.artist}</p>
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button className="artist-scroll-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}
