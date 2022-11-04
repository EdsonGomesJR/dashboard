import {createContext, FormEvent, ReactNode, useContext, useState} from 'react'

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
  currentColor: string;
  currentMode: string;
  handleSetMode:(mode: any) => void;
  handleSetColor:(color: any) => void;
  themeSettings: boolean;
  handleThemeSettings: (opened: boolean) => void;

}
export const StateContext = createContext({} as StateContextType) ;
export function ContextProvider ({children} : ContextProps){
  const [activeMenu, setActiveMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(initialState)
  const [ screenSize, setScreenSize] = useState(0)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false);

  function handleSetMode (e: any) {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value)
    setThemeSettings(false)

  }
  function handleSetColor (color: any) {
    console.log(currentColor)
    setCurrentColor(color);
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  }
 
function handleThemeSettings(opened: boolean) {
  setThemeSettings(opened)
}
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
      currentColor, currentMode,
      handleSetMode, handleSetColor, handleThemeSettings, themeSettings,
     }
    }>
      
      {children}
    </StateContext.Provider>
  )
}