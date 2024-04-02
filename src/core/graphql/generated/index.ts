import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date; output: Date };
};

export type Address = {
  __typename?: 'Address';
  _id: Scalars['ID']['output'];
  address_type: AddressTypeEnum;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customer_id?: Maybe<Scalars['ID']['output']>;
  neighborhood: Scalars['String']['output'];
  number: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  references: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

export enum AddressTypeEnum {
  CloneDeal = 'clone_deal',
  CreateAddress = 'create_address',
  SaveAddress = 'save_address',
}

export type Amount = {
  __typename?: 'Amount';
  _id: Scalars['ID']['output'];
  amount: Scalars['String']['output'];
  service: Scalars['String']['output'];
};

export type Claim = {
  __typename?: 'Claim';
  _id: Scalars['ID']['output'];
  created_by: ClaimByEnum;
  deal_id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  evidence: Array<Scalars['ID']['output']>;
  incharge_by: Scalars['ID']['output'];
  reason: ClaimReasonEnum;
  status: ClaimStatusEnum;
};

export enum ClaimByEnum {
  Buyer = 'buyer',
  Seller = 'seller',
}

export enum ClaimReasonEnum {
  BrokenItem = 'broken_item',
  DifferentItem = 'different_item',
  Fraud = 'fraud',
  NoArrive = 'no_arrive',
  Other = 'other',
}

export enum ClaimStatusEnum {
  Duplicated = 'duplicated',
  Pending = 'pending',
  Rejected = 'rejected',
  RequestInfo = 'request_info',
  Success = 'success',
  Validating = 'validating',
}

export type CreateAddressInput = {
  address_type?: AddressTypeEnum;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  neighborhood: Scalars['String']['input'];
  number: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  references: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
};

export type CreateAmountInput = {
  amount: Scalars['String']['input'];
  service: Scalars['String']['input'];
};

export type CreateClaimInput = {
  _id: Scalars['ID']['input'];
  created_by: ClaimByEnum;
  deal_id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  evidence: Array<Scalars['ID']['input']>;
  incharge_by: Scalars['ID']['input'];
  reason: ClaimReasonEnum;
  status: ClaimStatusEnum;
};

export type CreateDealInput = {
  amount: Scalars['String']['input'];
  payment_limit_date: Scalars['String']['input'];
  product: CreateProductInput;
};

export type CreateEvidenceInput = {
  description: Scalars['String']['input'];
  evidence_type: EvidenceStatusEnum;
  files: Scalars['String']['input'];
  name: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};

export type CreatePaymentInput = {
  amounts: Array<Scalars['ID']['input']>;
  status: PaymentStatusEnum;
  total_amount: Scalars['String']['input'];
  type: PaymentTypeEnum;
};

export type CreateProductInput = {
  brand: Scalars['String']['input'];
  description: Scalars['String']['input'];
  media: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product_status: ProductStatusEnum;
  save: Scalars['Boolean']['input'];
};

export type CreateShipmentInput = {
  address_id: Scalars['ID']['input'];
  provider?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTransactionInput = {
  amount: Scalars['String']['input'];
  destinatary: Scalars['String']['input'];
  origin: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateUserInput = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateValidationInput = {
  costumer_id: Scalars['ID']['input'];
  evidence: Array<Scalars['ID']['input']>;
  incharge_by?: InputMaybe<Scalars['ID']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Deal = {
  __typename?: 'Deal';
  User?: Maybe<UserResponse>;
  _id: Scalars['ID']['output'];
  amount: Scalars['String']['output'];
  code: Scalars['String']['output'];
  customer_id?: Maybe<Scalars['ID']['output']>;
  deal_type?: Maybe<Scalars['String']['output']>;
  evidence?: Maybe<Array<Scalars['ID']['output']>>;
  payment_limit_date: Scalars['DateTime']['output'];
  payments?: Maybe<Array<Scalars['ID']['output']>>;
  product?: Maybe<Product>;
  product_id: Scalars['ID']['output'];
  reject_reason?: Maybe<Scalars['String']['output']>;
  salesman?: Maybe<UserResponse>;
  salesman_id: Scalars['ID']['output'];
  shipment_id?: Maybe<Scalars['ID']['output']>;
  status: DealStatusEnum;
};

export enum DealDecideStatusEnum {
  Deal = 'deal',
  Rejected = 'rejected',
}

export enum DealStatusEnum {
  Approve = 'approve',
  Claim = 'claim',
  Deal = 'deal',
  Deleted = 'deleted',
  New = 'new',
  Rejected = 'rejected',
  Waiting = 'waiting',
}

export type DecideDealInput = {
  deal_status?: InputMaybe<DealDecideStatusEnum>;
  reject_reason?: InputMaybe<Scalars['String']['input']>;
};

export type Evidence = {
  __typename?: 'Evidence';
  _id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  evidence_type: EvidenceStatusEnum;
  files: Scalars['String']['output'];
  name: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export enum EvidenceStatusEnum {
  Asdasdas = 'asdasdas',
  Links = 'links',
  Photo = 'photo',
  Text = 'text',
}

export type FindDealParams = {
  code?: InputMaybe<Scalars['String']['input']>;
  deal_status?: InputMaybe<DealStatusEnum>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  product_name?: InputMaybe<Scalars['String']['input']>;
  product_status?: InputMaybe<ProductStatusEnum>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUserResult = {
  __typename?: 'LoginUserResult';
  token: Scalars['String']['output'];
  user: UserResponse;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Address;
  createAmount: Amount;
  createClaim: Claim;
  createDeal: Deal;
  createEvidence: Evidence;
  createPayment: Payment;
  createProduct: Product;
  createShipment: Shipment;
  createTransaction: Transaction;
  createValidation: Validation;
  decideDeal: Deal;
  recoveryPass: Scalars['Boolean']['output'];
  recoveryPassConfirm: Scalars['Boolean']['output'];
  removeAddress: Address;
  removeClaim: Claim;
  removeCostumer: UserResponse;
  removeDeal: Deal;
  removeEvidence: Evidence;
  removePayment: Payment;
  removeProduct: Product;
  removeShipment: Shipment;
  removeValidation: Validation;
  signIn: LoginUserResult;
  signUp: LoginUserResult;
  updateAddress: Address;
  updateAmount: Amount;
  updateClaim: Claim;
  updateCostumer: User;
  updateDeal: Deal;
  updateEvidence: Evidence;
  updatePayment: Payment;
  updateProduct: Product;
  updateShipment: Shipment;
  updateValidation: Validation;
};

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};

export type MutationCreateAmountArgs = {
  createAmountInput: CreateAmountInput;
};

export type MutationCreateClaimArgs = {
  createClaimInput: CreateClaimInput;
};

export type MutationCreateDealArgs = {
  createDealInput: CreateDealInput;
};

export type MutationCreateEvidenceArgs = {
  createEvidenceInput: CreateEvidenceInput;
};

export type MutationCreatePaymentArgs = {
  createPaymentInput: CreatePaymentInput;
};

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};

export type MutationCreateShipmentArgs = {
  createShipmentInput: CreateShipmentInput;
};

export type MutationCreateTransactionArgs = {
  createTransactionInput: CreateTransactionInput;
};

export type MutationCreateValidationArgs = {
  createValidationInput: CreateValidationInput;
};

export type MutationDecideDealArgs = {
  decideDealInput: DecideDealInput;
  id_deal: Scalars['String']['input'];
};

export type MutationRecoveryPassArgs = {
  UserRecoveryInput: UserRecoveryInput;
};

export type MutationRecoveryPassConfirmArgs = {
  UserRecoveryInput: UserRecoveryConfirmInput;
};

export type MutationRemoveAddressArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveClaimArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveCostumerArgs = {
  id_User: Scalars['String']['input'];
};

export type MutationRemoveDealArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveEvidenceArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemovePaymentArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveProductArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveShipmentArgs = {
  id: Scalars['String']['input'];
};

export type MutationRemoveValidationArgs = {
  id: Scalars['String']['input'];
};

export type MutationSignInArgs = {
  User: LoginUserInput;
};

export type MutationSignUpArgs = {
  createUserInput: CreateUserInput;
};

export type MutationUpdateAddressArgs = {
  id_address: Scalars['String']['input'];
  updateAddressInput: UpdateAddressInput;
};

export type MutationUpdateAmountArgs = {
  id_amount: Scalars['String']['input'];
  updateAmountInput: UpdateAmountInput;
};

export type MutationUpdateClaimArgs = {
  id_claim: Scalars['String']['input'];
  updateClaimInput: UpdateClaimInput;
};

export type MutationUpdateCostumerArgs = {
  id_User: Scalars['String']['input'];
  updateUserInput: UpdateUserInput;
};

export type MutationUpdateDealArgs = {
  id_deal: Scalars['String']['input'];
  updateDealInput: UpdateDealInput;
};

export type MutationUpdateEvidenceArgs = {
  id_evidence: Scalars['String']['input'];
  updateEvidenceInput: UpdateEvidenceInput;
};

export type MutationUpdatePaymentArgs = {
  id_payment: Scalars['String']['input'];
  updatePaymentInput: UpdatePaymentInput;
};

export type MutationUpdateProductArgs = {
  id_product: Scalars['String']['input'];
  updateProductInput: UpdateProductInput;
};

export type MutationUpdateShipmentArgs = {
  id_shipment: Scalars['String']['input'];
  updateShipmentInput: UpdateShipmentInput;
};

export type MutationUpdateValidationArgs = {
  id_validation: Scalars['String']['input'];
  updateValidationInput: UpdateValidationInput;
};

export type Payment = {
  __typename?: 'Payment';
  _id: Scalars['ID']['output'];
  amounts: Array<Scalars['ID']['output']>;
  status: PaymentStatusEnum;
  total_amount: Scalars['String']['output'];
  type: PaymentTypeEnum;
};

export enum PaymentStatusEnum {
  Failed = 'failed',
  InProgress = 'in_progress',
  Pending = 'pending',
  Rejected = 'rejected',
  Success = 'success',
}

export enum PaymentTypeEnum {
  Pay = 'pay',
  Payment = 'payment',
  Refund = 'refund',
}

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  brand: Scalars['String']['output'];
  costumer_id?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  media: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product_status: ProductStatusEnum;
};

export enum ProductStatusEnum {
  New = 'new',
  Old = 'old',
  ReBuild = 're_build',
  SemiNew = 'semi_new',
  Used = 'used',
  UsedLikeNew = 'used_like_new',
}

export type Query = {
  __typename?: 'Query';
  address: Address;
  amount: Amount;
  claim: Claim;
  deal: Deal;
  evidence: Evidence;
  findAddressByUser: Array<Address>;
  findDealsByUser: Array<Deal>;
  findOneCostumer: UserResponse;
  payment: Payment;
  product: Product;
  productsbycostumer: Array<Product>;
  shipment: Shipment;
  transaction: Transaction;
  transactions: Array<Transaction>;
  userMe: UserResponse;
  validation: Validation;
  validations: Array<Validation>;
};

export type QueryAddressArgs = {
  id: Scalars['String']['input'];
};

export type QueryAmountArgs = {
  id: Scalars['String']['input'];
};

export type QueryClaimArgs = {
  id: Scalars['String']['input'];
};

export type QueryDealArgs = {
  id: Scalars['String']['input'];
};

export type QueryEvidenceArgs = {
  id: Scalars['String']['input'];
};

export type QueryFindDealsByUserArgs = {
  findDealParams: FindDealParams;
};

export type QueryFindOneCostumerArgs = {
  id: Scalars['String']['input'];
};

export type QueryPaymentArgs = {
  id: Scalars['String']['input'];
};

export type QueryProductArgs = {
  id: Scalars['String']['input'];
};

export type QueryProductsbycostumerArgs = {
  costumer_id: Scalars['String']['input'];
};

export type QueryShipmentArgs = {
  id: Scalars['String']['input'];
};

export type QueryTransactionArgs = {
  id: Scalars['String']['input'];
};

export type QueryValidationArgs = {
  id: Scalars['String']['input'];
};

export type Shipment = {
  __typename?: 'Shipment';
  _id: Scalars['ID']['output'];
  address_id: Scalars['ID']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  tracking_number?: Maybe<Scalars['String']['output']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  _id: Scalars['ID']['output'];
  amount: Scalars['String']['output'];
  destinatary: Scalars['String']['output'];
  origin: Scalars['String']['output'];
  type: TransactionTypesEnum;
};

export enum TransactionTypesEnum {
  Payment = 'payment',
  Payoff = 'payoff',
  Refund = 'refund',
}

export type UpdateAddressInput = {
  address_type?: InputMaybe<AddressTypeEnum>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  references?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAmountInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateClaimInput = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  created_by?: InputMaybe<ClaimByEnum>;
  deal_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  evidence?: InputMaybe<Array<Scalars['ID']['input']>>;
  incharge_by?: InputMaybe<Scalars['ID']['input']>;
  reason?: InputMaybe<ClaimReasonEnum>;
  status?: InputMaybe<ClaimStatusEnum>;
};

export type UpdateDealInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  payment_limit_date?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<CreateProductInput>;
};

export type UpdateEvidenceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  evidence_type?: InputMaybe<EvidenceStatusEnum>;
  files?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentInput = {
  amounts?: InputMaybe<Array<Scalars['ID']['input']>>;
  status?: InputMaybe<PaymentStatusEnum>;
  total_amount?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PaymentTypeEnum>;
};

export type UpdateProductInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product_status?: InputMaybe<ProductStatusEnum>;
  save?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateShipmentInput = {
  address_id?: InputMaybe<Scalars['ID']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  tracking_number?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateValidationInput = {
  evidence: Array<Scalars['ID']['input']>;
  incharge_by?: InputMaybe<Scalars['ID']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ValidationStatusEnum>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  birthday?: Maybe<Scalars['String']['output']>;
  clabe?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  lowercaseEmail: Scalars['String']['output'];
  name: Scalars['String']['output'];
  otpToken?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  role: UserRoleEnum;
  status: UserStatusEnum;
  timestamp: Scalars['DateTime']['output'];
};

export type UserRecoveryConfirmInput = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  tokenOTP: Scalars['String']['input'];
};

export type UserRecoveryInput = {
  email: Scalars['String']['input'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  _id: Scalars['String']['output'];
  birthday?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['DateTime']['output'];
};

export enum UserRoleEnum {
  User = 'User',
  Admin = 'admin',
}

export enum UserStatusEnum {
  Banned = 'banned',
  Deleted = 'deleted',
  Incoming = 'incoming',
  Validate = 'validate',
}

export type Validation = {
  __typename?: 'Validation';
  _id: Scalars['ID']['output'];
  costumer_id: Scalars['ID']['output'];
  evidence: Array<Scalars['ID']['output']>;
  incharge_by?: Maybe<Scalars['ID']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status: ValidationStatusEnum;
};

export enum ValidationStatusEnum {
  Approved = 'approved',
  Created = 'created',
  Evaluating = 'evaluating',
  Rejected = 'rejected',
}

export type SignInMutationVariables = Exact<{
  user: LoginUserInput;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    __typename?: 'LoginUserResult';
    token: string;
    user: {
      __typename?: 'UserResponse';
      _id: string;
      birthday?: string | null;
      email: string;
      name: string;
      role?: string | null;
      status?: string | null;
      timestamp: Date;
    };
  };
};

export type SignUpMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  signUp: {
    __typename?: 'LoginUserResult';
    token: string;
    user: {
      __typename?: 'UserResponse';
      _id: string;
      birthday?: string | null;
      email: string;
      name: string;
      role?: string | null;
      status?: string | null;
      timestamp: Date;
    };
  };
};

export const SignInDocument = gql`
  mutation SignIn($user: LoginUserInput!) {
    signIn(User: $user) {
      token
      user {
        _id
        birthday
        email
        name
        role
        status
        timestamp
      }
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options,
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp($createUserInput: CreateUserInput!) {
    signUp(createUserInput: $createUserInput) {
      token
      user {
        _id
        birthday
        email
        name
        role
        status
        timestamp
      }
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    options,
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
