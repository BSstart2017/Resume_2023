import React from 'react';
import Image from "next/image";
import {WriteMeButton} from "@/common/components/elements";

const HomeSectionStart = () => {
	return (
		<article className={'lg:flex flex-1 sm:h-[80vh] items-center sm:space-x-10'}>
			<div className={'w-full space-y-5'}>
				<h1 className={'sm:text-7xl text-5xl font-semibold'}>
					Your&nbsp;
					<span className={'text-blue-500'}>
						next
					</span>
				</h1>
				<h1 className={'text-center text-5xl font-semibold'}>Front-end Developer</h1>
				<div className={"flex sm:justify-end justify-center w-full"}>
					<WriteMeButton/>
				</div>
			</div>
			<div className={'sm:flex hidden w-full justify-center'}>
				<Image
					src={"/images/frontEndProgramming.png"}
					width={800}
					height={800}
					alt="Avatar"
					className="rounded-full"
				/>
			</div>
		</article>
	);
};

export default HomeSectionStart;