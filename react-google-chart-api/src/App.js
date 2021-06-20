import Chart from "react-google-charts";
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([
    
      
    
  ]);
  useEffect(() => {
    var ArrayItems=[['Task', 'Hours per Day']];
    fetch('https://5f7146ed64a3720016e603e1.mockapi.io/api/chartapi')
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          ArrayItems.push(...[[data[i].country,data[i].number]]);
        }
        setItems(ArrayItems)
        console.log(ArrayItems)
      })
  },[])
  console.log(items)

  return (
    <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={items}
  options={{
    title: 'My Daily Activities',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  );
}

export default App;