"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CardWithForm() {
  return (
    <Card className="md:w-[750px] h-[550px] rounded-none border-0 text-right">
      <CardHeader>
        <CardTitle>إنشاء حساب</CardTitle>
        <CardDescription>إضافة حساب جديد من خلال تعبئة البيانات</CardDescription>
      </CardHeader>
      <CardContent>

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
              <Label htmlFor="password">البريد الإكتروني</Label>
              <Input
                className="text-right focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-500"
                id="password"
                placeholder="إدخل البريد الإكتروني"
              />
            </div>

          </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="w-[375px]">تسجيل دخول</Button>
      </CardFooter>
    </Card>
  );
}
