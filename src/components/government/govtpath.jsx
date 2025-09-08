import React, {useState} from "react";
import { Basicdetails } from "./basicdetails";
import { Advanced } from "./advanced";
import data from './government.json';



export function Govtpath(){

    const[govtpath, Setgovtpath] = useState(null);
    const[advan, Setadvan] = useState(null);

    function handle(tenth){
        Setgovtpath(tenth);
    }

    return(
        <>
        {
            !govtpath && (
                <Basicdetails
                    begin = {data.government_exams}
                    onClickExplore = {handle}
                />
            ) 
        }
        {
            govtpath && !advan && (
                <Advanced
                  advance = {govtpath}
                  reset = {()=>{Setgovtpath(null)}}
                />
            )
        }

        </>
    )
}