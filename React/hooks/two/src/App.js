import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import UserGreet from './UserGreet/UserGreet';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (

   <div className="content">
  <SideBar place='left' />
  <SideBar place='rignt'/>
  </div>
  );
}

export default App;
