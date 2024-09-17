"use client"; // Zorg ervoor dat dit bovenaan staat om het gebruik van client-side functionaliteit aan te geven

import { useState } from 'react';

const names = [
    {
        heading: "20 lessen",
        price: '€1400',
        user: 'lessen van 1 uur',
        test: 'Inclusief examen', // Voeg een komma toe aan het einde van deze regel
        button: "Start",
    },
    {
        heading: "25 lessen",
        price: '€1625',
        user: 'lessen van 1 uur',
        test: 'Inclusief examen', // Voeg een komma toe aan het einde van deze regel
        button: "Start",
    },
    {
        heading: "30 lessen",
        price: '€1850',
        user: 'lessen van 1 uur',
        test: 'Inclusief examen', // Voeg een komma toe aan het einde van deze regel
        button: "Start",
    },
    {
        heading: "35 lessen",
        price: '€2225',
        user: 'lessen van 1 uur',
        test: 'Inclusief examen', // Voeg een komma toe aan het einde van deze regel
        button: "Start",
    },

    {
        heading: "40 lessen",
        price: '€2500',
        user: 'lessen van 1 uur',
        test: 'Inclusief examen', // Voeg een komma toe aan het einde van deze regel
        button: "Start",
    },
];

const Manage = () => {
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleCategory = () => {
        setSelectedCategory(prev => prev === 'monthly' ? 'yearly' : 'monthly');
    }

    // Aangezien de oorspronkelijke gegevens geen categorie hebben, renderen we alle items
    const dataToRender = names;

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-black text-4xl lg:text-65xl font-bold'> <br /> Start met rijlessen</h3>

                <div className='mt-6 relative'>
                    <div className='flex justify-center'>
                       
                     
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {dataToRender.map((item, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{item.heading}</h4>
                            <h2 className='text-5xl sm:text-6xl font-extrabold mb-3'>{item.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{item.user}</p>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{item.test}</p>
                            
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Manage;
