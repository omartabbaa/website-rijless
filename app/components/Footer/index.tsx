import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "",
        link: ['Home',],
    },
]

const footer = () => {
    return (
        <div className="bg-black -mt-40" id="first-section">
            <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-24 flex flex-col items-center justify-center text-center">

                    {/* COLUMN-1 */}
                    <div className='mb-10'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20'>
                       
                        </h3 >
                  
                       {/* <div className='flex justify-center gap-4'>
                            <div className='footer-icons'>
                                <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
                            </div>
                            <div className='footer-icons'>
                                <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div>
                        </div>*/}
                    </div>

                    {/* COLUMN-2/3 */}
                    {products.map((product) => (
                        <div key={product.id} className="mb-10">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5 '>
                                        <Link href="/" className="text-white text-4xl font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                                      <div className='text-white' >
                        <h3 className="text-2xl">Contact info</h3>
                        <h4>Email: Malkyzeist@gmail.nl </h4>
                        <h4>Telephone number: +31 6 24429201 </h4>
                        </div>
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default footer;