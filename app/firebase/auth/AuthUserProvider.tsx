import { createContext, useContext } from "react";
// import { AuthType, UserLoginState } from "./AuthContext";
import { UserCredential } from "firebase/auth";
import { PerfumeProps } from "../perfume/perfume";
import { useFirebaseAuth } from "./useFirebaseAuth";
import { UserType } from "./user";

export enum UserLoginState {
  Idle,
  Success,
  Failed,
  Loading,
}

export interface AuthType {
  user: UserType;
  loginState: UserLoginState;
  signUp: (
    username: string,
    email: string,
    password: string,
  ) => Promise<UserCredential | undefined> | undefined;
  logIn: (email: string, password: string) => Promise<UserCredential | undefined>;
  logInWithGoogle: () => Promise<UserCredential> | undefined;
  logOut: () => Promise<void>;
  checkUserVerified: () => Promise<Boolean | undefined>;
  updateAddress: (text: string) => Promise<void>;
  updateName: (text: string) => Promise<void>;
  updateBirthdate: (text: Date) => Promise<void>;
  updateNumber: (text: string) => Promise<void>;
  updateGender: (text: string) => Promise<void>;
  checkoutCart: (
    perfumes: PerfumeProps[],
    amounts: number[],
    total: number,
  ) => Promise<void>;
  addToCart: (perfumeId: string, amount: number) => Promise<void>;
  deleteFromCart: (perfumeId: string) => Promise<void>;
  updateAmountOnCart: (
    perfumeId: string,
    amount: number,
    increment: boolean,
  ) => Promise<void>;
}

export const authUserContext = createContext<AuthType>({
    user: {
      id: null,
      name: null,
      email: null,
      number: null,
      gender: null,
      birthdate: null,
      address: null,
      wishlist: [],
      cart: [],
      cartAmount: [],
    },
    loginState: UserLoginState.Idle,
    signUp: async function (
      username: string,
      email: string,
      password: string,
    ): Promise<UserCredential | undefined>{
        throw new Error("Function not implemented.");
    },
    logIn: function (email: string, password: string): Promise<UserCredential | undefined>  {
      throw new Error("Function not implemented.");
    },
    logInWithGoogle: function (): Promise<UserCredential> | undefined {
      throw new Error("Function not implemented.");
    },
    logOut: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
    checkUserVerified: function (): Promise<Boolean | undefined> {
      throw new Error("Function not implemented.");
    },
    updateAddress: function (address: string): Promise<void> {
      throw new Error("Function not implemented.");
    },
    updateName: function (name: string): Promise<void> {
      throw new Error("Function not implemented.");
    },
    updateBirthdate: function (birhtdate: Date): Promise<void> {
      throw new Error("Function not implemented.");
    },
    updateNumber: function (number: string): Promise<void> {
      throw new Error("Function not implemented.");
    },
    updateGender: function (gender: string): Promise<void> {
      throw new Error("Function not implemented.");
    },
    checkoutCart: function (
      perfumes: PerfumeProps[],
      amounts: number[],
      total: number,
    ): Promise<void> {
      throw new Error("Function not implemented.");
    },
    addToCart: function (perfumeId: string, amount: number): Promise<void> {
      throw new Error("Function not implemented");
    },
    deleteFromCart: function (perfumeId: string): Promise<void> {
      throw new Error("Function not implemented");
    },
    updateAmountOnCart: function (
      perfumeId: string,
      amount: number,
      increment: boolean,
    ): Promise<void> {
      throw new Error("Function not implemented");
    },
  });

  export function AuthUserProvider({ children }:  {children: React.ReactNode}) {
    const auth = useFirebaseAuth();
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
  }

  export const useAuth = () => useContext(authUserContext);