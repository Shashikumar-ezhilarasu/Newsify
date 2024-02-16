import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
const App = () => {
  const[category,setCategory] =useState("genaral");
  return (
    <div>
        <Navbar setCategory={setCategory}/>
        <NewsBoard category={category}/>
    </div>
  );
}
export  default App;
//ReactDOM.render(<App />, document.getElementById('root'));
//