import React, {useState} from 'react';
import{ FaStar} from "react-icons/fa";

// create star rating to rate the movies 1-5 and set the color to yellow when hovering and clicking
const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
    <td>
        {/* iterate over the array of starts and create an onclick to set the value */}
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
            <label>
                <input type= "radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)}
                />
                <FaStar className="star"color={ratingValue <= (hover ||rating) ? "#ffc107" : "#e4e5e9"} 
                size={25} 
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                />
            </label>
            );
        })}
        {/* <p>This movie received {rating} stars!</p> */}
        </td>
    );
}   

export default StarRating;

