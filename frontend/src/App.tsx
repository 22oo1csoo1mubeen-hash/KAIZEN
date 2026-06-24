import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Dashboard } from './sections/Dashboard';
import { DashboardPreview } from './sections/DashboardPreview';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Dashboard />
        <DashboardPreview />
      </main>

      <Footer />
    </div>
  );
}

export default App;
