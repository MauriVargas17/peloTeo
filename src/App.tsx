import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';
import { ActivityPage } from './pages/ActivityPage';

function App() {
  return (
    <>
      <Login/>
      <Register />
      <Main/>
      <ActivityPage/>
    </>
  )
}

export default App
