import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import React, { useState } from "react";

const Wireframe = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="bg-[#f7e7c8] grid justify-items-center [align-items:start] w-screen">
      <div className="bg-[#f7e7c8] w-[1440px] h-[1024px] relative">
        <div className="absolute w-[648px] h-[1024px] top-0 left-[792px] bg-[#5b7742]">
          <div className="relative w-[647px] h-[247px] top-[388px] left-0.5">
            <div className="absolute top-0 left-24 [font-family:'Bebas_Neue-Regular',Helvetica] font-normal text-black text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
              WELCOME BACK
            </div>

            <div className="absolute w-[643px] top-[130px] left-0 [font-family:'Cabin-Regular',Helvetica] font-normal text-white text-[32px] text-center tracking-[0] leading-[normal]">
              GearGo dibuat untuk orang-orang <br />
              yang ingin menyewa keperluan
              <br />
              untuk hiking &amp; camping
            </div>
          </div>
        </div>

        <div className="absolute w-[643px] h-[202px] top-[229px] left-[77px]">
          <div className="absolute w-[643px] h-36 top-[58px] left-0">
            <div className="absolute w-[643px] top-[57px] left-0 [font-family:'Cabin-Regular',Helvetica] font-normal text-[#204400] text-[32px] text-center tracking-[0] leading-[normal]">
              Sobat Geargoers
            </div>

            <img
              className="left-[54px] absolute w-36 h-36 top-0 aspect-[1] object-cover"
              alt="Chatgpt image agu"
              src=""
            />

            <img
              className="left-[444px] absolute w-36 h-36 top-0 aspect-[1] object-cover"
              alt="Chatgpt image agu"
              src=""
            />
          </div>

          <div className="absolute top-0 left-[231px] [font-family:'Bebas_Neue-Regular',Helvetica] font-normal text-[#204400] text-8xl tracking-[0] leading-[normal] whitespace-nowrap">
            Hello
          </div>
        </div>

        <div className="absolute w-[554px] h-[72px] top-[482px] left-[122px]">
          <Card className="w-[552px] h-[72px] bg-[#d9d9d9] rounded-[50px] border-none">
            <CardContent className="relative p-0 h-full">
              <Mail className="absolute w-[50px] h-[50px] top-[11px] left-[34px] text-[#a6a6a6]" />
              <Input
                className="absolute w-[263px] top-[22px] left-[103px] bg-transparent border-none [font-family:'Cabin-Regular',Helvetica] font-normal text-[#a6a6a6] text-2xl tracking-[0] leading-[normal] placeholder:text-[#a6a6a6] focus-visible:ring-0"
                placeholder="Masukan E-mail Anda"
                type="email"
              />
            </CardContent>
          </Card>
        </div>

        <div className="absolute w-[554px] h-[72px] top-[586px] left-[122px]">
          <Card className="w-[552px] h-[72px] bg-[#d9d9d9] rounded-[50px] border-none">
            <CardContent className="relative p-0 h-full">
              <Lock className="absolute w-[50px] h-[50px] top-[11px] left-[34px] text-[#a6a6a6]" />
              <Input
                className="absolute w-[263px] top-[22px] left-[103px] bg-transparent border-none [font-family:'Cabin-Regular',Helvetica] font-normal text-[#a6a6a6] text-2xl tracking-[0] leading-[normal] placeholder:text-[#a6a6a6] focus-visible:ring-0"
                placeholder="Masukan Kata Sandi"
                type="password"
              />
            </CardContent>
          </Card>
        </div>

        <div className="absolute w-[218px] h-12 top-[763px] left-[290px]">
          <Button className="w-[216px] h-12 bg-[#5b7742] rounded-[50px] hover:bg-[#4a6235] h-auto">
            <div className="w-[68px] [font-family:'Cabin-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[normal]">
              Masuk
            </div>
          </Button>
        </div>

        <div className="absolute w-[500px] h-[29px] top-[683px] left-[156px]">
          <div className="absolute w-[168px] top-0 left-[330px] [font-family:'Cabin-Regular',Helvetica] font-normal text-[#005705] text-2xl tracking-[0] leading-[normal] cursor-pointer hover:underline">
            Lupa kata sandi?
          </div>

          <div className="absolute w-[205px] h-[29px] top-0 left-0 flex items-center">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={setRememberMe}
              className="w-[25px] h-[25px] mr-[10px] data-[state=checked]:bg-[#5b7742] data-[state=checked]:border-[#5b7742]"
            />
            <label
              htmlFor="remember"
              className="[font-family:'Cabin-Regular',Helvetica] font-normal text-[#005705] text-2xl tracking-[0] leading-[normal] cursor-pointer"
            >
              Ingatkan aku
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
