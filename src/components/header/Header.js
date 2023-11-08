import React, { useState } from 'react'
import { logo } from '../../assets/index'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { allItems } from '../../constants';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-ceter gap-4'>
        {/* ============ Image start here ============ */}
        <div className='headerHover'>
          <img className="w-24 mt-2" src={logo} alt="amazon-logo" />
        </div>
        {/* ============ Image End here ============ */}


        {/* ============ Deliver start here ============ */}
        <div className='headerHover'>
          <LocationOnOutlinedIcon />
          <p className='text-sm text-lightText font-light flex flex-col'>Delivery to <span className='font-semibold -mt-1 text-whiteText'> India</span></p>
        </div>
        {/* ============ Deliver End here ============ */}


        {/* ============ Search start here ============ */}
        <div className='h-10 rounded-md flex flex-grow relative '>
          <span onClick={() => setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-grey-300  border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
            All<span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {
            showAll && (
              <div className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col z-50'>
                <ul>
                  {
                    allItems.map((item) => (<li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' key={item._id}>{item.title}</li>))
                  }
                </ul>
              </div>
            )
          }
          <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text' />
          <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847]duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
            <SearchOutlinedIcon />
          </span>
        </div>
        {/* ============ Search End here ============ */}


        {/* ============ Signin start here ============ */}
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Hello, Sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>Account & Lists {" "} <span><ArrowDropDownOutlinedIcon /></span></p>
        </div>
        {/* ============ Signin End here ============ */}


        {/* ============ Order start here ============ */}
        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>
        {/* ============ Order End here ============ */}


        {/* ============ Cart start here ============ */}
        <div className='flex items-start justify-center headerHover relative'>
          <ShoppingCartOutlinedIcon />
          <p className='text-xs font-semibold mt-3 text-whiteText'>
            Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span>
          </p>
        </div>
        {/* ============ Cart End here ============ */}
      </div>
      <HeaderBottom />

    </div>
  )
}

export default Header