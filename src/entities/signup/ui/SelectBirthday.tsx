'use client'

// src/entities/signup/ui/SelectBirthday.tsx
import { useState } from 'react'
import { atom, useAtom } from 'jotai'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

// Jotai atom for managing birthday state
export const birthdayAtom = atom<string>('')

export default function SelectBirthday() {
  const [birthday, setBirthday] = useAtom(birthdayAtom)
  const [isFocused, setIsFocused] = useState(false)
  
  const handleBirthdayChange = (value: string) => {
    // 숫자만 입력 허용
    const numbersOnly = value.replace(/[^\d]/g, '')
    
    // 최대 8자리까지만 허용 (YYYYMMDD)
    if (numbersOnly.length <= 8) {
      setBirthday(numbersOnly)
    }
  }
  
  // 생년월일 포맷팅 (YYYY-MM-DD 형태로 표시)
  const formatBirthday = (value: string) => {
    if (value.length <= 4) return value
    if (value.length <= 6) return `${value.slice(0, 4)}-${value.slice(4)}`
    return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`
  }
  
  const displayValue = formatBirthday(birthday)
  const isValid = birthday.length === 8
  
  return (
    <div className="space-y-4 mt-12">
      {/* 생년월일 제목 */}
      <Label className="text-black text-3xl font-bold font-['Pretendard'] leading-9">
        생년월일
      </Label>
      
      {/* 생년월일 입력 필드 */}
      <div className="relative">
        <div className={cn(
          "w-full h-28 rounded-[10px] border transition-all duration-200",
          isFocused ? "border-blue-500 ring-2 ring-blue-200" : "border-zinc-400",
          isValid && "border-green-500"
        )}>
          <Input
            type="text"
            placeholder="생년월일을 입력해주세요."
            value={displayValue}
            onChange={(e) => handleBirthdayChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full h-full !text-3xl font-normal font-['Pretendard'] leading-9 border-0 rounded-[10px] bg-transparent px-6",
              "placeholder:text-zinc-400 placeholder:text-3xl focus-visible:ring-0 focus-visible:ring-offset-0"
            )}
            maxLength={10} // YYYY-MM-DD 형태의 최대 길이
          />
          
          {/* 달력 아이콘 */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
            <CalendarIcon className={cn(
              "h-8 w-8 transition-colors duration-200",
              isFocused ? "text-blue-500" : "text-zinc-400",
              isValid && "text-green-500"
            )} />
          </div>
        </div>
      </div>
      
      {/* 도움말 텍스트 */}
      <div className="text-zinc-400 text-lg font-normal font-['Pretendard'] leading-6">
        YYYYMMDD 형식으로 입력해주세요 (예: 19960324)
      </div>
    </div>
  )
}