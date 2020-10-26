import React, { useEffect, useState } from 'react';
import './App.css';
import GetList from './components/GetList';

function App() {

  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    async function fetchStudentList() {
      try {
        const requesUrl = 'https://5f7146ed64a3720016e603e1.mockapi.io/api/student';
        const reponse = await fetch(requesUrl);
        const reponseJSON = await reponse.json();
        console.log(reponseJSON);
        setStudentList(reponseJSON);
      } catch {

      }
    }
    fetchStudentList();
  }, []);

  return (
    <GetList studentList={studentList} />
  );
}

export default App;
