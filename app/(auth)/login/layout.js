import Image from "next/image";
import logo from "@/public/logo.svg"

export default function layout({ children }) {
  return (
    <div className="bg-gray-50 py-4 h-[100vh] bg-primary">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <Image src={logo} className="sm:w-[360px] w-[240px] m-auto mb-4" alt="logo school app" priority />
        <div className="mx-auto max-w-2xl lg:text-center">{children}</div>
      </div>
    </div>
  );
}
