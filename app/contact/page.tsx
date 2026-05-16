import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Page = () => {
    return (
        <section className="flex justify-between"> 
            <div>
                <Image
                    src="/Production-Image8.webp"
                    alt="Hero"
                    width={600}
                    height={300}
                    className="object-cover"
                />
            </div>
            <div>
                <h1 className="text-[5rem]">Carefully Crafted.</h1>
                <h1 className="text-[5rem]">Unrivalled Quality.</h1>
                <div className="divider divider-neutral"></div>
                <h2 className="text-[3rem]">01610162458</h2>
                <h2 className="text-[3rem]">hello@marvellco.com.bd</h2>
                <div className="divider divider-neutral"></div>
                <div className="flex justify-between">
                    <div>
                        <p>© 2026 Marvell Tile & Stone</p>
                        <p><span className="underline">Privacy Terms</span> & <span className="underline">Conditions</span></p>
                        <p>Website by <span className="underline">Anonno Ruddho</span></p>
                    </div>
                    <div className="">
                        <div className="">
                            <FaInstagram />
                            <div className="mt-4">
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;

