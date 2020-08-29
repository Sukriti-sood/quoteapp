import React from "react";

function Quotestr(props){
    return(
        <>
            <div className="quote-text" >
                {props.text}
            </div>
           <div className="quote-author">
                {props.author}
           </div>
        </>
    );
}
export default Quotestr;