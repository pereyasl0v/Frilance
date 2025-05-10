import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Carousel } from "antd";
import Trainer from "./trainer";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
	}, [isMenuOpen]);
	return (
		<>
			{isMenuOpen && (
				<div className='fixed inset-0 z-50 bg-[#141024] text-white flex flex-col p-[10px]'>
					<div className='flex justify-end items-center '>
						<div className=' w-[44px] h-[44px] bg-[url(/close.png)] flex justify-center cursor-pointer' onClick={() => setIsMenuOpen(false)}>
							<div className='relative font-jost-bold text-[25px]'>x</div>
						</div>
					</div>
					<nav className='flex flex-col text-[20px] mt-[138px]'>
						<button className='text-center text-[30px] font-jost-bold mt-[20px]'>О школе</button>
						<button className='text-center text-[30px] font-jost-bold mt-[20px]'>Тренеры</button>
						<button className='text-center text-[30px] font-jost-bold mt-[20px]'>Стоимость</button>
					</nav>
				</div>
			)}
			<div className='font-jost-regular'>
				{/* Хэдер */}
				<div className='sm:w-full sm:min-h-[1080px] sm:max-h-[1080px] bg-[#141024] text-white'>
					<div className='flex  py-[10px] px-[10px] sm:flex sm:justify-between sm:px-[100px] sm:py-[30px]'>
						<div className='flex items-center sm:block text-[18px] sm:text-[30px] font-jost-bold'>ROBO.SCHOOL</div>
						<div className='flex ml-[66px] gap-[10px] sm:hidden'>
							<div className='bg-[url(/Call.png)]  w-[44px] h-[44px] cursor-pointer'></div>
							<div className='bg-[url(/Burger.png)] w-[44px] h-[44px] cursor-pointer' onClick={() => setIsMenuOpen(true)}></div>
						</div>
						<nav className='hidden sm:flex sm:text-[20px] sm:min-w-[324px] sm:gap-[30px]'>
							<button className='cursor-pointer'>О школе</button>
							<button className='cursor-pointer'>Тренеры</button>
							<button className='cursor-pointer'>Стоимость</button>
						</nav>
						<div className='hidden sm:block sm:text-[30px] font-jost-bold'>+7 800 000 11 22</div>
					</div>

					<div className='sm:flex sm:pl-[380px]'>
						{/* Блок с фото */}
						<div className='sm:flex sm:flex-col sm:gap-[50px] sm:py-[266px]'>
							<div className='text-[30px] flex mt-[47px] sm:mt-0 justify-center sm:block sm:text-[70px] font-jost-bold'>ROBO SCHOOL</div>
							<div className='mx-[40px] mt-[10px] sm:m-0 leading-[1.6] text-center sm:text-left  sm:text-[20px] sm:w-[478px] sm:h-[64px]'>
								Курсы повышения квалификации по робототехнике для педагогов начальной школы
							</div>
							<button className=' hidden sm:block sm:w-[260px] sm:h-[79px] bg-[#D52027] rounded-md cursor-pointer'>Записаться на курс</button>
						</div>
						<div className='h-[360px]'>
							<img className='w-[273px] h-[320px] flex m-auto sm:w-[783px] sm:h-min sm:mt-[57px]' src='woman.png' alt='' />
							<button className='sm:hidden relative top-[-60px] mx-[10px] w-[300px] h-[60px] sm:w-[260px] sm:h-[79px] bg-[#D52027] rounded-md cursor-pointer'>Записаться на курс</button>
						</div>
					</div>
				</div>

				<div className='sm:h-[614px] sm:flex sm:flex-col'>
					<div className='mt-[60px] mx-[10px] text-[20px] sm:w-[891px] sm:h-[144px] sm:text-[30px] sm:mt-[120px] sm:ml-[380px]'>
						<span className='font-jost-bold'>Robo School </span> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования
					</div>
					<div className='mt-[40px] mb-[60px] sm:mb-0 sm:flex sm:gap-[40px] sm:ml-[380px] sm:mt-[60px]'>
						{["10", "20", "100", "10 000"].map((num, index) => (
							<div key={index}>
								<div
									className='text-[60px] mt-[30px] flex justify-center
							 sm:text-[70px] font-jost-bold text-[#D52027]'
								>
									{num}
								</div>
								<div className='text-[16px] px-[25px] text-[#141024B2] text-center sm:text-[18px] sm:w-[260px] sm:h-[58px]'>
									{
										[
											"УМК по различным направлениям по робототехнике",
											"Школ, в которых запущена робототехника",
											"Педагогов прошедших курсы повышения квалификации",
											"Обученных детей на базе собственных центров",
										][index]
									}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='pt-[40px]   pb-[52px] sm:pb-0 sm:pt-0 sm:h-[485px] bg-[#F9F9F9] sm:flex sm:flex-col'>
					<div className='text-[30px] text-center sm:text-left sm:mt-[100px] sm:ml-[381px] sm:mb-[60px] sm:text-[50px] font-jost-bold'>Что вы получите после курса</div>
					<div className='mt-[10px]  sm:mt-0 sm:flex sm:ml-[381px] sm:gap-[40px]'>
						{[
							{ title: "Удостоверение", text: "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях" },
							{ title: "Знания", text: "По основам разработки учебно-методических комплексов по робототехнике и программированию" },
							{ title: "Практику", text: "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)" },
						].map(({ title, text }, index) => (
							<div className='sm:flex sm:flex-col' key={index}>
								<div className='text-[20px]  mt-[30px] justify-center sm:text-[24px] sm:mb-[20px] font-jost-bold flex items-center'>
									{title}
									{title === "Практику" && (
										<div className='relative group'>
											<button className='bg-[#14102414] text-[16px] relative top-[-5px] sm:static right-[-15px] w-[22px] h-[22px] sm:text-[11px] sm:w-[15px] sm:ml-[10px] rounded-full flex justify-center items-center sm:h-[15px] font-jost-regular cursor-pointer'>
												i
											</button>
											<div className='font-jost-regular absolute bottom-full right-[-200px] transform -translate-x-1/2 mb-2 hidden group-hover:block group-focus-within:block bg-white text-black text-[16px] rounded px-[20px] py-[15px] whitespace-nowrap z-10'>
												При наличии свободных мест
											</div>
										</div>
									)}
								</div>
								<div className='text-[#141024B2] text-[16px] text-center px-[10px] mt-[10px] sm:w-[360px] sm:leading-[1.6] sm:text-[18px]'>{text}</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<div className='text-[30px] text-center mt-[60px] sm:text-left sm:mt-[120px] sm:text-[50px] sm:ml-[380px] font-jost-bold'>Профессиональные тренеры</div>
					<div className='hidden sm:block sm:px-[320px] m-auto'>
						<Carousel slidesToShow={3} dotPosition='bottom' dots={{ className: "dots" }} className='sm:py-[60px] sm:px-[60px]' infinite autoplay autoplaySpeed={3600} arrows>
							{[
								["1.jpg", "Ирина Лайм", "преподаватель по робототехнике"],
								["2.jpg", "Марина Орлова", "преподаватель по робототехнике"],
								["3.jpg", "Максим Петров", "преподаватель по программированию"],
								["4.jpg", "Константин Назаров", "преподаватель по робототехнике"],
								["5.jpg", "Лиза Весенняя", "преподаватель по программированию"],
							].map(([img, name, edu], i) => (
								<div key={i}>
									<Trainer imageSrc={img} name={name} education={edu} />
								</div>
							))}
						</Carousel>
					</div>

					<div className='  py-[20px] sm:hidden  '>
						<Carousel dotPosition='bottom' dots={{ className: "dots" }} className='sm:py-[60px] sm:px-[60px] pt-[20px] pb-[50px] px-[50px]' infinite autoplay autoplaySpeed={6200}>
							{[
								["1.jpg", "Ирина Лайм", "преподаватель по робототехнике"],
								["2.jpg", "Марина Орлова", "преподаватель по робототехнике"],
								["3.jpg", "Максим Петров", "преподаватель по программированию"],
								["4.jpg", "Константин Назаров", "преподаватель по робототехнике"],
								["5.jpg", "Лиза Весенняя", "преподаватель по программированию"],
							].map(([img, name, edu], i) => (
								<div key={i}>
									<Trainer imageSrc={img} name={name} education={edu} />
								</div>
							))}
						</Carousel>
					</div>
				</div>

				<div>
					<div className='text-[30px] text-center px-[30px] mb-[40px] sm:mb-0 sm:px-0 sm:text-left font-jost-bold sm:mt-[120px] sm:text-[50px] sm:mx-[380px]'>Выберите нужный пакет</div>
					<div className='flex flex-col sm:flex-row  gap-[30px] sm:flex sm:mt-[60px] sm:gap-[40px] sm:mx-[380px] mb-[60px] sm:mb-0'>
						{[
							{ title: "– PRO –", price: "20.000 ₽", desc: "УМК по робототетхнике и программированию", style: "bg-[#141024] text-white" },
							{ title: "– ROBO –", price: "15.000 ₽", desc: "УМК по робототетхнике", style: "border-[#14102433] border-[1px]" },
							{ title: "– PROG –", price: "10.000 ₽", desc: "УМК по программированию", style: "border-[#14102433] border-[1px]" },
						].map(({ title, price, desc, style }, i) => (
							<div key={i} className={`sm:w-[360px] w-[300px] rounded-3xl ${i === 0 ? "sm:h-[500px] h-[420px]" : "sm:h-[460px] h-[394px]"} sm:rounded-2xl ${style} self-center`}>
								<div className={`text-[30px] flex justify-center mt-[40px] font-jost-bold ${i === 0 ? "text-white" : "text-[#141024]"}`}>{title}</div>
								<div className={`mt-[40px] sm:mt-[${i === 0 ? "83px" : "63px"}] text-[50px] font-jost-bold flex justify-center ${i === 0 ? "text-white" : "text-[#141024]"}`}>{price}</div>
								<div className={`sm:text-[18px] text-[16px] flex justify-center text-center font-jost-regular leading-[1.6] mt-[20px] ${i === 0 ? "text-white" : "text-[#141024]"}`}>{desc}</div>
								<div className='w-full flex justify-center'>
									<button className='rounded-md w-[260px] h-[60px] text-[16px] text-white sm:text-[18px] cursor-pointer bg-[#D52027] sm:w-[280px] sm:h-[79px] flex justify-center items-center mt-[40px] sm:mt-[61px]'>
										Оставить заявку
									</button>
								</div>
							</div>
						))}
					</div>

					<div className='bg-[url(/bg-red-percent.png)] sm:max-w-[1905px] sm:overflow-hidden sm:min-w-[1905px] sm:min-h-[460px] sm:mt-[120px] sm:flex sm:gap-[144px]'>
						<div className='sm:mt-[106px] sm:ml-[440px]'>
							<div className='text-[30px] leading-[1.4] text-center pt-[40px] sm:pt-0 font-jost-bold sm:text-[36px] text-white sm:w-[476px]'>Запишитесь на курс со скидкой 10%</div>
							<div className='sm:text-[20px] mt-[10px] px-[20px] text-center sm:text-left text-white sm:mt-[20px]'>Акция действительна до 10 марта 2022 года</div>
						</div>
						<form className='flex gap-[10px] flex-col pl-[10px] sm:w-[500px] sm:mt-[87px]'>
							<input required placeholder='Имя' className='pl-[20px] w-[300px] sm:w-full h-[60px] rounded-md bg-white sm:px-[20px] sm:text-[18px] sm:h-[64px]' type='text' />
							<input required placeholder='Телефон' className='pl-[20px] w-[300px] sm:w-full  h-[60px] rounded-md bg-white sm:px-[20px] sm:text-[18px] sm:h-[64px]' type='text' />
							<input required placeholder='E-mail' className='pl-[20px] w-[300px] sm:w-full  h-[60px] rounded-md bg-white sm:px-[20px] sm:text-[18px] sm:h-[64px]' type='email' />
							<button className='w-[300px] h-[60px] sm:w-[500px] mb-[40px] sm:mb-0 sm:h-[64px] sm:text-[18px] rounded-md bg-[#141024] text-white cursor-pointer'>Оформить заявку</button>
						</form>
					</div>
				</div>

				<div className='sm:h-[159px] bg-[#141024] sm:px-[100px] sm:pt-[40px]'>
					<div className='pt-[40px] sm:flex sm:justify-between'>
						<div className='text-[18px] text-center sm:text-left font-jost-bold sm:text-[30px] text-white'>ROBO.SCHOOL</div>
						<div className='text-[16px]  text-center sm:text-left mt-[20px] sm:mt-0 font-jost-bold sm:text-[30px] text-white'>+7 800 000 11 22</div>
					</div>
					<div className='text-[14px] mt-[40px] text-center sm:text-left sm:mt-[5px] text-white opacity-70'>© ROBO.SCHOOL</div>
				</div>
			</div>
		</>
	);
}

export default App;
