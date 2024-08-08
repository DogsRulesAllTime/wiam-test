import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { PersonalInfo } from "../common/personal";
import { AddressWorkInfo } from "../common/adress";
import { LoanParameters } from "../common/loan";

interface AppContextProps {
  personalInfo: PersonalInfo | null;
  addressWorkInfo: AddressWorkInfo | null;
  loanParameters: LoanParameters | null;
  handleSetPersonalInfo: (info: PersonalInfo) => void;
  handleSetAddressWorkInfo: (info: AddressWorkInfo) => void;
  handleSetLoanParameters: (info: LoanParameters) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [addressWorkInfo, setAddressWorkInfo] =
    useState<AddressWorkInfo | null>(null);
  const [loanParameters, setLoanParameters] = useState<LoanParameters | null>(
    null,
  );

  const handleSetPersonalInfo = useCallback((info: PersonalInfo) => {
    setPersonalInfo(info);
  }, []);

  const handleSetAddressWorkInfo = useCallback((info: AddressWorkInfo) => {
    setAddressWorkInfo(info);
  }, []);

  const handleSetLoanParameters = useCallback((info: LoanParameters) => {
    setLoanParameters(info);
  }, []);

  return (
    <AppContext.Provider
      value={{
        personalInfo,
        addressWorkInfo,
        loanParameters,
        handleSetPersonalInfo,
        handleSetAddressWorkInfo,
        handleSetLoanParameters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
