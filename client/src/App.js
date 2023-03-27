import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoardList from './Component/BoardList';
import Write from './Component/Write';

function App() {
  return (
    <div className="App">
      <BoardList />
      <Write />
    </div>
  );
}

export default App;