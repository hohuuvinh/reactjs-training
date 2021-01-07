import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import ListItem from './ListItem';

function App() {

  const [studentList, setStudentList] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    async function fetchStudentList() {
      try {
        const requesUrl = 'https://5f7146ed64a3720016e603e1.mockapi.io/api/student';
        const reponse = await fetch(requesUrl);
        const reponseJSON = await reponse.json();
        setStudentList(reponseJSON);
        setLoading(true);
        console.log(reponseJSON);
      } catch {

      }
    }
    fetchStudentList();
  }, []);
  var ok = '<div>ffjjf</div>';
  return (
    <div>
    {loading ? studentList.map(studentList => {
        return <ListItem key={studentList.id} studentList={studentList} />
      }) : <Loading/>}
    </div>
   
  );
}

export default App;
