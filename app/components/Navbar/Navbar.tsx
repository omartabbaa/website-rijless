"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Over ons', href: '#aboutus-section', current: false },
    { name: 'kosten', href: '#services-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
    { name: 'Testimonials', href: '#testimonials-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar" >
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8 ">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link  href="/" className='text-2xl sm:text-4xl font-semibold '>
                                   <Image className='logo' src="/logo_auto_upgrade.png"
      alt="Description of Image"
      width={150}
      height={70}/>  
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div  className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                        id='nav-text'

                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks ',
                                                'px-3 py-4 rounded-md text-lg font-normal '
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            <Contactusform />
                            
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
