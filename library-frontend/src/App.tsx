// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="/edit/:id" element={<EditBook />} />
    </Routes>
  </Router>
);

export default App;
