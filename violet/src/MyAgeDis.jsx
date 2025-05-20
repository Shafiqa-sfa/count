import React from "react";
import MyHobbyDis from "./MyHobbyDis";
const MyAgeDis=({myAge,myHobby}) =>{
    return (
        <div>
            <p>My age is {myAge}</p>
            <MyHobbyDis myHobby={myHobby} />
        </div>
    )
}
export default MyAgeDis