import { createContext , useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
    darkmode: true
}

const themeReducer = (state,action) => {
    switch(action.type){
        case 'toggle':
            return { darkmode : !state.darkmode};
        default :
            return state;
    }   
}

const ThemeProvider = ({children}) => {
    const [state,dispatch] = useReducer(themeReducer,initialState);

    return (
       <ThemeContext.Provider value={{state,dispatch}}>
            {children}
       </ThemeContext.Provider>
    )
}

export default ThemeProvider
