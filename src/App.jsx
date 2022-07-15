import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';

function App() {
  const onClick = () => {
    const name = prompt('Enter your name:');
    console.log(name);
  };

  return (
    <div className="App">
      <InputField label="User name" />
      <InputField label="Password" />
      <Button label="Login" handleClick={onClick} />
    </div>
  );
}

export default App;
