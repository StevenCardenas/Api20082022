import React, { useEffect, useState } from "react";

const url="http://localhost:3002/cpustore/computers"
const ListComputers = () => {
  const [computers, setComputer] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setComputer(responseJSON);



  };
  useEffect(() => {
    fetchApi();
  });
  function deleteComputer (id){
    fetch(`http://localhost:3002/cpustore/computer/${id}`,{
      method: 'DELETE',
    }).then(res => res.json())
    .then(data => {
      console.log(data);
      alert('Computer with id ' + id + ' was deleted!')
   
    })
  }
  

  return (
    <div>
      <div class="card-body">
        <br />
        <br />
        <h3 class="btn btn-lg btn-primary">CPU Store </h3>

        <br />
        <p>This shows customers information from API: {url} </p>

      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Model</th>
          </tr>
        </thead>
        <tbody>
          {!computers
            ? "Loading"
            : computers.map((computers, index) => {
              return (
                <tr className="table-info">
                  <td className="text-center">{computers.id}</td>
                  <td className="text-center">{computers.name}</td>
                  <td className="text-center">{computers.price}</td>
                  <td className="text-center">{computers.model}</td>
                  <td>
                  <button class="btn btn-lg btn-primary" type="button" onClick={() => { deleteComputer(computers.id) }}>Delete</button>
                  </td>
                
                </tr>

              );
            })}
        </tbody>
      </table>
      <br /><br /><br /><br /><br />

    </div>
  );
}

export default ListComputers;