import './App.css';
import Header from '../Header/Header';
import Quests from '../Quests/Quests';

function App() {
  return (
    <div className="App">
      <Header title={document.title}/>
      <Quests />
    </div>
  );
}

export default App;
