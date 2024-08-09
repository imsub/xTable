import { useState } from 'react';
import './App.css'
function App() {
  const [data , setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" , id:4 },
    { date: "2023-09-01", views: 100, article: "Article 1" , id:8 },
    { date: "2023-09-02", views: 150, article: "Article 2" , id:11 },
    { date: "2023-09-02", views: 120, article: "Article 3" , id:54}, 
    { date: "2020-09-03", views: 200, article: "Article 4" , id:98}
  ]);
  const onPressHandler = (e)=>{
    const btnType = e.target.innerText;
    if(btnType === "Sort by Date"){
       data.sort((a,b)=>{
        if (b.date < a.date) {
          return -1;
        }
        if (b.date > a.date) {
          return 1;
        }
        else{
          return b.views - a.views;
        }
      });
      setData([...data]);
    }
    else{
      data.sort((a,b)=>{
        if (b.views < a.views) {
          return b.views - a.views;
        }
        if (b.date > a.date) {
          return b.views - a.views;
        }
        else{
          if (b.date < a.date) {
            return -1;
          }
        }
      });
      setData([...data]);
    }
  }
  
  
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={onPressHandler}>Sort by Date</button>
      <button onClick={onPressHandler}>Sort by Views</button>
      <table id="myTable" style={{margin:'2rem',width:'90%'}}> 
      <thead >
        <tr> 
            <th>Date</th> 
            <th>Views</th> 
            <th>Article</th> 
        </tr>
        </thead>
        <tbody>
          {data.map((val) => {
           return( 
            <tr key={val.id} >
              <td >{val.date}</td>
              <td >{val.views}</td>
              <td >{val.article}</td>
            </tr> )    
          })
          }
        </tbody>
    </table>
    </div>
  )
}

export default App
