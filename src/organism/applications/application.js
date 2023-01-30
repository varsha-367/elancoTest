import React, {useState,useEffect} from 'react';
import { getData } from '../../shared/utils';
import Card from '../../atoms/cards/card';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Application = () => {
const [appList, getAppList] = useState([]);
const navigate = useNavigate();
    useEffect(()=> {
        getData('/applications')
        .then(data => getAppList(data));
    },[])
const handleSelect =(e) => {
    navigate(`/application/${e.target.textContent}`);
}
    return(
        <div>
        <div className="header">Applications</div>
        <div className="cardWrap">{appList.map(list => (
            <Card
            listdata ={list}
             onClick = {handleSelect}/>
        ))}</div>
        </div>
    )
} 

export default Application;