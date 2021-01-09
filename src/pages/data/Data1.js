import React, {useState} from 'react';

import {Navbar} from "../components/Navbar";

import {mysql04} from '../../data/mysql04.js'
import {spring1} from '../../data/spring1.js'
import {english1} from '../../data/english1.js'
import {english2} from '../../data/english2.js'
import {english3} from '../../data/english3.js'
import {security1} from '../../data/security1.js'
import {security2} from '../../data/security2.js'
import {js2} from '../../data/js2.js'
import {js3} from '../../data/js3.js'
import {js4} from '../../data/js4.js'
import {java3} from '../../data/java3.js'
import {java4} from '../../data/java4.js'
import {linux1} from '../../data/linux1.js'

let arr1 = {mysql04, spring1, english1, english2, english3, security1, security2, js2, js3, js4, java3, java4, linux1}
const arr2 = Object.keys(arr1);
const i1 = 8

export default function Data1() {
    const [state1, setState1] = useState({
        data: arr1.js3 || [],
        name: arr2[i1]
    })

    function btn(d, name) {
        state1.data = d
        state1.name = name
        setState1({...state1})
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",

        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100px",
                marginTop: "10px",

            }}>
                <Navbar/>

                {
                    Object.values(arr1)
                        .map((o, index, arr) => {
                            return (<button
                                key={index}
                                onClick={() => {
                                    btn(arr[index], arr2[index]);
                                }}
                            > {arr2[index]} </button>)
                        })
                }
            </div>

            <div style={{
                maxWidth: "1000px",
                width: "1000px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                fontSize: "15px",

            }}>
                <div>
                    {state1.name}
                    {
                        state1.data.map((text, index) =>
                            <div key={index}>
                                <div className="d1" style={{fontWeight: 500}}>
                                    <hr/>
                                    <div dangerouslySetInnerHTML={{__html: state1.data[index][0]}}/>

                                </div>
                                {state1.data[index][1].map((text, index2) =>
                                    <label
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                        key={index2}>

                                        <div dangerouslySetInnerHTML={{__html: text}}/>


                                    </label>
                                )}                            </div>)
                    }
                </div>
            </div>
        </div>

    )
}
