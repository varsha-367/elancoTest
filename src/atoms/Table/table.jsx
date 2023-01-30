import React from 'react';
import './styles.scss';

const TableComp = ({data}) => {

    return(
        <div>
            {data && data.length>0 ? (
             <table>
                <thead>
                <tr>
                    {Object.keys(data[0]).map(element => 
                            <th>{element}</th>
                    )}
                </tr>
                </thead>
                <tbody>
                {data.map(element => (
                    <tr>
                    {Object.values(element).map(detail => (
                        <td>{typeof(detail) === 'string' ? detail : detail['business-unit']}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>) : null
}
</div>)
}

export default TableComp;