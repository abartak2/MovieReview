import React, {useState} from "react";
import SubmitReview from './review-form';
import Table from './review-list';

// create a function to take the data entered in the form and store in a table
function ShowData() {
    const [tableData, setTableData] = useState([])
    const [formInputData, setFormInputData] = useState(
        {
            fullName:'',
            Review: '',
        }
    )

const handleChange=(event)=>{
    const newInput = (data)=>({...data,
    [event.target.name]:event.target.value})
        setFormInputData(newInput)
}

const handleSubmit= (event) => {
    event.preventDefault();
    const checkEmptyInput =
!Object.values(formInputData).every(res=>res==="")
    if(checkEmptyInput)
    {
        const newData = (data)=>([...data, formInputData])
        setTableData(newData);
        const emptyInput = {fullName:'', Review: ''}
        setFormInputData(emptyInput)
        
    }
}


// React.Fragment to group multiple elements add data to the table
return(
    <React.Fragment>
    <div className="container">
    <div className="row">
        <div className="col">
        <SubmitReview handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
         <Table tableData={tableData}/>
         </div>
         <div className="col">
         </div>
     </div>
    </div>
     </React.Fragment>
 );
}


export default ShowData;