import '../styles/TrendingCards.css';
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

const songs = [
  { title: 'Frecuencia', artist: 'Los Dareyes De La Sierra', image: 'https://erickg02.github.io/spotify-img/borracho.jpg' },
  { title: 'Coleccionando Heridas', artist: 'Karol G, Marco Antonio Solís', image: 'https://erickg02.github.io/spotify-img/karol.jpg' },
  { title: 'Little Demon', artist: 'Anuel AA', image: 'https://erickg02.github.io/spotify-img/anuel.jpeg' },
  { title: 'Perdon Mama', artist: 'Chuy Montana, Juanpa Salazar', image: 'https://erickg02.github.io/spotify-img/mama.png' },
  { title: 'YO y TÚ', artist: 'Ovy, Quevedo, Beéle', image: 'https://erickg02.github.io/spotify-img/pantera.jpg' },
  { title: 'Golden', artist: 'HUNTR/X, REI AMI', image: 'https://erickg02.github.io/spotify-img/los%20reyes.webp' },
  { title: 'Vamo a Bailotear', artist: 'Cris MJ', image: 'https://erickg02.github.io/spotify-img/cris.jpg' },
  { title: 'si te pillara', artist: 'Beéle', image: 'https://erickg02.github.io/spotify-img/tini.jpg' },
  { title: 'Mi Peor Momento', artist: 'Arcángel', image: 'https://erickg02.github.io/spotify-img/arcangel.jpg' },
  { title: 'Tú Llegaste', artist: 'Leo Dan', image: 'https://erickg02.github.io/spotify-img/pillara.jpg' },
  { title: 'La culpa', artist: 'Alleh, Yorky', image: 'https://erickg02.github.io/spotify-img/doble.webp' },
];

export default function TrendingCards() {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // control de botones
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

  // botones flechas
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

  // arrastre con mouse
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
    const walk = (x - startX.current) * 2; // velocidad
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  return (
    <section className="trending-container">
      <div className="trending-header">
        <h3>Canciones en tendencia</h3>
        <p>Mostrar todos</p>
      </div>
      <div className="cards-wrapper">
        {canScrollLeft && (
          <button className="scroll-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
        )}
        <div
          className="cards-scroll"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {songs.map((song, index) => (
            <div className="card" key={index}>
              <div className="card-cover">
                <img src={song.image} alt={song.title} />
                <div className="card-play">
                  <FaPlay />
                </div>
              </div>
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button className="scroll-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}

