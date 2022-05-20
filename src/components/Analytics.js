import React from 'react';
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
	return (
		<div className={'w-full bg-white py-16 px-4'}>
			<div className={'max-w-[1240px] mx-auto grid md:grid-cols-2'}>
				<img src={laptop} alt="laptop" className={'w-[500px] mx-auto my-4'}/>
				<div className={'flex flex-col justify-center'}>
					<p className={'text-[#00df9a] uppercase font-bold'}>Data analytics dashboard</p>
					<h2 className={'font-bold md:text-4xl sm:text-3xl text-2xl py-2'}>Manage Data Analytics Centrally</h2>
					<p className={''}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores eaque earum,
						eligendi facilis in
						libero minus nesciunt odit, officia pariatur quibusdam similique sint temporibus voluptates. Cumque error
						odio sint.</p>
					<button className={'bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0  py-3 text-[#00df9a]'}>
						Get Started
					</button>
				</div>
			</div>
		
		</div>
	);
};

export default Analytics;
