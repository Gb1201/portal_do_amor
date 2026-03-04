import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import { Heart, Play, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Importando vídeo
import videoJornada from './videos/myVideo.mp4';

// Importando imagens das coleções
import img1_1 from './images/colecao1_1.jpg';
import img1_2 from './images/colecao1_2.jpg';
import img1_3 from './images/colecao1_3.jpg';
import img1_4 from './images/colecao1_4.jpg';

import img2_1 from './images/colecao2_1.jpg';
import img2_2 from './images/colecao2_2.jpg';
import img2_3 from './images/colecao2_3.jpg';
import img2_4 from './images/colecao2_4.jpg';

import img3_1 from './images/colecao3_1.jpg';
import img3_2 from './images/colecao3_2.jpg';
import img3_3 from './images/colecao3_3.jpg';
import img3_4 from './images/colecao3_4.jpg';

import img4_1 from './images/colecao4_1.jpg';
import img4_2 from './images/colecao4_2.jpg';
import img4_3 from './images/colecao4_3.jpg';
import img4_4 from './images/colecao4_4.jpg';

function App() {
  const nome = "Amor";
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // URL do seu vídeo vertical (agora usando o arquivo local)
  const videoUrl = videoJornada;

  // Fotos para cada coleção (usando arquivos locais)
  const fotosColecoes = {
    1: [img1_1, img1_2, img1_3, img1_4],
    2: [img2_1, img2_2, img2_3, img2_4],
    3: [img3_1, img3_2, img3_3, img3_4],
    4: [img4_1, img4_2, img4_3, img4_4]
  };

  const handleNextPhoto = () => {
    const fotos = fotosColecoes[selectedCollection];
    setCurrentPhotoIndex((prev) => (prev + 1) % fotos.length);
  };

  const handlePrevPhoto = () => {
    const fotos = fotosColecoes[selectedCollection];
    setCurrentPhotoIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  const colecao = [
    {
      id: 1,
      titulo: "Nossas Primeiras Fotos",
      descricao: "Sentimento inexplicável onde tudo começou",
      cor: "linear-gradient(135deg, #ff1744 0%, #f50057 100%)",
      duracao: "Sentimento único"
    },
    {
      id: 2,
      titulo: "Família Abençoada",
      descricao: "Uma nova família que sempre vai estar no meu coração",
      cor: "linear-gradient(135deg, #ff6e40 0%, #ff5722 100%)",
      duracao: "Sempre"
    },
    {
      id: 3,
      titulo: "Momentos Juntos",
      descricao: "Nossos momentos juntos cheio de brincadeiras, alegria, tristeza e conversas rs",
      cor: "linear-gradient(135deg, #d81b60 0%, #880e4f 100%)",
      duracao: "Inesquecível"
    },
    {
      id: 4,
      titulo: "Nossas Comidas",
      descricao: "Comidas que sempre nos vai lembrar momentos juntos",
      cor: "linear-gradient(135deg, #c41c3b 0%, #7d1935 100%)",
      duracao: "Sensação"
    }
  ];

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar-custom">
        <div className="navbar-content">
          <div className={`navbar-logo ${isLoaded ? 'loaded' : ''}`}>
            <Heart className="heart-icon" />
            <span className="logo-text">AMOR</span>
          </div>
          <div className="navbar-subtitle">A história da nossa vida</div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className={`hero-content ${isLoaded ? 'animated-in' : ''}`}>
          <div className="hero-greeting">
            <span className="greeting-label">Koleee</span>
            <h1 className="hero-title">
              Bem-vinda, <span className="name-highlight">{nome}</span>
            </h1>
            <p className="hero-subtitle">
              Criei nosso portal oficial do amor, para que possamos sempre armazenar nossos momentos juntos!!! Com a ajuda do IA, óbvio, não é da minha área kkkk
            </p>
          </div>

          <button className="btn-play" onClick={() => setShowVideo(true)}>
            <Play className="play-icon" />
            <span>Assistir Nossa Jornada</span>
          </button>
        </div>

        {/* Background gradient animado */}
        <div className="hero-gradient"></div>
      </section>

      {/* NOSSOS MOMENTOS - COLEÇÃO */}
      <section className="colecao-section">
        <div className="colecao-header">
          <h2 className="colecao-title">Nossas Coleções</h2>
          <p className="colecao-subtitle">
            Fotos Especiais em Carrosel
          </p>
        </div>

        <div className="cards-grid">
          {colecao.map((item, index) => (
            <div
              key={item.id}
              className="card-movie"
              style={{ 
                '--animation-delay': `${index * 100}ms`,
                '--card-gradient': item.cor
              }}
            >
              <div className="card-background" style={{ background: item.cor }}></div>
              
              <div className="card-overlay">
                <div className="card-content">
                  <h3 className="card-titulo">{item.titulo}</h3>
                  <p className="card-descricao">{item.descricao}</p>
                </div>

                <div className="card-footer">
                  <div className="card-meta">
                    <Clock size={16} />
                    <span>{item.duracao}</span>
                  </div>
                  <button 
                    className="card-btn-play"
                    onClick={() => {
                      setSelectedCollection(item.id);
                      setCurrentPhotoIndex(0);
                    }}
                  >
                    <Play size={20} fill="white" />
                  </button>
                </div>
              </div>

              {/* Efeito hover */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO DE RAZÕES ESPECIAIS */}
      <section className="razoes-section">
        <div className="razoes-container">
          <h2 className="razoes-title">Por que você é especial???</h2>
          <div className="razoes-grid">
            <div className="razao-card">
              <div className="razao-number">01</div>
              <p>Porque você é amor da minha vida </p>
            </div>
            <div className="razao-card">
              <div className="razao-number">02</div>
              <p>Porque você é uma mulher de Deus</p>
            </div>
            <div className="razao-card">
              <div className="razao-number">03</div>
              <p>Porque você me incentiva a ser um homem melhor</p>
            </div>
            <div className="razao-card">
              <div className="razao-number">04</div>
              <p>Cada momento com você é inesquecível</p>
            </div>
            <div className="razao-card">
              <div className="razao-number">05</div>
              <p>Simplesmente porque é muito gata</p>
            </div>
            <div className="razao-card">
              <div className="razao-number">06</div>
              <p>Conversa muito bem rs, e beijos viciantes ;)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-custom">
        <p className="footer-text">
          <Heart size={16} className="footer-heart" />
          Com todo meu amor, futuro marido e pai dos seus filhos.
        </p>
      </footer>

      {/* MODAL DE VÍDEO */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-close-btn"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            
            <div className="video-container">
              <video 
                autoPlay 
                controls 
                className="video-player"
              >
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta vídeo.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CARROSSEL DE FOTOS */}
      {selectedCollection && (
        <div 
          className="carousel-modal" 
          onClick={() => setSelectedCollection(null)}
        >
          <div 
            className="carousel-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="carousel-close-btn"
              onClick={() => setSelectedCollection(null)}
            >
              <X size={24} />
            </button>

            <div className="carousel-container">
              <div className="carousel-image-wrapper">
                <img 
                  src={fotosColecoes[selectedCollection][currentPhotoIndex]}
                  alt={`Foto ${currentPhotoIndex + 1}`}
                  className="carousel-image"
                />
              </div>

              <button 
                className="carousel-nav-btn carousel-prev"
                onClick={handlePrevPhoto}
              >
                <ChevronLeft size={32} />
              </button>

              <button 
                className="carousel-nav-btn carousel-next"
                onClick={handleNextPhoto}
              >
                <ChevronRight size={32} />
              </button>

              <div className="carousel-indicators">
                {fotosColecoes[selectedCollection].map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-dot ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                  ></div>
                ))}
              </div>

              <div className="carousel-counter">
                {currentPhotoIndex + 1} / {fotosColecoes[selectedCollection].length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;