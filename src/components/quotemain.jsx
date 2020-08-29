import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import Quotestr from "./quote"
const Quote=({selectedquote,selectrandindex})=>{
   
    return(
        <>
        <Quotestr text={selectedquote.quote} author={selectedquote.author}/>
    <button className="button tweet" title="Tweet this quote"><TwitterIcon/></button>
    <button className="button tumbler" title="Share on Tumbler">t</button>
    <button className="button newquote" onClick={selectrandindex}>New Quote</button>
    </>
    );
}
export default Quote;