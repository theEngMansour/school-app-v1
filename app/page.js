"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const data = [
  {
    src: "/icons/calendar-clock.svg",
    title: "البرنامج الأسبوعي",
    desc: "استعراض جميع الصفوف التدريسية التي يتم إعطاؤها",
    link: "/",
  },
  {
    src: "/icons/shopping-bag.svg",
    title: "جدول الوظائف",
    desc: "استعراض جميع الوظائف التي يتم تقريرها",
    link: "/",
  },
  {
    src: "/icons/alarm-clock.svg",
    title: "جدول الامتحانات",
    desc: "استعراض جميع الامتحانات الفصلية للطالب",
    link: "/",
  },
  {
    src: "/icons/graduation-cap.svg",
    title: "نتائج الامتحانات",
    desc: "استعراض جميع نتائج الامتحانات السنوية للطالب",
    link: "/",
  },
  {
    src: "/icons/bell.svg",
    title: "الإشعارات",
    desc: "استعراض جميع الإشعارات المرسلة من إدراة المدرسة",
    link: "/",
  },
];
export default function page() {
  return (
    <div dir="rtl" className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-2">
      {data.map((data, index) => (
        <div key={index} className="flex flex-col items-center bg-white text-center select-none">
          <div className="bg-primary_app w-20 h-20 rounded-full text-center mt-8 leading-[80px] flex justify-center fill-white">
           <Image src={data.src} alt={data.title} width={40} height={40} priority />
          </div>
          <h1 className="text-4xl mt-4 font-black">{data.title}</h1>
          <p className="mt-2 text-gray-500 font-medium">{data.desc}</p>
          <Link href={data.link}>
            <Button className="mt-6 w-40 bg-primary_app mb-8">عرض</Button>
          </Link>
        </div>
      ))}
      <div className="flex flex-col items-center bg-white text-center select-none">
        <div className="bg-red-700 w-20 h-20 rounded-full text-center mt-8 leading-[80px] flex justify-center">
        <Image src={"/icons/handshake.svg"} alt={"logout"} width={40} height={40} priority />
        </div>
        <h1 className="text-4xl mt-4 font-black">خروج</h1>
        <p className="mt-2 text-gray-500 font-medium">تسجيل خروج من التطبيق</p>
        <Link href={"/"}>
          <Button className="mt-6 w-40 bg-red-700 mb-8">تسجيل خروج</Button>
        </Link>
      </div>
    </div>
  );
}
