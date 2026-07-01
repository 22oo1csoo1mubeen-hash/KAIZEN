import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Dashboard from './components/Dashboard/Dashboard';
import Features from './components/Features/Features';
import runnerImage from './assets/Hero/Object.jpg';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard runnerImage={runnerImage} />
      <Features />
    </>
  );
}

export default App;
