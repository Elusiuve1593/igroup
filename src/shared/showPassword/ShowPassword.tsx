import { PasswordIcon } from './ShowPassword.styled';

export type ShowPasswordProps = {
  showPassword: boolean | undefined
  togglePasswordVisibility?: () => void | undefined
}

export const ShowPassword = ({
  showPassword,
  togglePasswordVisibility,
}: ShowPasswordProps) => {
  const iconName = showPassword ? "icon-eye" : "icon-eye-off"
  return (
    <>
      <PasswordIcon
        name={iconName}
        width={24}
        height={24}
        onClick={togglePasswordVisibility}
      />
    </>
  );
};
