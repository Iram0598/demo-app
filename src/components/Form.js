import React from 'react'
import Table from 'react-bootstrap/Table';
import studentbody from "../studentbody.json";

export const Form = () => {
  return (
    <div>
        <div>Absent list on</div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>Card No.</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th>In time</th>
          <th colSpan={2}>Signature</th>
          <th>Remarks</th>
        </tr>
        <tr>
            <th colSpan={5}></th>
            <th >Worker</th>
            <th >Incharge</th>
            

        </tr>
      </thead>
      <tbody>
        {studentbody.student.map((ele, i)=>{
            return( 
            <tr key={i}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.program}</td>
                <td>{ele.position}</td>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
            </tr>
        
        
            );
           
        })}
      </tbody>
    </Table>
    </div>
  )
}
