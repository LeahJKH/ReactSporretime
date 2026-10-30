import {useContext, createContext, useState, useEffect} from 'react'

const userContext = createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const currUser = sessionStorage.getItem("userinfo")
        if (currUser) {
            setUser(JSON.parse(currUser))
        }
        setLoad(true)
    }, [])

    useEffect(() => {
        if(load) {
            if(user) {
                sessionStorage.setItem("userinfo", JSON.stringify(user))
            } else {
                console.log("u have no user")
            }
        }
    }, [user, load])

    if (!load) {
        return null
    }
    
    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider> 
    )
}
export function useUser() {
    return useContext(userContext)
}