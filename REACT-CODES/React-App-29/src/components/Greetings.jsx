import React from "react";

const Greetings = (props) => {
    const name = "Shahid";
    const Rollno = 2305029;
    const Address = "Tisk Usgao Goa, 403406";
    const College = "GMFC Dharbandora Goa";

    return (
        <>
        <a href="/Counter"><button>Counter</button></a>
        <h1>Hello New : {props.name}</h1>
        <h1>Hello : {name},<br></br> Roll No : {Rollno},<br />Address : {Address},<br />College : {College}</h1>
        </>
    )

}



const App = () => {
    return (
        <>
        <Greetings name="Shahid" />
        </>
    )
}

export default App;