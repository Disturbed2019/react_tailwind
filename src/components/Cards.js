import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
	return (
		<div className={'w-full bg-white py-[10rem] px-4'}>
			<div className={'max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'}>
				<div className={'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'}>
					<img
						className={'w-20 mx-auto mt-[-3rem]'}
						src={Single}
						alt="single"
					/>
					<h3 className={'text-2xl font-bold text-center py-8'}>Single User</h3>
					<p className={'text-4xl text-center font-bold'}>$149</p>
					<div className={'text-center font-medium'}>
						<p className={'py-2 border-t border-b mx-8 mt-8'}>500 GB Storage</p>
						<p className={'py-2 border-b mx-8'}>1 User Allowed</p>
						<p className={'py-2 border-b mx-8'}>Send up to 2 GB</p>
					</div>
					<button className={'bg-[#00df9a] w-[200px] text-black rounded-md font-medium mx-auto my-6 py-3'}>Start Trial</button>
				</div>
				<div className={'w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-500 bg-gray-100'}>
					<img
						className={'w-20 mx-auto mt-[-3rem]'}
						src={Double}
						alt="double"
					/>
					<h3 className={'text-2xl font-bold text-center py-8'}>Single User</h3>
					<p className={'text-4xl text-center font-bold'}>$199</p>
					<div className={'text-center font-medium'}>
						<p className={'py-2 border-t border-b mx-8 mt-8'}>1 TB Storage</p>
						<p className={'py-2 border-b mx-8'}>3 Users Allowed</p>
						<p className={'py-2 border-b mx-8'}>Send up to 10 GB</p>
					</div>
					<button className={'bg-black w-[200px] text-[#00df9a] rounded-md font-medium mx-auto my-6 py-3'}>Start Trial</button>
				</div>
				<div className={'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'}>
					<img
						className={'w-20 mx-auto mt-[-3rem]'}
						src={Triple}
						alt="triple"
					/>
					<h3 className={'text-2xl font-bold text-center py-8'}>Single User</h3>
					<p className={'text-4xl text-center font-bold'}>$299</p>
					<div className={'text-center font-medium'}>
						<p className={'py-2 border-t border-b mx-8 mt-8'}>5 TB Storage</p>
						<p className={'py-2 border-b mx-8'}>10 Users Allowed</p>
						<p className={'py-2 border-b mx-8'}>Send up to 20 GB</p>
					</div>
					<button className={'bg-[#00df9a] w-[200px] text-black rounded-md font-medium mx-auto my-6 py-3'}>Start Trial</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;
