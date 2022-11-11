import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Login from './routes/Login';
import Home from './routes/Home'
import AuthContext from './context/AuthContext';

function App() {
  // const [isAuth, setIsAuth] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['react-app']);
  const [token, setToken] = useState(cookies['react-app'])

  const updateToken = () => {
    setToken(cookies['react-app'])
  }

  const contextObject = { token, setToken }

  let code
  let tokenToSet
  if (window.location.hash) {
    code = window.location.hash
    tokenToSet = code.substring(1).split("&")[0].split("=")[1];
  }
  // const code = window.location.hash
  console.log(code)
  // const token = code.substring(1).split("&")[0].split("=")[1];
  // console.log(token)
  return (
    <>
      {/* <h1>Bookkeeper</h1>
    <Link to="/invoices">Invoices</Link> |{" "}
    <Link to="/expenses">Expenses</Link>
    <Outlet></Outlet> */}
      <AuthContext.Provider value={contextObject}>
        {
          code && setCookie('react-app', tokenToSet, { path: '/' })
        }
        <h1>{cookies['react-app']}</h1>
        {cookies['react-app'] ? <Link to='/home'>Continue</Link> : <Login cookies={cookies['react-app']}></Login>}
        {/* <Login setIsAuth={setIsAuth} /> */}
      </AuthContext.Provider>
      <Outlet></Outlet>
    </>
  );
}

export default App;
