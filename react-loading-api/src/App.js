import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Loading from './Loading';
import ListItem from './ListItem';

function App() {

  const [studentList, setStudentList] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    axios.get(`https://5f7146ed64a3720016e603e1.mockapi.io/api/student`)
      .then(res => {
        setStudentList(res.data);
        setLoading(true);
      })
  }, []);
  return (
    <div>
    {loading ? studentList.map(studentList => {
        return <ListItem key={studentList.id} studentList={studentList} />
      }) : <Loading/>}
    </div>
   
  );
}

export default App;
