// import Table from "../components/Table/Table"
import { useState, useEffect, useRef } from "react";
import API from "../utils/API";

let current = 1;

function Directory() {
  
  // const [userFilter, setUserFilter] = useState([]);
  const userFilterAge = useRef();
  const userFilterLoyalty = useRef();
  const [employeeDataOriginal, setEmployeeDataOriginal] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
      API.getEmployee()
          .then(y => {
              setEmployeeData(y.data.results)
              setEmployeeDataOriginal(y.data.results)
          })
          .then()
        }, [])
        
  function sortIt() {
    let originalData = employeeData.map((x) => x)
    let originalData2 = employeeData.map((x) => x)
    let dataToArange = originalData.sort(compare)
    const dataToRearange = originalData2.sort(compare2)
    if (current === 1) {
      setEmployeeData(dataToArange);
      current = current - 1;
    }
    else {
      setEmployeeData(dataToRearange);
      current = current + 1 ;
    }
  }

  function compare(a, b) {
    const x = a.name.last.toUpperCase();
    const y = b.name.last.toUpperCase();
    let comparison = 0;
    if (x > y) {
      comparison = 1;
    } else if (x < y) {
      comparison = -1;
    }
    return comparison;
  }
  function compare2(a, b) {
    const x = a.name.last.toUpperCase();
    const y = b.name.last.toUpperCase();
    let comparison = 0;
    if (x > y) {
      comparison = 1;
    } else if (x < y) {
      comparison = -1;
    }
    return (comparison * -1);
  }
  
  //        // This function works, but it overrides the other filter. Can only apply 1 at a time. At least you can sort the filtered results.
  // function filterAge() {
  //   let originalData = employeeDataOriginal.map((x) => x)
  //   let dataToFilter = originalData.filter(a => a.dob.age < userFilterAge.current.value)
  //   setEmployeeData(dataToFilter);
  // }
  function filterLoyalty() {
    let originalData = employeeDataOriginal.map((x) => x)
    let dataToFilter = originalData.filter(a => a.registered.age +6 > userFilterLoyalty.current.value)
    setEmployeeData(dataToFilter);
  }

  return (
    <>
      <div className="container-sm row" >
        {/* <div className="form-group col-4">
          <label for=""></label>
          <small id="helpId" className="form-text text-muted">Maximum Acceptable Age</small>
          <input ref={userFilterAge} type="number" className="form-control"></input>
        <button type="button" class="btn btn-primary" onClick={() => filterAge()} > Filter</button>
        </div> */}
        <div className="form-group col-4">
          <label for=""></label>
          <small id="helpId" className="form-text text-muted">Minimum Loyalty Rating</small>
          <input ref={userFilterLoyalty} type="number" className="form-control"></input>
        <button type="button" class="btn btn-secondary" onClick={() => filterLoyalty()} > Filter</button>
        </div>

      </div>


      <div> 
      <table className="table" style={{backgroundColor: "black", color: "orange"}}>
        <thead>
          <tr>
            {/* <th>Image</th> */}
            <th><button type="button" className="btn btn-dark btn-sm" disabled>Image</button></th>
            <th><button type="button" className="btn btn-dark btn-sm" onClick={() => sortIt()}>Name</button></th>
            <th><button type="button" className="btn btn-dark btn-sm" disabled>Age</button></th>
            <th><button type="button" className="btn btn-dark btn-sm" disabled>Loyalty to the Empire</button></th>
          </tr>
        </thead>
        <tbody>
          {
            employeeData.length === 0 ? <p>Nothing to display</p>: employeeData.map((x) => {
                return (
                    <tr key={Math.floor(Math.random() *500)}>
                        <td scope="row"> <img src={x.picture.thumbnail} />   </td>
                        <td> {x.name.first} {x.name.last} </td>
                        <td> {x.dob.age} </td>
                        <td> {x.registered.age + 6} </td>
                    </tr>
                )
            })
          }     
        </tbody>
      </table>

      </div>
    </>
  
  );
}


export default Directory




