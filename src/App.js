
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Hello1 from './HelloWorld/hello';
import { Navbar } from './Reuseablebanner/reuseable';
import { Login } from './Component/Memberlogin/member';
import { Success } from './Notification/Notification';
import { Learn } from './Technoldeges/technologies1';
import Social from './Socialbutton/socialbutton';
import Card from './Component/Congratscard/congratscard';
import Kings from './Component/Superleague/superleague';



function App(){
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={[<Navbar/>,<Hello1/>]}/>
     <Route path='/about' element={[<Navbar/>,<Login/>]}/>
    <Route path='/notify' element={[<Navbar/>,<Success/>]}/>
    <Route path='/tech'element={[<Navbar/>,<Learn/>]}/>
     <Route path='/button'element={[<Navbar/>,<Social/>]}/>
     <Route path='/congrats'element={[<Navbar/>,<Card/>]}/>
     <Route path='/super'element={[<Navbar/>,<Kings/>]}/>
     
     </Routes> 
    </BrowserRouter> 
     
    </>
  );
}

export default App;
