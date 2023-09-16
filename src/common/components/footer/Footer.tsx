import React from 'react';
import {Logo, WriteMeButton} from "@/common/components/elements";
import {Env} from "@env";

const firstName = Env.OWNER_FIRST_NAME
const lastName = Env.OWNER_LAST_NAME
const Footer = () => {
	return (
		<footer className="relative flex w-full md:justify-around justify-between md:px-0 px-3 md:py-5 py-3 bg-gray-800 text-white">
			<div className="flex items-end space-x-3">
				<Logo size={60}/>
				<h1>&#9412; All rights reserved | {firstName + ' ' + lastName} | 2023</h1>
			</div>
			<div className="md:flex hidden space-x-5">
				<WriteMeButton/>
			</div>
		</footer>
	);
};

export default Footer