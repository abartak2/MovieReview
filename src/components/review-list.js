import React from 'react';
import StarRating from './stars';

// create table to hold the review form data and map the fields to the form
function Table({tableData}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Review</th>
                    <th>Star Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.fullName}</td>
                                <td>{data.reviewText}</td>
                                {/* pull in star rating  */}
                                <StarRating />
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;


