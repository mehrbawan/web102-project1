import React from "react";
const Card = (props) => {

    return(
        <div className = {'Card'}>
            <img class="image" src={props.image}></img>
            <h3>{props.name} {props.gender === "female" ? "♀" : props.gender === "male" ? "♂" : ""}</h3>
            <h4>{props.breed}</h4>
            <h5>{props.age}</h5>
            <a href={props.website}>
                <button>Adopt</button>
            </a>
        </div>
    )
}
export default Card;