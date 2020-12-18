import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList/>    
    </div>
  );
}

export default App;
