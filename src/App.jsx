import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import About from './pages/About'
import SimplePage from './pages/SimplePage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="privacy" element={<SimplePage page="privacy" />} />
        <Route path="terms" element={<SimplePage page="terms" />} />
        <Route path="*" element={<SimplePage page="notFound" />} />
      </Route>
    </Routes>
  )
}
