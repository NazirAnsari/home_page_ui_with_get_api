import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// eslint-disable-next-line
import {
  Person as PersonIcon,
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from '@mui/icons-material';


import Maincontent from './components/maincontent';

function App() {
  const [data,setData] =useState();

  //fetching api using axios
  const getData = async () => {
    try{
    const { data } = await axios.get(`https://api.ineedaword.org/video?showcaseId=7769133`);
    setData(data);
  }
    catch(error){
      console.log('error',error) //handling error if any
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
     <header>
       <div className='headerSize headerContentPosition'>Browse <ArrowDropDownIcon/></div>
       <div className='headerSize headerContentPosition'>Templates <ArrowDropDownIcon/></div>
       <div className='headerSize headerContentPosition'>Demo <ArrowDropDownIcon/></div>
       <button className='headerSize loginBtnPosition'> <PersonIcon className='loginPostion'/>Login</button>
       <div className='headerSize searchArea'><SearchIcon/></div>
     </header>

      <Maincontent data={data && data}/>
    </div>
  );
}

export default App;
