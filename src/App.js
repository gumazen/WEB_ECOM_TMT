import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import GoldSaving from './components/page/GoldSaving';
import Login from './components/page/Login';
import ThxResult from "./components/page/ThxResult"
import GoldSavingHis from "./components/form/GoldSavingHis"
import GoldSavingHisApproved from "./components/form/GoldSavingHisApproved"
import FinishGoldSaving from './components/page/FinishGoldSaving';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/ReactToastify.min.css';
import AppNavbar from './components/page/AppNavbar';
import { useAuthContext } from './context/auth';
import { getAuthData } from './services/auth';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  window.document.title = process.env.REACT_APP_APP_NAME;

  const context = useRef(useAuthContext());

  useEffect(() => {
    // check recent auth data
    const recentAuth = getAuthData();
    if (recentAuth && recentAuth.token && recentAuth.custid) {
      context.current.setAuth(recentAuth);
    }
  }, [context]);

  return (
    <div className='App'>
      <Router>
      <AppNavbar />

        <Container>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='GoldSaving' element={<GoldSaving />} />
            <Route path='FinishGoldSaving' element={<FinishGoldSaving />} />
            <Route path='ThxResult' element={<ThxResult />} />
            <Route path='GoldSavingHis' element={<GoldSavingHis />} />
            <Route path='GoldSavingHisApproved' element={<GoldSavingHisApproved />} />
            <Route path='/' element={<Navigate to='/GoldSaving' />} />
          </Routes>
        </Container>
      </Router>

      <ToastContainer hideProgressBar={true} position='top-right' newestOnTop />
    </div>
  );
}

export default App;
