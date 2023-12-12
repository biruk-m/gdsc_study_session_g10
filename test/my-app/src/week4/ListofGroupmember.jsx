import React from "react";
const GroupList = () =>{
    const groupmembers =[
        'biruk 1',
        'b 2',
        'i 3',
        'r 4',
        'u 5',
        'k 6',
        'ru 7',
        'uk 8',
        'bi 9',
        'bk 10',
    ];
    return(
        <div className="group-list">
            <h2>Group 10 members</h2>
            <ul>
                {groupmembers.map((member,idex)=>(<li key={index}>{member}</li>))}
            </ul>
        </div>
    );
};
export default GroupList
// export const Greeting = () =>{
//     const names =['x','y','z']
//     return <div>{names.map((x)=><li>{x}</li>)}</div>
// }
// export default Greeting;