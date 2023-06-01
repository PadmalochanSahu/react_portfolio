import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import TodoList from './pages/todolist/TodoList';
import WeatherApp from './pages/weather/WeatherApp';
import NumberGame from './pages/numbergame/NumberGame';
import Table from './pages/datatable/Table';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="weather" element={<WeatherApp />} />
        <Route path="numbergame" element={<NumberGame />} />
        <Route path="datatable" element={<Table />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

