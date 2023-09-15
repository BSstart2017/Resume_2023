'use client'

import React, {FC, useState} from 'react';
import {Dialog} from "@headlessui/react";
import {WriteMeButton} from "@/common/components/elements";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {NavigationMobile} from "@/modules/navbar";

const DrawerMenu: FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <div className="flex md:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-400"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <WriteMeButton/>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <NavigationMobile />
                </Dialog.Panel>
            </Dialog>
        </>
    );
};

export default DrawerMenu