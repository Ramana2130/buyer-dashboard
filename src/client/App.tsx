import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Product } from './components/Product';
import { EditProduct } from './components/EditProduct';
import { Settings } from './components/Setting';
import { ProfileForm } from './components/ProfileForm';
import SettingsAccountPage from './components/account/Page';
import SettingsAppearancePage from './components/appearance/Page';
import SettingsNotificationsPage from './components/notifications/Page';
import SettingsDisplayPage from './components/display/Page';
import { LoginForm } from './components/Login';
import { RegisterForm } from './components/RegisterForm';

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginForm />} ></Route>
      <Route path='/register' element={<RegisterForm />} ></Route>
      <Route path='/' element={<Dashboard />} ></Route>
      <Route path='/product' element={<Product />} ></Route>
      <Route path='/editproduct' element={<EditProduct />} ></Route>
      <Route path='/settings' element={<Settings />} ></Route>
      <Route path='/examples/forms' element={<ProfileForm />}></Route>
      <Route path='/examples/forms/account' element={<SettingsAccountPage/>}></Route>
      <Route path='/examples/forms/appearance' element={<SettingsAppearancePage/>}></Route>
      <Route path='/examples/forms/notifications' element={<SettingsNotificationsPage />}></Route>
      <Route path='/examples/forms/display' element={<SettingsDisplayPage />} ></Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
