import { CssBaseline } from '@mui/material';
import { Provider, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layout/footer/footer.component';
import Navbar from './layout/navbar/navbar.component';
import AddProperty from './pages/add-property/addProperty.component';
import Home from './pages/homepage/homepage.component';
import Property from './pages/single-property/property.component';
import store from './store/store';
import AuthModal from './components/modals/auth.component';
import Dashboard from './pages/dashboard/dashboard.component';
import AlertNotification from './components/AlertNotification/alert.component';
import AdminLogin from './pages/admin/admin-login.component';
import AdminDashboard from './pages/admin/admin-dashboard.component';
import Search from './pages/search/search.component';
import MyAccount from './pages/my-account/my-account.component';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Navbar />
      <AuthModal />
      <AlertNotification />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='/add' element={<AddProperty />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/admin' element={<AdminLogin />} />
        <Route path='/adminDashboard' element={<AdminDashboard />} />
        <Route path='/property/search/:key' element={<Search />} />
        <Route path='/myAccount' element={<MyAccount />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
