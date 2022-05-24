import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import CurrentPage from './component/CurrentPage';


function App() {
  const [currentPage,setCurrentPage]= useState('About Me')

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>
      <CurrentPage currentPage={currentPage}/>
    </div>
  );
}

export default App;
