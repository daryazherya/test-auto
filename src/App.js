import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DeviceList from "./components/DeviceList/DeviceList";
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
         <div className="App">
            <main >
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/devices" element= {<DeviceList/>}/>
                </Routes>
            </main>
        </div>
    </Router>
  );
}

export default App;
