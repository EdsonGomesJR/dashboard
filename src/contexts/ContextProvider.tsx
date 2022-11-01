import {createContext, ReactNode, useContext, useState} from 'react'

interface InitialStateType {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}
interface ContextProps {
  children: ReactNode
}
interface StateContextType {
  activeMenu: boolean,
  isClicked: typeof initialState,
  handleActiveMenu: (opened: boolean) => void;
  handleClick: (clicked: any) => void;
  screenSize: number;
  handleResize: () => void;

}
export const StateContext = createContext({} as StateContextType) ;
export function ContextProvider ({children} : ContextProps){
  const [activeMenu, setActiveMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(initialState)
  const [ screenSize, setScreenSize] = useState(0)
 

  function handleClick (clicked : any) {

    if( clicked){
      setIsClicked({...initialState, [clicked]: true})
      
    }
  
  }



  function handleResize (){
    setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize)

    // handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }

  function handleActiveMenu(opened: boolean) {
    setActiveMenu(!opened)
  }
  return (
    <StateContext.Provider
    value={
     {
      activeMenu,
      handleActiveMenu,
      isClicked,
      handleClick,
      screenSize,
      handleResize,
     }
    }>
      
      {children}
    </StateContext.Provider>
  )
}