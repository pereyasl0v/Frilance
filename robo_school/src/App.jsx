import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Carousel } from "antd";
import Trainer from "./trainer";

function App() {
	return (
 			<div className='font-jost-regular'>
			<div className='w-full min-h-[1080px] max-h-[1080px] bg-[#141024] text-white'>
				<div className='flex justify-between px-[100px] py-[30px]'>
					<div className=' text-[30px] font-jost-bold'>ROBO.SCHOOL</div>
					<nav className='flex text-[20px] min-w-[324px] gap-[30px]'>
						<button className='cursor-pointer'>О школе</button>
						<button className='cursor-pointer'>Тренеры</button>
						<button className='cursor-pointer'>Стоимость</button>
					</nav>
					<div className='text-[30px] font-jost-bold'>+7 800 000 11 22</div>
				</div>

				<div className='flex pl-[380px]'>
					<div className='flex flex-col gap-[50px] py-[266px]'>
						<div className='text-[70px] font-jost-bold'>ROBO SCHOOL</div>
						<div className='text-[20px] w-[478px] h-[64px]'>Курсы повышения квалификации по робототехнике для педагогов начальной школы</div>
						<button className='w-[260px] h-[79px] bg-[#D52027] rounded-md cursor-pointer'>Записаться на курс</button>
					</div>
					<img className='w-[783px] mt-[57px]' src='woman.png' alt='' />
				</div>
			</div>
			<div className='h-[614px] flex flex-col'>
				<div className='w-[891px] h-[144px] text-[30px] mt-[120px] ml-[380px]'>
					<span className='font-jost-bold'>Robo School </span> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования
				</div>
				<div className='flex gap-[40px] ml-[380px] mt-[60px]'>
					<div>
						<div className='text-[70px] font-jost-bold text-[#D52027]'>10</div>
						<div className='text-[18px] w-[260px] h-[58px]'>УМК по различным направлениям по робототехнике</div>
					</div>
					<div>
						<div className='text-[70px] font-jost-bold text-[#D52027]'>20</div>
						<div className='text-[18px] w-[260px] h-[58px]'>Школ, в которых запущена робототехника</div>
					</div>
					<div>
						<div className='text-[70px] font-jost-bold text-[#D52027]'>100</div>
						<div className='text-[18px] w-[260px] h-[58px]'>Педагогов прошедших курсы повышения квалификации</div>
					</div>
					<div>
						<div className='text-[70px] font-jost-bold text-[#D52027]'>10 000</div>
						<div className='text-[18px] w-[260px] h-[58px]'>Обученных детей на базе собственных центров</div>
					</div>
				</div>
			</div>
			<div className='h-[485px] bg-[#F9F9F9] flex flex-col'>
				<div className='mt-[100px] ml-[381px] mb-[60px] text-[50px] font-jost-bold'>Что вы получите после курса</div>

				<div className='flex  ml-[381px] gap-[40px]'>
					<div className='flex flex-col '>
						<div className='text-[24px] mb-[20px] font-jost-bold'>Удостоверение</div>
						<div className='w-[360px] leading-[1.6] text-[18px]'>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</div>
					</div>
					<div className='flex flex-col '>
						<div className='text-[24px] mb-[20px] font-jost-bold'>Знания</div>
						<div className='w-[360px] leading-[1.6] text-[18px]'>По основам разработки учебно-методических комплексов по робототехнике и программированию</div>
					</div>
					<div className='flex flex-col '>
						<div className=' flex text-[24px] mb-[20px] font-jost-bold'>
							Практику <div className='bg-[#14102414] text-[11px] min-w-[15px] ml-[10px]	rounded-full flex justify-center h-[15px] font-jost-regular  '>i</div>
						</div>
						<div className='w-[360px]  leading-[1.6] text-[18px]'>Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)</div>
					</div>
				</div>
			</div>
			<div>
				<div className='mt-[120px] text-[50px] ml-[380px] font-jost-bold'>Профессиональные тренеры</div>
				<div>
					<div className='px-[320px] m-auto '>
						<Carousel slidesToShow={3} dotPosition='bottom' dots={{ className: "dots" }} className='py-[60px]  px-[60px] ' infinite={true} autoplay={true} autoplaySpeed={3600} arrows>
							<div>
								<Trainer imageSrc='1.jpg' name='Ирина Лайм' education='преподаватель по робототехнике' />
							</div>
							<div>
								<Trainer imageSrc='2.jpg' name='Марина Орлова' education='преподаватель по робототехнике' />
							</div>
							<div>
								<Trainer imageSrc='3.jpg' name='Максим Петров' education='преподаватель по программированию' />
							</div>
							<div>
								<Trainer imageSrc='4.jpg' name='Константин Назаров' education='преподаватель по робототехнике' />
							</div>
							<div>
								<Trainer imageSrc='5.jpg' name='Лиза Весенняя' education='преподаватель по программированию' />
							</div>
						</Carousel>
					</div>
				</div>
			</div>
			<div>
				<div className='font-jost-bold mt-[120px] text-[50px] mx-[380px]'>Выберите нужный пакет</div>
				<div className='flex mt-[60px] gap-[40px] mx-[380px]'>
					<div className='bg-[#141024] w-[360px] h-[500px] rounded-2xl'>
						<div className='text-white text-[30px] flex justify-center mt-[40px] font-jost-bold'>– PRO –</div>
						<div className='text-white mt-[83px] text-[50px] font-jost-bold flex justify-center'>20.000 ₽</div>
						<div className='text-white text-[18px] flex justify-center text-center font-jost-regular leading-[1.6] mt-[20px]'>УМК по робототетхнике и программированию</div>
						<button className='rounded-md text-white text-[18px] cursor-pointer bg-[#D52027] w-[280px] h-[79px] flex justify-center items-center mt-[52px] ml-[40px]'>Оставить заявку</button>
					</div>

					<div className='w-[360px] h-[460px] border-[#14102433] border-[1px] self-center rounded-2xl'>
						<div className=' text-[#141024] text-[30px] flex justify-center mt-[40px] font-jost-bold'>– ROBO –</div>
						<div className='text-[#141024] mt-[63px] text-[50px] font-jost-bold flex justify-center'>15.000 ₽</div>
						<div className='text-[#141024] text-[18px] flex justify-center text-center font-jost-regular leading-[1.6] mt-[20px]'>УМК по робототетхнике </div>
						<button className='rounded-md text-white text-[18px] cursor-pointer bg-[#D52027] w-[280px] h-[79px] flex justify-center items-center mt-[61px] ml-[40px]'>Оставить заявку</button>
					</div>
					<div className='w-[360px] h-[460px] border-[#14102433] border-[1px] self-center rounded-2xl'>
						<div className=' text-[#141024] text-[30px] flex justify-center mt-[40px] font-jost-bold'>– PROG –</div>
						<div className='text-[#141024] mt-[63px] text-[50px] font-jost-bold flex justify-center'>10.000 ₽</div>
						<div className='text-[#141024] text-[18px] flex justify-center text-center font-jost-regular leading-[1.6] mt-[20px]'>УМК по программированию </div>
						<button className='rounded-md text-white text-[18px] cursor-pointer bg-[#D52027] w-[280px] h-[79px] flex justify-center items-center mt-[61px] ml-[40px]'>Оставить заявку</button>
					</div>
				</div>
				<div className='bg-[url(/bg-red-percent.png)] max-w-[1905px] overflow-hidden min-w-[1905px] min-h-[460px] mt-[120px] flex gap-[144px]'>
					<div className='mt-[106px] ml-[440px]'>
						<div className='text-[36px] text-white w-[476px]'>Запишитесь на курс со скидкой 10%</div>
						<div className='text-[20px] text-white mt-[20px]'>Акция действительна до 10 марта 2022 года</div>
					</div>
					{/* ФОРМА */}
					<form action='' className=' flex gap-[10px] flex-col w-[500px] mt-[87px]'>
						<input required placeholder='Имя' className='rounded-md bg-white  px-[20px] text-[18px] h-[64px]' type='text' />
						<input required placeholder='Телефон' className='rounded-md bg-white  px-[20px] text-[18px] h-[64px]' type='text' />
						<input required placeholder='E-mail' className='rounded-md bg-white  px-[20px] text-[18px] h-[64px]' type='email' />
						<button className='w-[500px] h-[64px] text-[18px] rounded-md bg-[#141024] text-white cursor-pointer'>Оформить заявку</button>
					</form>
				</div>
			</div>
			<div className='h-[159px] bg-[#141024] px-[100px] pt-[40px]'>
				<div className='flex justify-between'>
					<div className='font-jost-bold text-[30px] text-white'>ROBO.SCHOOL</div>
					<div className='font-jost-bold text-[30px] text-white'>+7 800 000 11 22</div>
				</div>
				<div className='mt-[5px] text-white opacity-70'>© ROBO.SCHOOL</div>
			</div>
		</div>
	);
}

export default App;
