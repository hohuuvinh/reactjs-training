import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    fetch('https://5f7146ed64a3720016e603e1.mockapi.io/api/student?page=1&limit=' + limit)
      .then((res) => res.json())
      .then((data) => setItems(data))

  }, [limit])

  const loadMore = () => {
    setLimit(limit + 4)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row m-0">
          {
            items.map(item => (
              <div key={item.id} className="col-3 p-3">
                <div className="bg-primary text-white p-3">
                  <p>Item: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>Age: {item.age}</p>
                  </div>
              </div>
            ))
          }
          <div className="p-3 col-12">
            <div className="btn btn-primary w-100" onClick={loadMore}>See more</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;