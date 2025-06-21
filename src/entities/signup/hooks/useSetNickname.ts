// hooks/useNickname.ts
import { useAtom } from 'jotai'
import { nicknameAtom, nicknameValidationAtom, canProceedAtom } from '@/store/nicknameStore'
import {NicknameState} from "@/entities/signup/model/types";

/**
 * 닉네임 상태 관리 훅
 */
export const useNickname = () => {
  const [nickname] = useAtom(nicknameAtom)
  const [validation] = useAtom(nicknameValidationAtom)
  const [canProceed] = useAtom(canProceedAtom)
  
  return {
    nickname,
    validation,
    canProceed,
    isValid: validation.isValid,
    isDuplicate: validation.isDuplicate,
    isChecking: validation.isChecking,
    errorMessage: validation.errorMessage,
    isEmpty: nickname.trim().length === 0,
  }
}

/**
 * 닉네임 액션 훅
 */
export const useNicknameActions = () => {
  const [, setNickname] = useAtom(nicknameAtom)
  const [, setValidation] = useAtom(nicknameValidationAtom)
  
  const updateNickname = (value: string) => {
    setNickname(value)
  }
  
  const updateValidation = (validation: Partial<NicknameState>) => {
    setValidation(prev => ({ ...prev, ...validation }))
  }
  
  const resetNickname = () => {
    setNickname('')
    setValidation({
      isValid: false,
      isDuplicate: false,
      isChecking: false,
      errorMessage: ''
    })
  }
  
  return {
    updateNickname,
    updateValidation,
    resetNickname
  }
}