import './App.css';
import UserFormHook from './components/UserFormHook';

function App() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-3">Another Registration Form</h1>
      <div className="row">
        <div className="col-6 offset-3">
          <UserFormHook />
        </div>
      </div>
    </div>
  );
}

export default App;
