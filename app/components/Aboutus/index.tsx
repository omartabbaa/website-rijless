import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
 
}

const Aboutdata: datatype[] = [
    {
        heading: "Hoe Wij Werken: De RIS-Methode Uitleg",
        imgSrc: "/a-gear-icon.png",
        paragraph: `Wij zijn een rijschool die werkt volgens de RIS-methode (Rijopleiding in Stappen), aanbevolen door het CBR. Onze missie is om leerlingen veilig, zelfverzekerd en met plezier te leren rijden. De RIS-methode bestaat uit vier modules.

De eerste module richt zich op het bedienen en beheersen van de auto, waarbij de basisvaardigheden worden aangeleerd. De tweede module omvat het oefenen van eenvoudige manoeuvres en het omgaan met veelvoorkomende verkeerssituaties. In de derde module worden moeilijkere rijvaardigheden en complexe verkeerssituaties behandeld, inclusief een tussentijdse toets van het CBR of een proefexamen. De vierde en laatste module legt de nadruk op veilig en verantwoord rijden, inclusief het rijexamen bij het CBR, met speciale aandacht voor rijden onder gladde omstandigheden.`
    },
    {
        heading: "Jouw Voordelen Bij Malki Rijschool",
        imgSrc: "/an-electric-car.png",
        paragraph: `Bij onze rijschool profiteer je van de volgende voordelen:

Altijd dezelfde instructeur: Malki. Wij bieden een persoonlijke benadering zonder nummertjes; elke leerling is belangrijk. Onze lessen zijn niet alleen leuk maar ook leerzaam, en we bieden betaalbare pakketten zonder verborgen kosten. Je rijdt in een fijne lesauto en met een moderne lesmotor uit 2016. Betaling in termijnen is mogelijk, en we zorgen voor een overzichtelijke planning. Wanneer je klaar bent, regelen wij tijdig je examen, en we hebben regelmatig aantrekkelijke acties.`
    },

]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div id="aboutus-section" >
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'></h3>
                <h4 className='text-center text-white text-4xl lg:text-65xl font-bold'>Waarom Kiezen Voor Malki Rijschool?</h4>
                <div id="Aboutus" >
                    {Aboutdata.map((item, i) => (
                        <div id="aboutus_item" key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5 rounded-[12px] " />
                            <h4 className='text-lg font-normal text-black group-hover:text-white mb-5'>{item.paragraph}</h4>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;