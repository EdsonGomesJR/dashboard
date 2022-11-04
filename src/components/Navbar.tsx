
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'
import { ReactElement, useContext, useEffect } from 'react'
import { StateContext } from '../contexts/ContextProvider'


interface NavButtonProps {
  title: string,
  customFunc: () => void,
  color: string,
  dotColor: string,
  icon: ReactElement
}
const NavButton = ({title, customFunc, icon, color, dotColor}: NavButtonProps) => {

  return (
  <TooltipComponent position='BottomCenter' content={title}>
  <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
 <span style={{background: dotColor}}
 className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2 '/>
  {icon}

  </button>

</TooltipComponent>
)

}
// ----------------------------------------------------------------
export function Navbar() {

  const {activeMenu, handleActiveMenu, handleClick, isClicked, screenSize, handleResize, currentColor} = useContext(StateContext)

  useEffect(() => {
    handleResize()
  },[])
  useEffect(() => {
    console.log(activeMenu);
    
    if(screenSize <= 900){
      console.log('não pode aparecer o menu como padrão');
      handleActiveMenu(true)
      
    }
    else {
      handleActiveMenu(false)
    }
  

  },[screenSize])

  return (
    <div className='flex justify-between md:mx-6 p-2 relative'>
       <NavButton title='Menu' customFunc={()=> {handleActiveMenu(false)}} color={currentColor} icon={<AiOutlineMenu />} dotColor=''/>

      <div className='flex'>
        <NavButton title='Cart' 
          customFunc={()=> {handleClick('cart')}} 
          color={currentColor} 
          icon={<FiShoppingCart />} dotColor=''/>
        <NavButton title='Chat' 
          customFunc={()=> {handleClick('chat')}} 
          color={currentColor} 
          icon={<BsChatLeft />} dotColor='#03c9d7'/>

        <NavButton title='Notifications' 
          customFunc={()=> {handleClick('notification')}} 
          color={currentColor} 
          icon={<RiNotification3Line />} dotColor='#03c9d7'/>

          <TooltipComponent
            content="Profile"
            position='BottomCenter'
          >
            <div className='flex items-center gap-2 cursor-pointer
            p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
              <img src={avatar} alt="Avatar Image" className='rounded-full w-8 h-8' />
              <p>
                <span className='text-gray-400 text-14'> Hi, </span>
                <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>

          </TooltipComponent>
          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification />}
          {isClicked.userProfile && <UserProfile />}

      </div>
    </div>

  )
}
function handleClick(arg0: string) {
  throw new Error('Function not implemented.')
}

