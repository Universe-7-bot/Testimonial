import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card rounded-5" style={{ width: "18rem" }}>
                <div className="card-img text-center rounded-5">
                    <img src={props.avatar} className="img border border-white rounded-circle bg-white m-3 p-1" alt="myPic" height={120} width={120} />
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h5>{props.name}</h5>
                        <h5>{props.position}</h5>
                        <img src={props.company} alt="myPic" height={50} />
                    </div>
                    <p className="card-text">{props.testimonial}</p>
                </div>
            </div>
        </>
    );
};

export default Card;