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
                    src="/Sior-Project1.webp"
                    alt="Hero"
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="text-white relative z-10 h-full p-42">
                    <h1 className="sm:text-[4rem] text-[8rem] ml-4 text-center">Excelsior Street</h1>
                    <p className="text-[1.25rem] text-center">Ensuite, kitchen and laundry tiling</p>
                    <div className="p-7 text-center sm:hidden lg:block lg:grid lg:grid-cols-4 lg:gap-1">
                        <div>
                            <p>Builder</p>
                            <p>Talo Construction</p>
                        </div>
                        <div>
                            <p>Architect</p>
                            <p>Robeson Architects</p>
                        </div>
                        <div>
                            <p>Stone Supplier</p>
                            <p>Bernini</p>
                        </div>
                        <div>
                            <p>Photographer</p>
                            <p>Ridhwaan Moola Photography</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="flex justify-evenly p-8">
                <h1 className="text-[1.25rem]">Overview</h1>
                <p className="w-220 text-[3rem] pl-2"> At this contemporary Shenton Park residence, Marvell Tile and Stone partnered with Talo Construction and Robeson Architects to showcase tiling as an art of precision. Spanish limestone flows seamlessly from interior to poolside, with every joint and junction perfectly aligned — a masterclass in full-tile technique that transforms natural stone into architectural artistry.</p>
            </section>
            <section>
                <div className="relative w-fit">
                    <Image
                        src="/Sior-Project2.webp"
                        alt="Kitchen Area"
                        width={1400}
                        height={800}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Sior-Project3.webp"
                        alt="Walking Dog"
                        width={600}
                        height={600}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Sior-Project4.webp"
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
                        src="/Sior-Project5.webp"
                        alt="Bathtub View"
                        width={600}
                        height={600}
                    />
                </div>
                <div>
                    <Image
                        src="/Sior-Project6.webp"
                        alt="Shampoo Pack"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
            <section className="flex justify-between p-2">
                <div>
                    <Image
                        src="/Sior-Project6.webp"
                        alt="Bathtub View"
                        width={600}
                        height={600}
                    />
                </div>
                <div>
                    <Image
                        src="/Sior-Project7.webp"
                        alt="Shampoo Pack"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Sior-Project8.webp"
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
                    <p> For this premium home, designed by Simone Robeson, Marvell Tile and Stone brought Spanish limestone from Bernini to life through incredible craftsmanship. The process began at the front alfresco, anchored with a full tile, then extended through entry, hallways, ensuites, and out to the pool’s edge — always finishing on a full tile. Careful planning ensured interior grout lines aligned with exterior joints, creating a perfectly continuous pattern. "We prepared a detailed layout, and Marvell Tile and Stone double-checked everything ensuring it was installed perfectly, which is vital for a project like this," says Robeson.</p>
                    <p>Attention to detail carried through to the pool, where the limestone capping was sandblasted</p>
                    <p>for a subtle texture and laid with exact alignment to surrounding stone. The runner-bond pattern across the terrace was executed with precision, each junction refined to perfection. </p>
                </div>
            </section>
            <Footer/>
        </section>
    );
}