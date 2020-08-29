import React, { useState, useEffect } from "react";
import axios from "axios";
import { json } from "express";


const [datarray,setdataarray]=useState([]);

useEffect(()=>{
    axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(res=>{
        console.log(res);
        setdataarray(res.data);
    })
    .catch(err=>{
        console.log(err)
    });
},[]);

export default datarray;






// 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'