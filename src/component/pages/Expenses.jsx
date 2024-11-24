import Container from '../layers/Container'
import React from 'react'
import Profile from '../../../public/Profile.jpg'
import MenuLi from '../layers/MenuLi'
import Girl from '../../../public/girl.jpg'
import Girl2 from '../../../public/girl2.jpg'
import Boy from '../../../public/men.jpg'
import Illustration from '../../../public/Illustration.png'
import Illustration2 from '../../../public/Illustration2.png'
import Stats from '../../../public/Stats.png'
import { FaPlus } from "react-icons/fa";
import ItemCart from '../layers/ItemCart'
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { MdFastfood } from "react-icons/md";
import { MdSlowMotionVideo } from "react-icons/md";
import Progress from '../layers/Progress'
import Chart from '../layers/Chart'


const Expenses = () => {
  return (
    <>
      <div className="flex justify-between items-start h-full">
        <div className="left py-[60px] px-[100px]">
          <div className="flex justify-between items-start">
            <div className="">
              <h1 className='font-semibold text-[2.50rem] leading-[32px] text-[#262a41]'>Expenses</h1>
              <p className='font-normal mt-2 text-base text-[#101010] opacity-50'>01 - 25 March, 2020</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <div className="w-[87px] flex items-start relative">
                <div className="w-[31px] h-[31px] rounded-full overflow-hidden absolute left-0 top-0 border-[3px] border-[#fff] box-content z-50">
                  <img className='w-[32px] h-full object-cover' src={Girl2} alt={Girl2} />
                </div>
                <div className="w-[31px] h-[31px] rounded-full overflow-hidden absolute left-[25px] top-0 border-[3px] border-[#fff] box-content z-40">
                  <img className='w-full h-full object-cover' src={Boy} alt={Boy} />
                </div>
                <div className="w-[31px] h-[31px] rounded-full overflow-hidden absolute left-[50px] top-0 border-[3px] border-[#fff] box-content ">
                  <img className='w-full h-full object-cover' src={Girl} alt={Girl} />
                </div>
              </div>
              <div className="border-[3px] border-[#fff] box-content ">
                <div className="rounded-full w-[28px] h-[28px] border-[3px] border-[#d2dce8]  flex justify-center items-center">
                  <FaPlus className='text-[#d2dce8] inline-block' />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[46px] w-[510px] h-[60px]">
            {/* <img src={Stats} alt={Stats} /> */}
            <Chart />
          </div>
          <div className="mt-[47px]">
            <div className="flex justify-between items-center border-b-2 border-[#dedede] pb-2">
              <h2 className='font-normal text-lg leading-[167%] text-[#262a41]'>Today</h2>
              <HiDotsHorizontal className='text-[#D8D8D8]' />
            </div>
          </div>
          <div className="mt-[26px] flex flex-col gap-y-[24px]">
            <ItemCart h3='Grocery' p='5:12 pm  •  Belanja di pasar' bg='bg-[#32A7E2]' money='-326.800' icon={<MdOutlineShoppingCart className='text-[24px] inline-block' />} />
            <ItemCart h3='Transportation' p='5:12 pm  •  Naik bus umum' bg='bg-[#B548C6]' money='-15.000' icon={<FaBus className='text-[22px] inline-block' />} />
            <ItemCart h3='Housing' p='5:12 pm  •  Bayar Listrik' bg='bg-[#FF8700]' money='-185.750' icon={<TiHome className='text-[24px] inline-block' />} />
          </div>
          <div className="mt-[59px]">
            <div className="flex justify-between items-center border-b-2 border-[#dedede] pb-2">
              <h2 className='font-normal text-lg leading-[167%] text-[#262a41]'>Monday, 23 March 2020</h2>
              <HiDotsHorizontal className='text-[#D8D8D8]' />
            </div>
          </div>
          <div className="mt-[26px] flex flex-col gap-y-[24px]">
            <ItemCart h3='Food and Drink' p='5:12 pm  •  Makan Steak' bg='bg-[#DC3434]' money='-156.000' icon={<MdFastfood className='text-[24px] inline-block' />} />
            <ItemCart h3='Entertainment' p='5:12 pm  •  Nonton Bioskop' bg='bg-[#4BA83D]' money='-35.200' icon={<MdSlowMotionVideo className='text-[22px] inline-block' />} />
          </div>
        </div>
        <div className="right w-[350px] bg-[#F9FAFC] h-full pt-[76px] pb-[60px] px-[50px]">
          <h2 className='font-normal text-xl leading-[150%] text-[#262a41]'>Where your money go?</h2>
          <div className="progress mt-[30px] flex flex-col gap-y-[30px]">
            <Progress title='Food and Drinks' money='872.400' w='w-[70px]' />
            <Progress title='Shopping' money='1.378.200' w='w-[110px]' />
            <Progress title='Housing' money='928.500' w='w-[57px]' />
            <Progress title='Transportation' money='420.700' w='w-[60px]' />
            <Progress title='Vehicle' money='520.000' w='w-[90px]' />
          </div>
          <div className="mt-[101px] rounded-[15px] pt-[77px] px-[25px] pb-[25px] bg-[#edf0f6] relative">
            <div className="absolute left-[25px] -top-[15px]">
              <img src={Illustration} alt={Illustration} />
            </div>
            <div className="absolute right-[25px] -top-[34px]">
              <img src={Illustration2} alt={Illustration2} />
            </div>
            <h3 className='font-semibold text-base text-[#273240]'>Save more money</h3>
            <p className='font-normal text-xs leading-[175%] text-[#404852] opacity-70 mt-1 mb-5'>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            <a href='#' className='font-semibold text-[0.81rem] text-[#fff] rounded-[8px] flex justify-center bg-[#101010] py-[13px] w-full'>VIEW TIPS</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Expenses