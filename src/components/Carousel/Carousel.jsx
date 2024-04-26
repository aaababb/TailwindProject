import React from 'react'

import imageCaro from '../../assets/Abdurahman/image/imageCaro.png'
import svg1 from '../../assets/Abdurahman/svg/svg1.svg'
import svg2 from '../../assets/Abdurahman/svg/svg2.svg'
import svg3 from '../../assets/Abdurahman/svg/svg3.svg'
import cart from '../../assets/Abdurahman/svg/cart.svg'


function Carousel() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen lg:w-screen lg:h-[469px] relative mx-auto sm: w-screen sm: h-[320px] md: h-[420px] md: w-screen sm: p-4"
        style={{ backgroundImage: `url(${imageCaro})` }}
      >
        <img class="absolute w-[92px] h-[87px]lg: top-0 lg: right-0 xl:block md: hidden" src={cart}/>
        <div class=" mx-auto  lg:w-[661px] lg:h-[329px]  flex flex-col gap-[34px]  sm:w-[297px] sm:h-[294px] md:gap-8 sm:gap-7">
          <p class=" text-white font-gilroy xl:text-3xl sm: text-[20px] font-bold leading-[127.47%] tracking-tighter  uppercase">Производим мебель <br/> с 1997 года</p>
          <p class=" text-white font-inter xl:text-base sm: text-[12px] font-normal leading-[127.47%] tracking-tighter ">Мы готовы принять и передать ваш заказ на мебель <br/> региональному представительству.</p>
          <p class=" text-white font-inter xl:text-base sm: text-[12px] font-normal leading-[127.47%] tracking-tighter">Для этого пришлите ваши пожелания и контактную <br/> информацию нам на почту zakaz@lerom.ru </p>
          <div class="lg:flex md:gap-2 sm:gap-2 phone:gap-2">
            <div class="flex">
              <img class="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px] phone: w-4 phone: h-4 rounded-full bg-white" src={svg1}/>
              <div>
                <p class="text-white font-gilroy xl:text-xl sm: text-[10px] font-semibold leading-[127.47%] tracking-tighter text-left uppercase">100 000 м2</p>
                <p class="text-white font-inter xl:text-xs sm: text-[7px] font-normal leading-[127.47%] tracking-tighter text-left">Производственная площадь.</p>
              </div>
            </div>
            <div class="flex">
              <img class="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px] phone: w-4 phone: h-4 rounded-full bg-white" src={svg2}/>
              <div>
                <p class="text-white font-gilroy xl:text-xl sm: text-[10px] font-semibold leading-[127.47%] tracking-tighter text-left uppercase">1 100 чел</p>
                <p class="text-white font-inter xl:text-xs sm: text-[7px] font-normal leading-[127.47%] tracking-tighter text-left"> Рабочий коллектив.</p>
              </div>
            </div>
            <div class="flex">
              <img class="lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px] phone: w-4 phone: h-4 rounded-full bg-white" src={svg3}/>
              <div>
                <p class="text-white font-gilroy xl:text-xl sm: text-[10px] font-semibold leading-[127.47%] tracking-tighter text-left uppercase" >Официально</p>
                <p class="text-white font-inter xl:text-xs sm: text-[7px] font-normal leading-[127.47%] tracking-tighter text-left">Производственная площадь.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    
  </>
  )
}

export default Carousel