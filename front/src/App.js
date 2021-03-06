import './css/App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accueil from './pages/Accueil';
import Error from './pages/Error';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { ManageUser } from './providers/storageProvider';
import { useSelector } from 'react-redux';




function App () {
  ManageUser()
  const userConnected = useSelector((state) => state.user.connected)
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Switch>
          <Route exact path="/" component={Accueil} />
          {userConnected 
            ? <Route exact path="/profile" component={Dashboard} /> 
            : <Route exact path="/signin" component={SignIn} />
          }
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
