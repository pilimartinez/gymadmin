import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
