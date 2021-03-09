import React, {useState, useContext} from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Book Title' value={title}
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder='Book Author' value={author}
                onChange={(e) => setAuthor(e.target.value)} required />
            <input type='submit' value='Add New Book'/>
        </form>
     );
}
 
export default NewBookForm;


