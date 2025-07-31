import '../styles/BookList.css'; 
import { useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../services/BookService';
import { Book } from '../types/Book';
import { Link } from 'react-router-dom';


const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then(res => setBooks(res.data));
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      await deleteBook(id);
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div className="booklist-background">
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Book List</h2>

      {books.length === 0 ? (
        <div className="alert alert-info text-center">No books found. Please add one!</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered shadow-sm">
            <thead className="table-dark text-center">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {books.map(book => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td className="text-center">
                    <Link to={`/edit/${book.id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(book.id!)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>
  );
};

export default BookList;
