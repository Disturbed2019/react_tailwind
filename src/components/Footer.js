import React from 'react';
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from "react-icons/fa";


const Footer = () => {
	return (
		<div className={'w-full bg-black py-16 px-4'}>
			<div className={'max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 text-gray-300'}>
				<div>
					<h4 className={'w-full text-3xl font-bold text-[#00df9a]'}>REACT.</h4>
					<p className={'py-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis ea ex hic maiores necessitatibus
						nulla pariatur quis repudiandae voluptas!</p>
					<ul className={'flex md:w-[75%] my-6'}>
						<li className={'mr-2 hover:cursor-pointer'}><FaFacebookSquare size={30}/></li>
						<li className={'mr-2 hover:cursor-pointer'}><FaInstagram size={30}/></li>
						<li className={'mr-2 hover:cursor-pointer'}><FaGithubSquare size={30}/></li>
						<li className={'mr-2 hover:cursor-pointer'}><FaTwitterSquare size={30}/></li>
						<li><FaDribbbleSquare size={30}/></li>
					</ul>
				</div>
				<div className={'lg:col-span-2 flex justify-between mt-6'}>
					<div>
						<h6 className={'font-medium text-gray-400'}>Solutions</h6>
						<ul>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Analytics</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Marketing</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Commerce</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Insights</li>
						</ul>
					</div>
					<div>
						<h6 className={'font-medium text-gray-400'}>Support</h6>
						<ul>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Pricing</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Documentation</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Guides</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>API status</li>
						</ul>
					</div>
					<div>
						<h6 className={'font-medium text-gray-400'}>Company</h6>
						<ul>
							<li className={'py-2 text-sm hover:cursor-pointer'}>About</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Blog</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Jobs</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Press</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Partners</li>
						</ul>
					</div>
					<div>
						<h6 className={'font-medium text-gray-400'}>Legal</h6>
						<ul>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Claim</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Privacy</li>
							<li className={'py-2 text-sm hover:cursor-pointer'}>Terms</li>
						</ul>
					</div>
				
				</div>
			</div>
		
		</div>
	);
};

export default Footer;
