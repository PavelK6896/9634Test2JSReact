import React, {useState} from 'react';
import javas1 from './data/javas.json'

const start1 = [
    ["2+2", ["1", "2", "3", "4"], [3]],
    ["2+3", ["1", "2", "5", "4"], [2]],
    ["2*2", ["1", "4", "5", "4"], [1, 3]],
]

function App() {

    const [state1, setState1] = useState(
        {
            data: start1,
            num1: 0,
            ans: [],
            checked1: false,
            right: 0,
            wrong: 0,
            ans2: [],
        }
    )

    function start(t) {
        state1.data = t
        state1.num1 = 0
        state1.wrong = 0
        state1.right = 0
        state1.ans = []
        state1.ans2 = []
        setState1({...state1})
    }

    function next() {
        if (state1.num1 === state1.data.length - 1) {
            state1.num1 = 0
            state1.wrong = 0
            state1.right = 0
        } else {
            state1.num1 += 1
        }
        setState1({...state1})
    }

    function right() {


        if (state1.ans.length === 1) {

            console.log("ans ", state1.ans)
            console.log("data ", state1.data[state1.num1][2][0])
            console.log(state1.ans.length)

            if (Number(state1.ans[0]) === state1.data[state1.num1][2][0]) {
                console.log("правильно")
                state1.right += 1
                state1.ans2.checked = false
                state1.ans2 = []
                state1.ans = []
                next()
            } else {
                console.log("неправильно")
                state1.wrong += 1
                state1.ans2.checked = false
                state1.ans2 = []
                state1.ans = []
                next()
            }
        }

        if (state1.ans.length > 1) {

            let result = true;
            state1.ans.forEach(r => {
                if (typeof r === "string") {
                    if (state1.data[state1.num1][2].indexOf(Number(r)) === -1) {
                        result = false;
                    }
                }
            })

            if (result) {
                console.log("правильно")
                state1.right += 1
                state1.ans2.forEach(o => o.checked = false)
                state1.ans2 = []
                state1.ans = []

                next()

            } else {
                console.log("неправильно")
                state1.wrong += 1
                state1.ans2.forEach(o => o.checked = false)
                state1.ans2 = []
                state1.ans = []
                next()
            }
        }
    }

    const onChangeRadio = (e) => {
        console.log("onChangeRadio", e.target.value)
        state1.ans = e.target.value
        state1.ans2 = e.target
        setState1({...state1})
        console.log(state1.ans)
    };

    const onChangeCheckbox = (e) => {
        console.log("onChangeCheckbox", e.target.value)
        if (e.target.checked) {
            state1.ans[e.target.value] = e.target.value
            state1.ans2[e.target.value] = e.target
        } else {
            delete state1.ans[e.target.value];
            delete state1.ans2[e.target.value]
        }
        setState1({...state1})
        console.log(state1.ans)
        console.log(state1.ans2)
    };


    let div1;
    if (state1.num1 < state1.data.length) {
        if (state1.data[state1.num1][2].length > 1) {
            div1 =
                <div>
                    {
                        state1.data[state1.num1][1].map((text, index) =>
                            <label key={index} style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',

                            }}>
                                <input
                                    style={{margin: '12px 10px'}}
                                    type="checkbox"
                                    name="q"
                                    value={index}
                                    onChange={onChangeCheckbox}
                                />
                                <div dangerouslySetInnerHTML={{__html: text}}/>
                            </label>)
                    }
                </div>
        } else {
            div1 =
                <div>
                    {
                        state1.data[state1.num1][1].map((text, index) =>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',

                            }} key={index}>
                                <input
                                    style={{margin: '12px 10px'}}
                                    type="radio"
                                    name="q"
                                    value={index}
                                    onChange={onChangeRadio}
                                />
                                <div dangerouslySetInnerHTML={{__html: text}}/>

                            </label>)
                    }
                </div>
        }
    }

    return (
        <div style={{maxWidth: '800px', margin: '0 auto',}}>
            <button onClick={() => start(start1)}>start</button>
            <button onClick={() => start(javas1)}>javas1</button>
            <div style={{
                display: 'flex',
                // justifyContent: 'center',
                flexDirection: 'column',
                // alignItems: 'center',
                fontSize: '22px',
                // minHeight: '100vh'
            }}>


                <div dangerouslySetInnerHTML={{__html: state1.data[state1.num1][0]}}/>
                <br/>{div1}


            </div>
            <div style={{
                margin: '50px',

            }}>
                <button style={{
                    padding: '40px'

                }} onClick={next}>next
                </button>
                <button style={{
                    padding: '40px'

                }} onClick={right}>right
                </button>
                <div>
                    правильно: {state1.right} <br/>
                    неправильно: {state1.wrong}
                </div>
            </div>

        </div>
    );
}

export default App;
