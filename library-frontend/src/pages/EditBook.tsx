import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBook, updateBook } from '../services/BookService';
import { Book } from '../types/Book';

const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book>({ title: '', author: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getBook(+id).then(res => setBook(res.data));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateBook(+id!, book);
    navigate('/');
  };

  return <BookForm book={book} onChange={handleChange} onSubmit={handleSubmit} />;
};

export default EditBook;
