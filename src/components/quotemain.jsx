import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import Quotestr from "./quote"
import { Button } from "@material-ui/core";
const Quote=({selectedquote,selectrandindex})=>{
    function twitterclick(){

    }
 
    return(
        <>
        <Quotestr text={selectedquote()&& selectedquote().quote} author={selectedquote()&& selectedquote().author}/>
    <button onClick={() => {window.location.href=`https://twitter.com/intent/tweet?url=&text=${selectedquote()&& selectedquote().quote}`}} className="button tweet" title="Tweet this quote"><TwitterIcon/></button>
    <button onClick={() => {window.location.href=`http://www.tumblr.com/share?v=3&u=&t=${selectedquote()&& selectedquote().quote}`}} className="button tumbler" title="Share on Tumbler">t</button>
    <button  className="button newquote" onClick={selectrandindex}>New Quote</button>
    </>
    );
}
export default Quote;