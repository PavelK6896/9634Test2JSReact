import React, {useState} from 'react';
import javas1 from '../../data/javas.json'
import mysql1 from '../../data/mysql+.json'
import {Navbar} from "../components/Navbar";


export default function Data1() {
    const [state1, setState1] = useState({
        data: javas1 || []
    })
    function btn(d) {
        state1.data = d
        setState1({...state1})
    }

    return (
        <>
            <Navbar/>
            <div  style={{
                display: "flex",
                flexDirection: "column",
                width: "100px",
                marginTop: "10px",

            }}>
                <button onClick={() => btn(mysql1)}>mysql+</button>
                <button onClick={() => btn(javas1)}>javas1</button>
            </div>
            <div style={{
                maxWidth: "1500px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                fontSize: "20px",
            }}>
                <div>
                    {
                        state1.data.map((text, index) =>
                            <div key={index}>
                              <pre>  <div dangerouslySetInnerHTML={{__html: state1.data[index][0]}}/></pre>
                                {state1.data[index][1].map((text, index2) =>
                                    <label style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                    }} key={index2}>
                                        <div dangerouslySetInnerHTML={{__html: text}}/>
                                    </label>
                                )}
                            </div>)
                    }
                </div>
            </div>
        </>

    )
}