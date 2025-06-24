// src/entities/signup/ui/SelectSex.tsx (relative 레이아웃으로 수정)
'use client'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import useSelectSex from "@/entities/signup/hooks/useSelectSex";

export default function SelectSex() {
  const {
    selectedGender,
    handleGenderSelect,
  } = useSelectSex();
  
  return (
    <div className="space-y-4">
      {/* 성별 제목 */}
      <Label className="text-black text-3xl font-bold font-['Pretendard'] leading-9">
        성별
      </Label>
      
      {/* Radio Group으로 성별 선택 */}
      <RadioGroup
        value={selectedGender || undefined}
        onValueChange={(value) => handleGenderSelect(value as 'M' | 'F')}
        className="flex gap-6"
      >
        {/* 남성 선택 */}
        <div className="relative">
          <RadioGroupItem
            value="M"
            id="male"
            className="sr-only"
          />
          <Label
            htmlFor="male"
            className={cn(
              "flex items-center justify-center w-80 h-28 rounded-[10px] cursor-pointer transition-all duration-200 ease-in-out",
              "text-3xl font-semibold font-['Pretendard'] leading-9",
              selectedGender === 'M'
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-stone-50 text-zinc-400 hover:bg-stone-100'
            )}
          >
            남성
          </Label>
        </div>
        
        {/* 여성 선택 */}
        <div className="relative">
          <RadioGroupItem
            value="F"
            id="female"
            className="sr-only"
          />
          <Label
            htmlFor="female"
            className={cn(
              "flex items-center justify-center w-80 h-28 rounded-[10px] cursor-pointer transition-all duration-200 ease-in-out",
              "text-3xl font-semibold font-['Pretendard'] leading-9",
              selectedGender === 'F'
                ? 'bg-pink-500 text-white shadow-lg scale-105'
                : 'bg-stone-50 text-zinc-400 hover:bg-stone-100'
            )}
          >
            여성
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
