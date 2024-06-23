import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from 'react-router-dom'; // Import Outlet



function App() {
  

  return (
    <>
      <Header />
      App
      

      <Outlet /> 
      <Footer />
    </>
  )
}

export default App;
