// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import FriendsPage from './pages/FriendsPage.js';
/* import dataFunction from ./data/products.js; */
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
/* import galleryFunction from ./pages/GalleryPage.js; */
/* import orderFunction from ./pages/OrderPage.js; */
/* import contactFunction from ./pages/ContactPage.js; */

import EditFriendPageTable from './pages/EditFriendPageTable';
import AddFriendPageTable from './pages/AddFriendPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [friend, setFriendToEdit] = useState([])

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>
            <img src="favicon-32x32.png" alt="Savannah Wimpey" />
            Savannah Wimpey
          </h1>
          <p>Web Dev Portfolio Project
          </p>

        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/friends" element={<FriendsPage setFriend={setFriendToEdit} />} />
              {/* SHORT data input routes */}
              <Route path="/create" element={<AddFriendPageTable />} />
              <Route path="/update" element={<EditFriendPageTable friendToEdit={friend} />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Savannah Wimpey</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;