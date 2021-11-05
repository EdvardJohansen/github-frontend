import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app-container">
        <Header />
        <SearchBar />
        <Profile />
    </div>
  );
}

export default App;
