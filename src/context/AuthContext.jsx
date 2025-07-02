//Es archivo gestiona el estado global del usuario autentificado
import { createContext,useContext,useEffect,useState } from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from "../firebase"

const AuthContext= createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(true);


useEffect(()=>{
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);
    });
    return () => unsub();
},[]);

const logout = () => signOut(Auth);

return(
    <AuthContext.Provider value={{user,logout}}>
    {!loading && children}
    </AuthContext.Provider>
);
}