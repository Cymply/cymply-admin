// src/features/signup/ui/ProfileForm.tsx (새로운 컴포넌트)
'use client'

import SelectSex from "@/entities/signup/ui/SelectSex"
import SelectBirthday from "@/entities/signup/ui/SelectBirthday"

export default function SignupProfileForm() {
  return (
    <div className="space-y-12">
      <SelectSex />
      <SelectBirthday />
    </div>
  )
}