import {Link, NavLink} from 'react-router-dom'
import { SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { useContext } from 'react'
import { StateContext } from '../contexts/ContextProvider'

export function Sidebar() {

  const {activeMenu, handleActiveMenu, screenSize} = useContext(StateContext)
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
 
  function handleCloseSideBar(){
    if (activeMenu && screenSize <= 900) {
      handleActiveMenu(true)
    }
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden 
    overflow-auto md:hover:overflow-auto pb-10'>
       {activeMenu && ( <>
        <div className='flex justify-between items-center'>
          <Link to="/" className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
          onClick={() => {handleCloseSideBar()}} >
            <SiShopware/> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
           {/* md:hidden' */}
            <button type='button' onClick={() => {handleActiveMenu(true)}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block '>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>

          <div className='mt-10'>
            {links.map((item)=> (
               <div key={item.title}>
                  <p className='text-gray-400 m-3 mt-4 uppercase'>
                    {item.title}
                  </p> 
                  {item.links.map((link)=> (
                    <NavLink key={link.name} to={`/${link.name}`} onClick={() => {handleCloseSideBar()}}
                     className={({isActive}) =>
                      isActive ? activeLink : normalLink
                     }>
                        {link.icon}
                        <span className='capitalize'>{link.name}</span>
                    </NavLink>
                  ))}              
               </div>
            ))}
          </div>
       </>) }
    </div>
  )
}
