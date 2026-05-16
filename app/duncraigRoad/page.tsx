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
                    src="/Duncraig-Road1.webp"
                    alt="Hero"
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="text-white relative z-10 h-full p-42">
                    <h1 className="sm:text-[4rem] text-[8rem] ml-4 text-center">Duncraig Road</h1>
                    <p className="text-[1.25rem] text-center">Brick Slip Installation & Natural Stone Floor Tiling</p>
                    <div className="p-7 text-center sm:hidden lg:block lg:grid lg:grid-cols-4 lg:gap-1">
                        <div>
                            <p>Builder</p>
                            <p>RK Brine Master Builder</p>
                        </div>
                        <div>
                            <p>Architect</p>
                            <p>Peter Moran Architect</p>
                        </div>
                        <div>
                            <p>Stone Supplier</p>
                            <p>Staple Design</p>
                        </div>
                        <div>
                            <p>Photographer</p>
                            <p>Maguire Imagery</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="flex justify-evenly p-8">
                <h1 className="text-[1.25rem]">Overview</h1>
                <p className="w-220 text-[3rem] pl-2"> Known as “Marvellangelo”, this Applecross home became the backdrop for a tiling project that tested Marvell Tile and Stones’ skill, stamina, and precision. With brick tiles laid overhead on a soaring arched ceiling, each calculation, cut, and placement became a statement of craftsmanship — a balance of engineering, artistry, and purpose.</p>
            </section>
            <section>
                <div className="relative w-fit">
                    <Image
                        src="/Duncraig-Road2.webp"
                        alt="Kitchen Area"
                        width={1400}
                        height={800}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Duncraig-Road3.webp"
                        alt="Walking Dog"
                        width={600}
                        height={600}
                    />
                </div>
            </section>
            <section className="p-2">
                <div className="relative w-fit">
                    <Image
                        src="/Duncraig-Road4.webp"
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
                        src="/Duncraig-Road5.webp"
                        alt="Bathtub View"
                        width={600}
                        height={600}
                    />
                </div>
            </section>
            <section className="p-12 flex justify-between">
                <div>
                    <h1 className="text-[1.2rem]">Project Details</h1>
                </div>
                <div className="text-[1.7rem] ml-6">
                    <p> For this Applecross home —nicknamed “Marvellangelo” — Marvell Tile and Stone transformed an arched ceiling into a breathtaking brick-tiled masterpiece. Precision was everything: every tile was set overhead with a consistent 6.4mm grout joint, each measure checked to maintain rhythm, symmetry, and balance across the vault. Days of preparation went into calculating the curve so that it resolved into full bricks at its base.</p>
                    <p>The installation tested the team’s physical endurance and technical skill. Working against gravity, perched on ladders, and craning upward, each brick was locked into perfect alignment – no mean feat! Edges were finished with a refined “bird beak” detail, while joints were filled with 5mm raked-back black resin grout, creating sharp shadow lines that created depth and drama. The result? A truly stunning soaring ceiling that fuses mathematics, engineering, strength, and artistry — a true standout achievement for our team and Perth’s interior design landscape.</p>
                </div>
            </section>
            <Footer/>
        </section>
    );
}