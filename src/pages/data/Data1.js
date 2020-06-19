import React, {useState} from 'react';



import {mysql04} from '../../data/mysql04.js'
import {Navbar} from "../components/Navbar";


export default function Data1() {
    const [state1, setState1] = useState({
        data: mysql04 || []
    })

    function btn(d) {
        state1.data = d
        setState1({...state1})
    }

    return (
        <>
            <Navbar/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100px",
                marginTop: "10px",

            }}>

                <button onClick={() => btn(mysql04)}>mysql04</button>
            </div>
            <div style={{
                maxWidth: "1000px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                fontSize: "15px",

            }}>
                <div>
                    {
                        state1.data.map((text, index) =>
                            <div key={index}>
                                <div className="d1" style={{ fontWeight: 500}}><hr/>  <div dangerouslySetInnerHTML={{__html: state1.data[index][0]}}/> </div>
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