import './App.css';
import {useState} from 'react';
import Header from './components/Header/Header';
import Project from './components/Pages/Project/Project';
import Aboutme from './components/Pages/Aboutme/Aboutme';


function App() {
  const [page, setPage] = useState('project')
  // const render = () => {
  //   if (page === 'project') {
  //     return <Project></Project>

  //   }
  //   else if (page === 'aboutme') {
  //     return <Aboutme></Aboutme>
  //   }
  // }
  return (
   <>
   <Header setPage={setPage}></Header>
   {/* {render()} */}

   </>
    
  );
}

export default App;
