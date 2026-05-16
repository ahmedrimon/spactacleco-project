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
                    src="/Se-Well1.webp"
                    alt="Hero"
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="text-white relative z-10 h-full p-42">
                    <h1 className="sm:text-[4rem] text-[8rem] ml-4 text-center">Sewell Street</h1>
                    <p className="text-[1.25rem] text-center">Scala Crazy Paving Installation</p>
                    <div className="p-7 text-center sm:hidden lg:block lg:grid lg:grid-cols-4 lg:gap-1">
                        <div>
                            <p>Builder</p>
                            <p>Adam Bug</p>
                        </div>
                        <div>
                            <p>Architect</p>
                            <p>Sheshells Photography</p>
                        </div>
                        <div>
                            <p>Stone Supplier</p>
                            <p>Ascher Smith</p>
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
                        src="/Se-Well1.webp"
                        alt="Kitchen Area"
                        width={1400}
                        height={800}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Se-Well2.webp"
                        alt="Walking Dog"
                        width={500}
                        height={400}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Se-Well3.webp"
                        alt="Walking Dog"
                        width={800}
                        height={400}
                        className="h-auto object-cover"
                    />
                </div>
            </section>
            <section className="flex justify-between p-2">
                <div>
                    <Image
                        src="/Se-Well4.webp"
                        alt="Bathtub View"
                        width={600}
                        height={400}
                    />
                </div>
                <div>
                    <Image
                        src="/Se-Well5.webp"
                        alt="Shampoo Pack"
                        width={600}
                        height={200}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Se-Well6.webp"
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
                    <p> The Sewell Street staircase is a remarkable demonstration of Marvell Tile and Stone’s expertise with travertine. Using Eco Outdoor’s Scala range, every piece of stone was hand-scribed and pattern-matched to create a “crazy pave” effect that is as complex as it is beautiful. Each stair was finished with mitred edges — a detail that required absolute precision, patience, and a very steady hand. </p>
                    <p>Unlike standard installations, this project was approached like a reverse-engineered jigsaw puzzle, where every stone aligned through years of intuition and on-the-tools experience. To our knowledge, it was one of the first staircases of its kind in Australia and has since become a benchmark, even inspiring tilers in the eastern states. With perfectly consistent grout lines, seamless placement, and a deep understanding of natural stone, Marvell Tile and Stone demonstrated that crazy paving is far from over — it just takes the right hands to make it extraordinary.</p>
                </div>
            </section>
            <Footer/>
        </section>
    );
}