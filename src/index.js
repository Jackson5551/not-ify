import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import Playlist from './components/Playlist';
import Playlists from './components/Playlists';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        {/* <Route path='expenses' element={<Expenses />}></Route>
        <Route path='invoices' element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route> */}
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='home' element={<Home></Home>}>
          <Route path='playlists' element={<Playlists></Playlists>}>
            <Route
              index
              element={
                <main><p>Select a Playlist</p></main>
              }
            ></Route>
            <Route path=':playlistId' element={<Playlist></Playlist>}></Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
