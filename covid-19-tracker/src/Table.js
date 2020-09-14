import React from 'react'
import './Table.css'

function Table({ countries }) {
    return (
        <div className="table">
            {countries.map(({ country, cases, index }) => (
                <tr>
                    <td>{country}</td>
                    <td>
                        <strong id={index}>{cases}</strong>
                    </td>
                </tr>
            ))}
        </div>
    );
}

export default Table; 
