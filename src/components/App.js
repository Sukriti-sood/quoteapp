import React, { useEffect, useState } from "react";
import Axios from "axios";
import Quote from "./quotemain";


export default function App() {
  const [datarray, setdataarray] = useState([]);
  const [srandind, setranind] = useState(0);
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  const [colo,setcolor]=useState('#16a085');
  useEffect(() => {
    function getfetchurl() {
      return "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";
    }

    const fetchdata = async () => {
      const result = await Axios(getfetchurl());
      const quotes = result.data;
      console.log("quotes", quotes);
      setdataarray(quotes);
    //   .then(()=>{
    //   console.log(datarray.length);
    //   });
      setranind(Math.floor(Math.random()*(datarray.length)));
    };
    fetchdata().then(() => {
      console.log(datarray.length);
    });
  }, []);
  useEffect (()=>{
    document.body.style.backgroundColor=colors[Math.floor(Math.random()*(colors.length))];
    // document.getElementsByClassName("button").style.backgroundColor=colors[Math.floor(Math.random()*(colors.length))];
    console.log(document.getElementsByClassName("button"));
  })

  function quoteselection() {
    if (!datarray.length || !Number.isInteger(srandind)) {
      return undefined;
    }
    return datarray[srandind];
  }

  function indexfunc() {
    setranind(generatequoteindex());
  }

  function generatequoteindex() {
    if (!datarray.length) {
      return undefined;
    }
    
    return Math.floor(Math.random()*(datarray.length));
  }
 

  console.log(datarray.length, datarray);

  return (
    <div className="quote-box">
      <Quote selectedquote={quoteselection} selectrandindex={indexfunc} />
    </div>
  );

}
