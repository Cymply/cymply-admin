// src/entities/signup/hooks/useSelectSex.ts
import {useAtom} from "jotai/index";
import {genderAtom} from "@/store/signupStore";

export default function useSelectSex() {
  const [selectedGender, setSelectedGender] = useAtom(genderAtom)
  
  const handleGenderSelect = (value: 'male' | 'female') => {
    setSelectedGender(value)
  }
  
  return {
    selectedGender,
    handleGenderSelect,
  }
}