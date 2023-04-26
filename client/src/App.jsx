import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Article from "./pages/Article"
import ArticleList from "./pages/ArticlesList"
import Navbar from "./components/Navbar"
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <BrowserRouter>
       <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-list" element={<ArticleList />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
      )
}

export default App
