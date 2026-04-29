import { useState } from 'react';
import { Page } from './types';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Enjeux from './pages/Enjeux';
import Campus from './pages/Campus';
import Logements from './pages/Logements';
import Environnement from './pages/Environnement';
import Financier from './pages/Financier';
import Logistique from './pages/Logistique';
import Concurrence from './pages/Concurrence';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'enjeux':
        return <Enjeux />;
      case 'campus':
        return <Campus />;
      case 'logements':
        return <Logements />;
      case 'environnement':
        return <Environnement />;
      case 'financier':
        return <Financier />;
      case 'logistique':
        return <Logistique />;
      case 'concurrence':
        return <Concurrence />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#080E05' }}>
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main style={{ flex: 1, marginTop: '64px' }}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
