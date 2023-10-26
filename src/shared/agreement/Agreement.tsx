import { AgreementContainer, AgreementLink } from './Agreement.styled';

export const Agreement = () => {
  return (
    <AgreementContainer>
      <span>Продовжуючи, ви погоджуєтеся з</span>
      <AgreementLink href="#">Умовами використання</AgreementLink>
      <span>та</span>
      <AgreementLink href="#">Політикою конфіденційності</AgreementLink>
    </AgreementContainer>
  );
};
