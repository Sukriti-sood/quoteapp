import React,{useEffect,useState} from "react";
import Quote from "./quotemain";
import Axios from "axios";

function App(){

    const [datarray,setdataarray]=useState([]);
    const [srandind,setranind]=useState(null);

    useEffect(()=>{
    function getfetchurl(){
        return "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    }
        
    async function fetchdata(){;
        const result =await Axios(getfetchurl());
        const quotes=result.data;
        console.log(quotes);
        setdataarray(quotes);
        console.log(datarray.length);
        setranind((Math.floor(Math.random()))*(quotes.length)-1);
    }
    fetchdata();
    },[]);
   

      function quoteselection(){
        if (!datarray.length || !Number.isInteger(srandind)) {
            return undefined;
          }
          return datarray[srandind];
      }

      function indexfunc(){
          setranind(generatequoteindex());
      }


      function generatequoteindex()
      {
        if (!datarray.length) {
            return undefined;
          }
          return (Math.floor(Math.random()))*datarray.length-1;
      }


return(
<div className="quote-box">

<Quote selectedquote= {quoteselection} selectrandindex={indexfunc}/> 

</div>
);
}
export default App;
