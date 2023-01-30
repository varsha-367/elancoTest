import React, {useState,useEffect} from 'react';
import { getData } from '../../shared/utils';
import Card from '../../atoms/cards/card';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Resources = () => {
const [resourceList, getResourceList] = useState([]);
const navigate = useNavigate();
    useEffect(()=> {
        getData('/resources')
        .then((data) => getResourceList(data));
    },[])

const handleSelect =(e) => {
    navigate(`/resource/${e.target.textContent}`);
}
    return(
        <div>
        <div className="header">Resources</div>
        <div className="cardWrap">{resourceList.map(list => (
            <Card
             listdata={list}
             onClick = {handleSelect}/>
        ))}</div>
        </div>
    )
} 
export default Resources;