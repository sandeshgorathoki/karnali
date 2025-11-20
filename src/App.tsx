import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const Layout = lazy(() => import('./components/layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const DivisionsHomes = lazy(() => import('./pages/DivisionsHomes'));
const DivisionsInfrastructure = lazy(() => import('./pages/DivisionsInfrastructure'));
import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen grid place-items-center text-primary">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="divisions/homes" element={<DivisionsHomes />} />
            <Route path="divisions/infrastructure" element={<DivisionsInfrastructure />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
