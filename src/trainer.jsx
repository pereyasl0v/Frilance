import React from "react";

export default function Trainer({ imageSrc, name, education }) {
	return (
		<>
			<img className='rounded-2xl h-[306px] w-[220px] w sm:h-[500px] sm:w-[360px] object-cover sm:rounded-4xl justify-center' src={imageSrc} alt='' />
			<div className='text-[20px] mt-[20px] sm:text-[24px] sm:mt-[20px] font-jost-bold'>{name}</div>
			<div className='text-[14px] text-[#141024B2] sm:text-[18px] sm:mt-[10px]'>{education}</div>
			<div className='text-[16px] mt-[20px] sm:text-[18px] sm:mt-[20px] cursor-pointer sm:w-max text-[#D52027]'>Подробнее</div>
		</>
	);
}
