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
        <div className="footer_two_Main">

                        <div className="Footer_two_item" ><Image src="/gmail.png" width={80} height={80} alt="dots-image"  />Email: Malkyzeist@gmail.nl </div>
                        <div className="Footer_two_item" ><Image src="/call.png" width={80} height={80} alt="dots-image"  />Telephone number: +31 6 24429201 </div>


        </div>
        
                        
            
    )
}

export default footer;