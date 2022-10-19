import React from 'react'
import * as ReactDOM from 'react-dom';


const Info =(props)=>(
    <div> 
    <h1> Info</h1> 
    <p>
    This is the info:{props.info}</p>
    </div>
);
const WithAdminWarning = (WrappedComponent)=>{
    return (props)=>(
        <div> 
        {props.isAdmin &&  <p>This is private info. Please dont share it </p>}
        <WrappedComponent {...props}/>
        </div>
    )
};


const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div> 
        {props.isAuthenticated ? (<WrappedComponent {...props}/>):
        (<p> Please login to see the message  </p>) }
        
        </div>
    )
}

const AdminInfo = WithAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)
//ReactDOM.render(<AdminInfo info="There are details" isAdmin={true}/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo info="There are details" isAuthenticated={true}/>,document.getElementById('app'))