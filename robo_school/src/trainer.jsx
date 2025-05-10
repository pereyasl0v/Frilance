import React from "react";

export default function Trainer({ imageSrc, name, education }) {
	return (
		<>
			<img className='h-[500px] w-[360px] object-cover rounded-4xl' src={imageSrc} alt='' />
			<div className='text-[24px] mt-[20px] font-jost-bold'>{name}</div>
			<div className='text-[18px] mt-[10px]'>{education}</div>
			<div className='text-[18px] mt-[20px] cursor-pointer w-max text-[#D52027]'>Подробнее</div>
		</>
	);
}
