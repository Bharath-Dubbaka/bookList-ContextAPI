import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Book List</h1>
            <p>Books yet to complete: {books.length}</p>
        </div>
    );
}
 
export default Navbar;
