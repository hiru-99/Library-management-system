import { Book } from '../types/Book';

interface Props {
  book: Book;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const BookForm = ({ book, onChange, onSubmit }: Props) => (
  <div className="container mt-5">
    <div className="card shadow-sm">
      <div className="card-body">
        <h4 className="card-title mb-4"> {book.id ? 'Edit Book' : 'Add New Book'}</h4>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" name="title" value={book.title} onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <input className="form-control" name="author" value={book.author} onChange={onChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" rows={4} value={book.description} onChange={onChange} />
          </div>
          <button className="btn btn-success">{book.id ? 'Update' : 'Add'} Book</button>
        </form>
      </div>
    </div>
  </div>
);

export default BookForm;
