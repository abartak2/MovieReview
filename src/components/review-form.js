import React, {useState} from 'react';
import '../App.css';
import ShowData from './review-list';
import Table from "./review-list";
import StarRating from './stars';

// create a form for users to leave movie reviews with inputs for the user's name and their review. 
function SubmitReview ({handleChange, formInputData, handleSubmit}) {
    return (
        <div className="container">
            <h5>Leave your Review here!</h5>
        <div className="form-row row">
            <div className="col">
            <input type="text" onChange ={handleChange} value=
            {formInputData.fullName} name="fullName" className="form-control"
            placeholder="Name" />
            </div>
            <div className="col">
                <input type="text" onChange={handleChange} value=
                {formInputData.reviewText} name="reviewText" className="form-control"
                placeholder=" Review" />
            </div>
            {/* create submit button to submit the user's review info */}
            <div className="col"></div>
            <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
        </div>
        </div>
    )
}

export default SubmitReview;

