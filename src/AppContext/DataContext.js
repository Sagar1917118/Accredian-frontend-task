import {useState ,createContext,} from "react";
const DataContext=createContext();
export const DataContextProvider=({children})=>{
    const [showForm,setShowForm]=useState(false);
    return (
        <DataContext.Provider value={{showForm,setShowForm}}>
            {children}
        </DataContext.Provider>
      );
}
export default DataContext;