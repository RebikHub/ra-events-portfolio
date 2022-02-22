import './App.css';
import Portfolio from './components/Portfolio';
import data from './ImageStore';

function App() {
    return (
        <Portfolio props={data}/>
    );
}

export default App;
