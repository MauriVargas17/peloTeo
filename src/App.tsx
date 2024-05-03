import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';
import Header from './components/Header';
import MapComponent from './components/Mapita';
//import Mapita from './components/Mapita';

import { ActivityPage } from './pages/ActivityPage';

function App() {
  return (
    <>
      <Login/>
      <Register />
      <Main/>
      <Header/>
      <MapComponent/>
      <ActivityPage/>
    </>
  )
}

export default App
