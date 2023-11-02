import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "./components/Cards";
import './App.css'
import Nav from "./components/Nav";
import ByStatus from "./components/ByStatus";
import ByPriority from "./components/ByPriority";
import ByUser from "./components/ByUser";
import { useEffect, useState } from "react";


function App() {

  const [data, setData] = useState({})
  const [groupByUsrObj, setGroupByUsrObj] = useState({})
  const [groupByPriorityObj, setGroupByPriorityObj] = useState({})
  const [groupByStatusObj, setGroupByStatusObj] = useState({})
  const [names, setNames] = useState({})

  // useEffect is called once to fetch data from server and group it as per needs
  useEffect(() => {
    // URL to fetch data from server
    const url = "https://api.quicksell.co/v1/internal/frontend-assignment"

    // to group fetched data based on user, priority, status
    const categorizeData = (data) => {
        
        const priorityObj = {}
        const statusObj = {}
        const usrObj = {}
        const names = {}

        for(const obj of data.tickets) {

          for(const usr of data.users) {
            if(usr.id == obj.userId) {
              obj['name'] = usr.name;
              obj['available'] = usr.available
              break
            }
          }

          // creating object for grouping by user
          if(usrObj[obj.userId] == undefined) usrObj[obj.userId] = []
            usrObj[obj.userId].push(obj)
          
          // creating object for grouping by priority
          if(priorityObj[obj.priority] == undefined) priorityObj[obj.priority] = []
          priorityObj[obj.priority].push(obj)

          // creating object for grouping by status
          if(statusObj[obj.status] == undefined) statusObj[obj.status] = []
          statusObj[obj.status].push(obj)
        }

        for(const usr of data.users) {
          names[usr.id] = usr
        }

        setGroupByPriorityObj(priorityObj)
        setGroupByStatusObj(statusObj)
        setGroupByUsrObj(usrObj)
        setNames(names)

        // console.log(priorityObj)
        // console.log(statusObj)
        // console.log(usrObj)

    }

    // fetches data from server
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        setData(json)
        categorizeData(json)
      } catch(err) {
        console.log(err)
      }
    }
    
    fetchData()
    return () => {
      
    }
  }, [])

  useEffect(() => {
    // console.log(groupByStatusObj)
    // console.log(groupByPriorityObj)
    // console.log(groupByUsrObj)
  
    return () => {
      
    }
  }, [groupByStatusObj, groupByPriorityObj, groupByUsrObj])
  
  
  
  return (
    <div className="App">
      <Nav />
      <div className="body">
      <Routes>
        <Route path='/' element={<Navigate to={'/groupByUser/orderByTitle'} />} />
        <Route path='/groupByStatus/:order' element={<ByStatus groupByStatusObj={groupByStatusObj} />} />
        <Route path='/groupByPriority/:order' element={<ByPriority groupByPriorityObj={groupByPriorityObj} />} />
        <Route path='/groupByUser/:order' element={<ByUser groupByUsrObj={groupByUsrObj} names={names} />} />
        <Route path="/*" element={<Navigate to="/groupByUser/orderByTitle " />} />
      </Routes>
      </div>
    </div>
  );
}
  
export default App;
