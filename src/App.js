import './App.css';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';
import EventDetails from './components/EventDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import EventList from './components/EventList';
import NotFound from './Pages/NotFoundPage';

function App() {
  return (
    <>
     <AuthProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element={<HomePage />} />
    <Route path = "/event/:id" element={<EventDetails />} />
    <Route path = "/login" element={<LoginPage />} />  
    <Route path = "/eventlist" element={<EventList />} />  
    <Route path="*" element={<NotFound />} />
      </Routes>    
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
