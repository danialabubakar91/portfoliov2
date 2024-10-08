import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from "./pages/Projects"

const App:React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
