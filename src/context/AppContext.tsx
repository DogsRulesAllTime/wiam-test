import React, { createContext, PropsWithChildren,  useState } from 'react';
import { PersonalInfo } from '../common/personal';
import { AddressWorkInfo } from '../common/adress';
import { LoanParameters } from '../common/loan';






interface AppContextProps {
  personalInfo: PersonalInfo | null;
  addressWorkInfo: AddressWorkInfo | null;
  loanParameters: LoanParameters | null;
  setPersonalInfo: (info: PersonalInfo) => void;
  setAddressWorkInfo: (info: AddressWorkInfo) => void;
  setLoanParameters: (info: LoanParameters) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [addressWorkInfo, setAddressWorkInfo] = useState<AddressWorkInfo | null>(null);
  const [loanParameters, setLoanParameters] = useState<LoanParameters | null>(null);

  return (
    <AppContext.Provider value={{ personalInfo, addressWorkInfo, loanParameters, setPersonalInfo, setAddressWorkInfo, setLoanParameters }}>
      {children}
    </AppContext.Provider>
  );
};


