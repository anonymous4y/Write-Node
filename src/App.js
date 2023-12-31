import { Header, Footer } from './components'
import './App.css';
import { Allroutes } from './routes/Allroutes';

function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
