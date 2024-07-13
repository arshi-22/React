import React from 'react';

// 


const greet = props => {
    return (
        <div>
            <h1>Hello {props.name} your full name is {props.fullName}</h1>
            {props.children}
        </div>
    
    )   
    
}

// destructoring example one------

// const greet = ({name,fullName,children}) => {
//     return (
//         <div>
//             <h1>Greet component Wlcomes you - Hello {name} your full name is {fullName}</h1>
//             {children}
//         </div>
    
//     )   
    
// }


export default greet