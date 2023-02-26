import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About" />
      <div className="container my-3">
        <TextForm heading = "Enter the text to analyse" />
      </div>
    </>
  );
}

export default App;
