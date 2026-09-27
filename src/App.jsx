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
        <Route path="privacy" element={<SimplePage eyebrow="Legal" title="Privacy Policy" text="Our privacy policy will be published here." />} />
        <Route path="terms" element={<SimplePage eyebrow="Legal" title="Terms of Service" text="Our terms of service will be published here." />} />
        <Route path="*" element={<SimplePage eyebrow="404" title="Page not found" text="The page you are looking for does not exist or has moved." />} />
      </Route>
    </Routes>
  )
}
