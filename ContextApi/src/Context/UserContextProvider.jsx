import React from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
    
const [users, setUsers] = React.useState([null])
return (
    <UserContext.Provider value={{users, setUsers}}>
        {children}
    </UserContext.Provider>
)

}
export default UserContextProvider;