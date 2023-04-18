import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Article from "./pages/Article"
import ArticleList from "./pages/ArticleList"

const App = () => {

  return (
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articleList" element={<ArticleList />} />
        </Routes>
      </div>
    </BrowserRouter>
      )
}

export default App
