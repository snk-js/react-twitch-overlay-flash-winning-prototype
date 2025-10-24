import VictoryScene from "./components/WinningScene/Victory";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Capture.PNG"
          alt="Background"
          fill
          className="object-cover blur-md"
          priority
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-10 h-full w-full">
        <VictoryScene />
      </div>
    </div>
  );
}
