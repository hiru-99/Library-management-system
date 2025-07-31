import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { createBook } from '../services/BookService';
import { Book } from '../types/Book';

const AddBook = () => {
  const [book, setBook] = useState<Book>({ title: '', author: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBook(book);
    navigate('/');
  };

  return <BookForm book={book} onChange={handleChange} onSubmit={handleSubmit} />;
};

export default AddBook;
