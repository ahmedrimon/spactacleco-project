import Footer from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/Navbar";
import Image from "next/image";

export default function page() {
    return (
        <section>
            <header className="p-6 flex justify-center">
                <NavigationMenuDemo/>
            </header>
            <section className="relative h-screen">

                <Image
                    src="/Ainsile1.webp"
                    alt="Hero"
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="text-white relative z-10 h-full p-42">
                    <h1 className="sm:text-[4rem] text-[8rem] ml-4 text-center">Ainsile Street</h1>
                    <p className="text-[1.25rem] text-center">Internal and external stonework and ensuite</p>
                    <div className="p-7 text-center sm:hidden lg:block lg:grid lg:grid-cols-4 lg:gap-1">
                        <div>
                            <p>Builder</p>
                            <p>Red Cloud Building</p>
                        </div>
                        <div>
                            <p>Architect</p>
                            <p>Robeson Architects</p>
                        </div>
                        <div>
                            <p>Stone Supplier</p>
                            <p>Eco Outdoor</p>
                        </div>
                        <div>
                            <p>Photographer</p>
                            <p>Dion Robeson</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="flex justify-evenly p-8">
                <h1 className="text-[1.25rem]">Overview</h1>
                <p className="w-220 text-[3rem] pl-2">For an East Fremantle residence on Ainslie Street, we collaborated with Red Cloud Building and Robeson Architects to deliver a fully integrated stonework package. Spanning indoor and outdoor spaces, the project celebrates materiality, technical know-how, and a Mediterranean inspired aesthetic, resulting in one of the most rewarding projects we’ve ever completed.</p>
            </section>
            <section>
                <div className="relative w-fit">
                    <Image
                        src="/Ainsile2.webp"
                        alt="Kitchen Area"
                        width={1400}
                        height={800}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Ainsile3.webp"
                        alt="Walking Dog"
                        width={600}
                        height={600}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Ainsile4.webp"
                        alt="Walking Dog"
                        width={1300}
                        height={600}
                        className="h-auto object-cover"
                    />
                </div>
            </section>
            <section className="flex justify-between p-2">
                <div>
                    <Image
                        src="/Production-Image6.webp"
                        alt="Bathtub View"
                        width={600}
                        height={600}
                    />
                </div>
                <div>
                    <Image
                        src="/Ainsile6.webp"
                        alt="Shampoo Pack"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Ainsile7.webp"
                        alt="Walking Dog"
                        width={1300}
                        height={600}
                        className="h-auto object-cover"
                    />
                </div>
            </section>
            <section className="p-12 flex justify-between">
                <div>
                    <h1 className="text-[1.2rem]">Project Details</h1>
                </div>
                <div className="text-[1.7rem] ml-6">
                    <p> For this East Fremantle home, we worked closely with Robeson Architects and Red Cloud Building to deliver the full internal and external stonework package—from main living areas to alfresco, pool surrounds, and a showstopping pink ensuite. Scala Crazy Paving was laid throughout the interiors and extended outdoors, with custom detailing around curved pool walls and radiused corners. </p>
                    <p>The pool capping was freehand scribed on-site to match the geometry of the existing pool shell. “The stone flooring is the hero of the entire design,” says Lauren Benson of Robeson Architects. “It created that Mediterranean feel we wanted—calm, earthy, timeless.”</p>
                    <p>Upstairs, the ensuite pairs the same Scala stone with hand-laid pink mosaics—delicate paper-faced tiles placed with millimetre exactness.</p>
                </div>
            </section>
            <Footer/>
        </section>
    );
}