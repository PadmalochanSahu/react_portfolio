import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import TodoList from './pages/todolist/TodoList';
import WeatherApp from './pages/weather/WeatherApp';
import NumberGame from './pages/numbergame/NumberGame';
import Table from './pages/datatable/Table';
import Signup from './pages/login/Signup';
import Signin from './pages/login/Signin';
import DataTable from './pages/reduxapi/DataTable';
import CommentData from './pages/reduxapi/CommentData';
import AlbumData from './pages/reduxapi/AlbumData';
import ReduxTodo from './pages/todo/ReduxTodo';

function App() {
  return (
    <>
    <BrowserRouter basename='/react_portfolio'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/numbergame" element={<NumberGame />} />
        <Route path="/datatable" element={<Table />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/signup' element ={<Signup />} />
        <Route path='/reduxtable' element ={<DataTable />} />
        <Route path='/comments' element ={ <CommentData />} />
        <Route path='/post' element ={ <DataTable />} />
        <Route path='/albums' element ={ <AlbumData />} />
        <Route path='/reduxtodo' element ={ <ReduxTodo/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

