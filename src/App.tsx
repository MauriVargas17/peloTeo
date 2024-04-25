import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';
import Header from './components/Header';
import { ActivityPage } from './pages/ActivityPage';

function App() {
  return (
    <>
      <Login/>
      <Register />
      <Main/>
      <Header/>
      <ActivityPage/>
    </>
  )
}

export default App
