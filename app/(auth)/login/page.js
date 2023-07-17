"use client";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardWithForm() {
  return (
    <div className="bg-white">
      <CardHeader className="text-right">
        <CardTitle>إنشاء حساب</CardTitle>
        <CardDescription>
          إضافة حساب جديد من خلال تعبئة البيانات
        </CardDescription>
      </CardHeader>
      <CardContent className="text-right">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">الاسم</Label>
            <Input
              className="text-right focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-500"
              id="name"
              placeholder="إدخل الاسم الرباعي كاملاً"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">البريد الإكتروني</Label>
            <Input
              className="text-right focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-500"
              id="email"
              type="email"
              placeholder="إدخل البريد الإكتروني"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">كلمة السر</Label>
            <Input
              className="text-right focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-500"
              id="password"
              placeholder="إدخل كلمة السر"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-[375px] bg-green-700">تسجيل دخول</Button>
      </CardFooter>
    </div>
  );
}
