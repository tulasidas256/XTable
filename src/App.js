import { useState , useEffect } from 'react';
import './App.css';

let tableData = [

  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" }

]



function App() {

  const [data , setData] = useState([]);
  const [filterData , setfilterData] = useState([]);


  const addDataToTable = () => {
    setData(tableData);
    setfilterData(tableData);
  };

  const handleSortByDate = () =>{
    let sortData = [...data].sort((a,b)=> new Date(b.date) - new Date(a.date))
    setfilterData(sortData);
  };

  const handleSortByView = () =>{
    let sortData =[...data].sort((a,b)=> b.views - a.views);
    //console.log('<after sort>',tableData);
    setfilterData(sortData);
  };

  
  useEffect(()=>{
    addDataToTable();
  },[]);

  useEffect(()=>{
    console.log('render',filterData);
  },[filterData]);


  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByView}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {
            filterData.map((data)=>{
              return (
                <tr key={Math.random()}>
                <td>{data.date}</td>
                <td>{data.views}</td>
                <td>{data.article}</td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
