"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Emailjs from '@emailjs/browser';

const Contactusform = () => {
    const [isOpen, setIsOpen] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [buttonText, setButtonText] = useState('Send Email');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formRef.current) {
            setButtonText('Sending...');

            const serverId = process.env.NEXT_PUBLIC_Server_Id;
            const templateId = process.env.NEXT_PUBLIC_Template_ID;
            const publicKey = process.env.NEXT_PUBLIC_Public_Key;

            if (!serverId || !templateId || !publicKey) {
                setErrorMessage('Environment variables are not properly set.');
                setButtonText('Send Email');
                return;
            }

            try {
                await Emailjs.sendForm(
                    serverId,
                    templateId,
                    formRef.current,
                    publicKey
                );

                setButtonText('Send Email');
                alert('Sent!');
                setIsOpen(false);
                setErrorMessage(null);
            } catch (error) {
                console.error('EmailJS error:', error);
                setButtonText('Send Email');
                setErrorMessage('Failed to send email. Please try again.');
            }
        }
    };

    const isDisabled = Object.values(inputValues).some(value => value === '');

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto md:ml-6 sm:pr-0">
                <div className='hidden lg:block'>
                    <button
                        type="button"
                        className='justify-end  text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'
                        onClick={openModal}
                    >
                        Contacteer mij
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-shrink-0 items-center justify-center">
                                            <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                                <Image
                                                    className='logo'
                                                    src="/logo-color-one.png"
                                                    alt="Logo"
                                                    width={150}
                                                    height={70}
                                                />
                                            </Link>
                                        </div>
                                        <p className="mb-8 font-semibold text-4xl lg:mb-16 mt-8 text-center text-gray-500 dark:text-gray-400 ">
                                        Contacteer mij                                        </p>
                                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    jouw naam
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    value={inputValues.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Name..."
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                    Jouw email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={inputValues.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="xyz@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                                Jouw bericht                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={inputValues.message}
                                                    onChange={handleChange}
                                                    required
                                                    className="relative block w-full appearance-none rounded-md border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Leave a comment..."
                                                ></textarea>
                                            </div>
                                            <input
                                                type="submit"
                                                value={buttonText}
                                                disabled={isDisabled}
                                                className="py-3 px-5 text-sm disabled:opacity-50 font-medium w-full text-center text-white rounded-lg bg-blue focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            />
                                        </form>
                                        {errorMessage && (
                                            <div className="mt-4 text-red-500 text-center">
                                                {errorMessage}
                                            </div>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Contactusform;






