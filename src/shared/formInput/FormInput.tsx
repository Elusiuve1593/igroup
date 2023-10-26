import React from 'react'
import { InputContainer } from './FormInput.styled'
import { Icon } from '../icons/Icon'
import { ShowPassword } from '../../shared/showPassword/ShowPassword'

export const FormInput = ({
  hasError,
  isLast,
  label,
  showPassword,
  togglePasswordVisibility,
  children,
}: {
  hasError: boolean;
  isLast?: boolean | undefined;
  label: string;
  showPassword?: boolean | undefined;
  togglePasswordVisibility?: () => void | undefined;
  children?: React.ReactNode;
}) => {
  return (
    <InputContainer hasError={hasError} isLast={isLast}>
      {children}
      <div>
        <label>{label}</label>
        <Icon
          name="error-icon"
          width={16}
          height={16} />
      </div>
      {label === "Пароль" && (
        <ShowPassword
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      )}
    </InputContainer>
  )
}