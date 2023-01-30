import React, {useState, useEffect} from 'react'
import { getData } from '../../shared/utils';
import TableComp from '../../atoms/Table/table';
import { useParams } from 'react-router';

const ApplicationDetails =({props})=> {
    const { name } = useParams();  
    const [listDetails, setListDetails] = useState([]);
    useEffect(()=>{
        getData(`/applications/${name}`)
        .then(data => setListDetails(data));
    },[])
    console.log(listDetails);
    return (
        <>
        <div className="header">{name}</div>
        <div className="details_container">
            <TableComp
             data ={listDetails} />
         </div>
         </>)

}
export default ApplicationDetails;