import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

           

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/profile-picture.jpg" alt="man-icon" width={416} height={530} className=" rounded-2xl mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-center text-black text-4xl lg:text-65xl font-bold">Wie ben ik</h2>
                        <p className="font-medium text-black text-2xl mt-5 text-center lg:text-start"> Hallo! Ik ben Malki, jouw rijinstructeur bij Malki Rijschool. Met jarenlange ervaring en een passie voor lesgeven, streef ik ernaar om elke leerling met vertrouwen en vaardigheid de weg op te laten gaan. Ik geloof in een persoonlijke benadering waarbij elke leerling de aandacht krijgt die hij of zij verdient. Samen werken we aan jouw rijvaardigheid, in jouw tempo en op een manier die bij jou past. </p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
