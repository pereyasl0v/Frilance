import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Carousel } from "antd";
import Trainer from "./trainer";

function App() {
	return (
		<div className='font-jost-regular'>
			<div className='sm:w-full sm:min-h-[1080px] sm:max-h-[1080px] bg-[#141024] text-white'>
				<div className='sm:flex sm:justify-between sm:px-[100px] sm:py-[30px]'>
					<div className='sm:text-[30px] font-jost-bold'>ROBO.SCHOOL</div>
					<nav className='sm:flex sm:text-[20px] sm:min-w-[324px] sm:gap-[30px]'>
						<button className='cursor-pointer'>О школе</button>
						<button className='cursor-pointer'>Тренеры</button>
						<button className='cursor-pointer'>Стоимость</button>
					</nav>
					<div className='sm:text-[30px] font-jost-bold'>+7 800 000 11 22</div>
				</div>

				<div className='sm:flex sm:pl-[380px]'>
					<div className='sm:flex sm:flex-col sm:gap-[50px] sm:py-[266px]'>
						<div className='sm:text-[70px] font-jost-bold'>ROBO SCHOOL</div>
						<div className='sm:text-[20px] sm:w-[478px] sm:h-[64px]'>Курсы повышения квалификации по робототехнике для педагогов начальной школы</div>
						<button className='sm:w-[260px] sm:h-[79px] bg-[#D52027] rounded-md cursor-pointer'>Записаться на курс</button>
					</div>
					<img className='sm:w-[783px] sm:mt-[57px]' src='woman.png' alt='' />
				</div>
			</div>

			<div className='sm:h-[614px] sm:flex sm:flex-col'>
				<div className='sm:w-[891px] sm:h-[144px] sm:text-[30px] sm:mt-[120px] sm:ml-[380px]'>
					<span className='font-jost-bold'>Robo School </span> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования
				</div>
				<div className='sm:flex sm:gap-[40px] sm:ml-[380px] sm:mt-[60px]'>
					{["10", "20", "100", "10 000"].map((num, index) => (
						<div key={index}>
							<div className='sm:text-[70px] font-jost-bold text-[#D52027]'>{num}</div>
							<div className='sm:text-[18px] sm:w-[260px] sm:h-[58px]'>
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

			<div className='sm:h-[485px] bg-[#F9F9F9] sm:flex sm:flex-col'>
				<div className='sm:mt-[100px] sm:ml-[381px] sm:mb-[60px] sm:text-[50px] font-jost-bold'>Что вы получите после курса</div>
				<div className='sm:flex sm:ml-[381px] sm:gap-[40px]'>
					{[
						{ title: "Удостоверение", text: "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях" },
						{ title: "Знания", text: "По основам разработки учебно-методических комплексов по робототехнике и программированию" },
						{ title: "Практику", text: "Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)" },
					].map(({ title, text }, index) => (
						<div className='sm:flex sm:flex-col' key={index}>
							<div className='sm:text-[24px] sm:mb-[20px] font-jost-bold flex items-center'>
								{title}
								{title === "Практику" && <div className='bg-[#14102414] sm:text-[11px] sm:min-w-[15px] sm:ml-[10px] rounded-full flex justify-center sm:h-[15px] font-jost-regular'>i</div>}
							</div>
							<div className='sm:w-[360px] sm:leading-[1.6] sm:text-[18px]'>{text}</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<div className='sm:mt-[120px] sm:text-[50px] sm:ml-[380px] font-jost-bold'>Профессиональные тренеры</div>
				<div className='sm:px-[320px] m-auto'>
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
			</div>

			<div>
				<div className='font-jost-bold sm:mt-[120px] sm:text-[50px] sm:mx-[380px]'>Выберите нужный пакет</div>
				<div className='sm:flex sm:mt-[60px] sm:gap-[40px] sm:mx-[380px]'>
					{[
						{ title: "– PRO –", price: "20.000 ₽", desc: "УМК по робототетхнике и программированию", style: "bg-[#141024] text-white" },
						{ title: "– ROBO –", price: "15.000 ₽", desc: "УМК по робототетхнике", style: "border-[#14102433] border-[1px]" },
						{ title: "– PROG –", price: "10.000 ₽", desc: "УМК по программированию", style: "border-[#14102433] border-[1px]" },
					].map(({ title, price, desc, style }, i) => (
						<div key={i} className={`sm:w-[360px] ${i === 0 ? "sm:h-[500px]" : "sm:h-[460px]"} sm:rounded-2xl ${style} self-center`}>
							<div className={`sm:text-[30px] flex justify-center sm:mt-[40px] font-jost-bold ${i === 0 ? "text-white" : "text-[#141024]"}`}>{title}</div>
							<div className={`sm:mt-[${i === 0 ? "83px" : "63px"}] sm:text-[50px] font-jost-bold flex justify-center ${i === 0 ? "text-white" : "text-[#141024]"}`}>{price}</div>
							<div className={`sm:text-[18px] flex justify-center text-center font-jost-regular leading-[1.6] sm:mt-[20px] ${i === 0 ? "text-white" : "text-[#141024]"}`}>{desc}</div>
							<button className='rounded-md text-white sm:text-[18px] cursor-pointer bg-[#D52027] sm:w-[280px] sm:h-[79px] flex justify-center items-center sm:mt-[61px] sm:ml-[40px]'>
								Оставить заявку
							</button>
						</div>
					))}
				</div>

				<div className='bg-[url(/bg-red-percent.png)] sm:max-w-[1905px] sm:overflow-hidden sm:min-w-[1905px] sm:min-h-[460px] sm:mt-[120px] sm:flex sm:gap-[144px]'>
					<div className='sm:mt-[106px] sm:ml-[440px]'>
						<div className='sm:text-[36px] text-white sm:w-[476px]'>Запишитесь на курс со скидкой 10%</div>
						<div className='sm:text-[20px] text-white sm:mt-[20px]'>Акция действительна до 10 марта 2022 года</div>
					</div>
					<form className='sm:flex sm:gap-[10px] sm:flex-col sm:w-[500px] sm:mt-[87px]'>
						<input required placeholder='Имя' className='rounded-md bg-white sm:px-[20px] sm:text-[18px] sm:h-[64px]' type='text' />
						<input required placeholder='Телефон' className='rounded-md bg-white sm:px-[20px] sm:text-[18px] sm:h-[64px]' type='text' />
						<input required placeholder='E-mail' className='rounded-md bg-white sm:px-[20px] sm:text-[18px] sm:h-[64px]' type='email' />
						<button className='sm:w-[500px] sm:h-[64px] sm:text-[18px] rounded-md bg-[#141024] text-white cursor-pointer'>Оформить заявку</button>
					</form>
				</div>
			</div>

			<div className='sm:h-[159px] bg-[#141024] sm:px-[100px] sm:pt-[40px]'>
				<div className='sm:flex sm:justify-between'>
					<div className='font-jost-bold sm:text-[30px] text-white'>ROBO.SCHOOL</div>
					<div className='font-jost-bold sm:text-[30px] text-white'>+7 800 000 11 22</div>
				</div>
				<div className='sm:mt-[5px] text-white opacity-70'>© ROBO.SCHOOL</div>
			</div>
		</div>
	);
}

export default App;
