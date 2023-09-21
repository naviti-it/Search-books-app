import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './scenes/global/Header'
import useSearchBooksForm from './scenes/global/SearchBooksForm';
import BooksList from './scenes/home/BooksList';
import BookDetails from './scenes/ItemDetail/BookDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

const {render, value} = useSearchBooksForm()


  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
          <Header {...{render}}/>
        <Routes>
          <Route path="/" element={<BooksList {...{value}}/>} />
          <Route path="items/:itemId" element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
