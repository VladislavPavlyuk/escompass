import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Search from './pages/Search';
import SkillDetail from './pages/SkillDetail';
import OccupationDetail from './pages/OccupationDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout><Landing /></Layout>} />
          <Route path="/explore" element={<Layout><Explore /></Layout>} />
          <Route path="/search" element={<Layout><Search /></Layout>} />
          <Route path="/skill/:id" element={<Layout><SkillDetail /></Layout>} />
          <Route path="/occupation/:id" element={<Layout><OccupationDetail /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;