import { NavigationMenuDemo } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-6 flex justify-center">
        <NavigationMenuDemo/>
      </div>
      <h1>This is Running</h1>
    </div>
  );
}
