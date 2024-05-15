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
  addressType: AddressTypeEnum;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customerId?: Maybe<Scalars['ID']['output']>;
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
  createdBy: ClaimByEnum;
  dealId: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  evidence: Array<Scalars['ID']['output']>;
  inchargeBy: Scalars['ID']['output'];
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
  addressType?: AddressTypeEnum;
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
  createdBy: ClaimByEnum;
  dealId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  evidence: Array<Scalars['ID']['input']>;
  inchargeBy: Scalars['ID']['input'];
  reason: ClaimReasonEnum;
  status: ClaimStatusEnum;
};

export type CreateDealInput = {
  amount: Scalars['String']['input'];
  paymentLimitDate: Scalars['String']['input'];
  product: CreateProductInput;
};

export type CreateEvidenceInput = {
  description: Scalars['String']['input'];
  evidenceType: EvidenceStatusEnum;
  files: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateFeatureflagInput = {
  featureName: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreatePaymentInput = {
  amounts: Array<Scalars['ID']['input']>;
  status: PaymentStatusEnum;
  totalAmount: Scalars['String']['input'];
  type: PaymentTypeEnum;
};

export type CreateProductInput = {
  brand: Scalars['String']['input'];
  description: Scalars['String']['input'];
  media: Scalars['String']['input'];
  name: Scalars['String']['input'];
  productStatus: ProductStatusEnum;
  save: Scalars['Boolean']['input'];
};

export type CreateShipmentInput = {
  addressId: Scalars['ID']['input'];
  provider?: InputMaybe<Scalars['String']['input']>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
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
  costumerId: Scalars['ID']['input'];
  evidence: Array<Scalars['ID']['input']>;
  inchargeBy?: InputMaybe<Scalars['ID']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Deal = {
  __typename?: 'Deal';
  _id: Scalars['ID']['output'];
  amount: Scalars['String']['output'];
  code?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<UserResponse>;
  customerId?: Maybe<Scalars['ID']['output']>;
  dealType?: Maybe<Scalars['String']['output']>;
  evidence?: Maybe<Array<Scalars['ID']['output']>>;
  paymentLimitDate: Scalars['DateTime']['output'];
  payments?: Maybe<Array<Scalars['ID']['output']>>;
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
  rejectReason?: Maybe<Scalars['String']['output']>;
  salesman?: Maybe<UserResponse>;
  salesmanId: Scalars['ID']['output'];
  shipmentId?: Maybe<Scalars['ID']['output']>;
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
  dealStatus?: InputMaybe<DealDecideStatusEnum>;
  rejectReason?: InputMaybe<Scalars['String']['input']>;
};

export type Evidence = {
  __typename?: 'Evidence';
  _id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  evidenceType: EvidenceStatusEnum;
  files: Scalars['String']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export enum EvidenceStatusEnum {
  Asdasdas = 'asdasdas',
  Links = 'links',
  Photo = 'photo',
  Text = 'text',
}

export type Featureflag = {
  __typename?: 'Featureflag';
  _id: Scalars['ID']['output'];
  featureName: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type FindDealParams = {
  code?: InputMaybe<Scalars['String']['input']>;
  dealStatus?: InputMaybe<DealStatusEnum>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type InviteDealOtp = {
  __typename?: 'InviteDealOTP';
  code: Scalars['String']['output'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUserResult = {
  __typename?: 'LoginUserResult';
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: UserResponse;
};

export type Mutation = {
  __typename?: 'Mutation';
  addressCreate: Address;
  addressRemove: Address;
  addressUpdate: Address;
  amountCreate: Amount;
  amountUpdate: Amount;
  authRecoveryPass: Scalars['Boolean']['output'];
  authRecoveryPassConfirm: Scalars['Boolean']['output'];
  authRecoveryPassVerifyOtp: RecoveryVerifyOtTokenResult;
  authRefreshTokens: RefreshTokenResult;
  authSignIn: LoginUserResult;
  authSignUp: LoginUserResult;
  claimCreate: Claim;
  claimRemove: Claim;
  claimUpdate: Claim;
  dealCreate: Deal;
  dealDecision: Deal;
  dealJoin: Deal;
  dealRemove: Deal;
  dealUpdate: Deal;
  evidenceCreate: Evidence;
  evidenceRemove: Evidence;
  evidenceUpdate: Evidence;
  featureFlagCreate: Featureflag;
  featureFlagRemove: Featureflag;
  paymentCreate: Payment;
  paymentRemove: Payment;
  paymentUpdate: Payment;
  productCreate: Product;
  productRemove: Product;
  productUpdate: Product;
  shipmentCreate: Shipment;
  shipmentRemove: Shipment;
  shipmentUpdate: Shipment;
  transactionCreate: Transaction;
  userRemove: UserResponse;
  userUpdate: User;
  validationCreate: Validation;
  validationRemove: Validation;
  validationUpdate: Validation;
};

export type MutationAddressCreateArgs = {
  createAddressInput: CreateAddressInput;
};

export type MutationAddressRemoveArgs = {
  idAddress: Scalars['String']['input'];
};

export type MutationAddressUpdateArgs = {
  idAddress: Scalars['String']['input'];
  updateAddressInput: UpdateAddressInput;
};

export type MutationAmountCreateArgs = {
  createAmountInput: CreateAmountInput;
};

export type MutationAmountUpdateArgs = {
  amountId: Scalars['String']['input'];
  updateAmountInput: UpdateAmountInput;
};

export type MutationAuthRecoveryPassArgs = {
  UserRecoveryInput: UserRecoveryInput;
};

export type MutationAuthRecoveryPassConfirmArgs = {
  UserRecoveryInput: UserRecoveryConfirmInput;
};

export type MutationAuthRecoveryPassVerifyOtpArgs = {
  UserRecoveryVerifyOtpInput: UserRecoveryVerifyOtpInput;
};

export type MutationAuthRefreshTokensArgs = {
  refreshToken: Scalars['String']['input'];
};

export type MutationAuthSignInArgs = {
  User: LoginUserInput;
};

export type MutationAuthSignUpArgs = {
  createUserInput: CreateUserInput;
};

export type MutationClaimCreateArgs = {
  createClaimInput: CreateClaimInput;
};

export type MutationClaimRemoveArgs = {
  claimId: Scalars['String']['input'];
};

export type MutationClaimUpdateArgs = {
  claimId: Scalars['String']['input'];
  updateClaimInput: UpdateClaimInput;
};

export type MutationDealCreateArgs = {
  createDealInput: CreateDealInput;
};

export type MutationDealDecisionArgs = {
  dealId: Scalars['String']['input'];
  decideDealInput: DecideDealInput;
};

export type MutationDealJoinArgs = {
  code: Scalars['String']['input'];
};

export type MutationDealRemoveArgs = {
  dealId: Scalars['String']['input'];
};

export type MutationDealUpdateArgs = {
  dealId: Scalars['String']['input'];
  updateDealInput: UpdateDealInput;
};

export type MutationEvidenceCreateArgs = {
  createEvidenceInput: CreateEvidenceInput;
};

export type MutationEvidenceRemoveArgs = {
  evidenceId: Scalars['String']['input'];
};

export type MutationEvidenceUpdateArgs = {
  evidenceId: Scalars['String']['input'];
  updateEvidenceInput: UpdateEvidenceInput;
};

export type MutationFeatureFlagCreateArgs = {
  createFeatureflagInput: CreateFeatureflagInput;
};

export type MutationFeatureFlagRemoveArgs = {
  featureFlagId: Scalars['String']['input'];
};

export type MutationPaymentCreateArgs = {
  createPaymentInput: CreatePaymentInput;
};

export type MutationPaymentRemoveArgs = {
  paymentId: Scalars['String']['input'];
};

export type MutationPaymentUpdateArgs = {
  paymentId: Scalars['String']['input'];
  updatePaymentInput: UpdatePaymentInput;
};

export type MutationProductCreateArgs = {
  createProductInput: CreateProductInput;
};

export type MutationProductRemoveArgs = {
  productId: Scalars['String']['input'];
};

export type MutationProductUpdateArgs = {
  productId: Scalars['String']['input'];
  updateProductInput: UpdateProductInput;
};

export type MutationShipmentCreateArgs = {
  createShipmentInput: CreateShipmentInput;
};

export type MutationShipmentRemoveArgs = {
  shipmentId: Scalars['String']['input'];
};

export type MutationShipmentUpdateArgs = {
  shipmentId: Scalars['String']['input'];
  updateShipmentInput: UpdateShipmentInput;
};

export type MutationTransactionCreateArgs = {
  createTransactionInput: CreateTransactionInput;
};

export type MutationUserRemoveArgs = {
  userId: Scalars['String']['input'];
};

export type MutationUserUpdateArgs = {
  updateUserInput: UpdateUserInput;
  userId: Scalars['String']['input'];
};

export type MutationValidationCreateArgs = {
  createValidationInput: CreateValidationInput;
};

export type MutationValidationRemoveArgs = {
  validationId: Scalars['String']['input'];
};

export type MutationValidationUpdateArgs = {
  updateValidationInput: UpdateValidationInput;
  validationId: Scalars['String']['input'];
};

export type Payment = {
  __typename?: 'Payment';
  _id: Scalars['ID']['output'];
  amounts: Array<Scalars['ID']['output']>;
  status: PaymentStatusEnum;
  totalAmount: Scalars['String']['output'];
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
  costumerId?: Maybe<Scalars['ID']['output']>;
  description: Scalars['String']['output'];
  media: Scalars['String']['output'];
  name: Scalars['String']['output'];
  productStatus: ProductStatusEnum;
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
  addressByUser: Array<Address>;
  addressFindOne: Address;
  amountFindOne: Amount;
  claimFindAll: Array<Claim>;
  claimFindOne: Claim;
  dealFindOne: Deal;
  dealGetInviteCode: InviteDealOtp;
  dealsByUser: Array<Deal>;
  evidenceByUser: Array<Evidence>;
  evidenceFindOne: Evidence;
  featuresFlagsByUser: Array<Scalars['String']['output']>;
  paymentFindOne: Payment;
  productFindOne: Product;
  productsByCostumer: Array<Product>;
  shipmentFindAll: Array<Shipment>;
  shipmentFindOne: Shipment;
  transactionFindAll: Array<Transaction>;
  transactionFindOne: Transaction;
  userFindOne: UserResponse;
  userMe: UserResponse;
  validationFindAll: Array<Validation>;
  validationFindOne: Validation;
};

export type QueryAddressFindOneArgs = {
  idAddress: Scalars['String']['input'];
};

export type QueryAmountFindOneArgs = {
  amountId: Scalars['String']['input'];
};

export type QueryClaimFindOneArgs = {
  claimId: Scalars['String']['input'];
};

export type QueryDealFindOneArgs = {
  dealId: Scalars['String']['input'];
};

export type QueryDealGetInviteCodeArgs = {
  dealId: Scalars['String']['input'];
};

export type QueryDealsByUserArgs = {
  dealsByUserParams: FindDealParams;
};

export type QueryEvidenceByUserArgs = {
  userId: Scalars['String']['input'];
};

export type QueryEvidenceFindOneArgs = {
  evidenceId: Scalars['String']['input'];
};

export type QueryPaymentFindOneArgs = {
  paymentId: Scalars['String']['input'];
};

export type QueryProductFindOneArgs = {
  productId: Scalars['String']['input'];
};

export type QueryProductsByCostumerArgs = {
  costumerId: Scalars['String']['input'];
};

export type QueryShipmentFindOneArgs = {
  shipmentId: Scalars['String']['input'];
};

export type QueryTransactionFindOneArgs = {
  transactionId: Scalars['String']['input'];
};

export type QueryUserFindOneArgs = {
  userId: Scalars['String']['input'];
};

export type QueryValidationFindOneArgs = {
  validationId: Scalars['String']['input'];
};

export type RecoveryVerifyOtTokenResult = {
  __typename?: 'RecoveryVerifyOtTokenResult';
  token?: Maybe<Scalars['String']['output']>;
};

export type RefreshTokenResult = {
  __typename?: 'RefreshTokenResult';
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Shipment = {
  __typename?: 'Shipment';
  _id: Scalars['ID']['output'];
  addressId: Scalars['ID']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  userMeSubscriptor: UserResponse;
};

export type SubscriptionUserMeSubscriptorArgs = {
  name: Scalars['String']['input'];
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
  addressType?: InputMaybe<AddressTypeEnum>;
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
  createdBy?: InputMaybe<ClaimByEnum>;
  dealId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  evidence?: InputMaybe<Array<Scalars['ID']['input']>>;
  inchargeBy?: InputMaybe<Scalars['ID']['input']>;
  reason?: InputMaybe<ClaimReasonEnum>;
  status?: InputMaybe<ClaimStatusEnum>;
};

export type UpdateDealInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  paymentLimitDate?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<CreateProductInput>;
};

export type UpdateEvidenceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  evidenceType?: InputMaybe<EvidenceStatusEnum>;
  files?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePaymentInput = {
  amounts?: InputMaybe<Array<Scalars['ID']['input']>>;
  status?: InputMaybe<PaymentStatusEnum>;
  totalAmount?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PaymentTypeEnum>;
};

export type UpdateProductInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  save?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateShipmentInput = {
  addressId?: InputMaybe<Scalars['ID']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  birthday?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateValidationInput = {
  evidence: Array<Scalars['ID']['input']>;
  inchargeBy?: InputMaybe<Scalars['ID']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ValidationStatusEnum>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  birthday?: Maybe<Scalars['String']['output']>;
  clabe?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
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

export type UserRecoveryVerifyOtpInput = {
  email: Scalars['String']['input'];
  tokenOTP: Scalars['String']['input'];
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
  Admin = 'Admin',
  User = 'User',
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
  costumerId: Scalars['ID']['output'];
  evidence: Array<Scalars['ID']['output']>;
  inchargeBy?: Maybe<Scalars['ID']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  status: ValidationStatusEnum;
};

export enum ValidationStatusEnum {
  Approved = 'approved',
  Created = 'created',
  Evaluating = 'evaluating',
  Rejected = 'rejected',
}

export type UserFragmentFragment = {
  __typename?: 'UserResponse';
  _id: string;
  birthday?: string | null;
  email: string;
  name: string;
  role?: string | null;
  status?: string | null;
};

export type ProductFragmentFragment = {
  __typename?: 'Product';
  _id: string;
  brand: string;
  costumerId?: string | null;
  description: string;
  media: string;
  name: string;
  productStatus: ProductStatusEnum;
};

export type AuthSignInMutationVariables = Exact<{
  user: LoginUserInput;
}>;

export type AuthSignInMutation = {
  __typename?: 'Mutation';
  authSignIn: {
    __typename?: 'LoginUserResult';
    refreshToken: string;
    token: string;
    user: {
      __typename?: 'UserResponse';
      _id: string;
      birthday?: string | null;
      email: string;
      name: string;
      role?: string | null;
      status?: string | null;
    };
  };
};

export type AuthSignUpMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type AuthSignUpMutation = {
  __typename?: 'Mutation';
  authSignUp: {
    __typename?: 'LoginUserResult';
    refreshToken: string;
    token: string;
    user: {
      __typename?: 'UserResponse';
      _id: string;
      birthday?: string | null;
      email: string;
      name: string;
      role?: string | null;
      status?: string | null;
    };
  };
};

export type AuthRecoveryPassMutationVariables = Exact<{
  userRecoveryInput: UserRecoveryInput;
}>;

export type AuthRecoveryPassMutation = {
  __typename?: 'Mutation';
  authRecoveryPass: boolean;
};

export type AuthRefreshTokensMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;

export type AuthRefreshTokensMutation = {
  __typename?: 'Mutation';
  authRefreshTokens: {
    __typename?: 'RefreshTokenResult';
    refreshToken: string;
    token: string;
  };
};

export type AuthRecoveryPassVerifyOtpMutationVariables = Exact<{
  userRecoveryVerifyOtpInput: UserRecoveryVerifyOtpInput;
}>;

export type AuthRecoveryPassVerifyOtpMutation = {
  __typename?: 'Mutation';
  authRecoveryPassVerifyOtp: {
    __typename?: 'RecoveryVerifyOtTokenResult';
    token?: string | null;
  };
};

export type AuthRecoveryPassConfirmMutationVariables = Exact<{
  userRecoveryInput: UserRecoveryConfirmInput;
}>;

export type AuthRecoveryPassConfirmMutation = {
  __typename?: 'Mutation';
  authRecoveryPassConfirm: boolean;
};

export type DealCreateMutationVariables = Exact<{
  createDealInput: CreateDealInput;
}>;

export type DealCreateMutation = {
  __typename?: 'Mutation';
  dealCreate: {
    __typename?: 'Deal';
    _id: string;
    amount: string;
    code?: string | null;
    customerId?: string | null;
    dealType?: string | null;
    evidence?: Array<string> | null;
    paymentLimitDate: Date;
    payments?: Array<string> | null;
    productId: string;
    rejectReason?: string | null;
    salesmanId: string;
    shipmentId?: string | null;
    status: DealStatusEnum;
    product?: {
      __typename?: 'Product';
      _id: string;
      brand: string;
      costumerId?: string | null;
      description: string;
      media: string;
      name: string;
      productStatus: ProductStatusEnum;
    } | null;
    salesman?: {
      __typename?: 'UserResponse';
      _id: string;
      birthday?: string | null;
      email: string;
      name: string;
      role?: string | null;
      status?: string | null;
    } | null;
  };
};

export type UserMeQueryVariables = Exact<{ [key: string]: never }>;

export type UserMeQuery = {
  __typename?: 'Query';
  userMe: {
    __typename?: 'UserResponse';
    _id: string;
    birthday?: string | null;
    email: string;
    name: string;
    role?: string | null;
    status?: string | null;
  };
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on UserResponse {
    _id
    birthday
    email
    name
    role
    status
  }
`;
export const ProductFragmentFragmentDoc = gql`
  fragment ProductFragment on Product {
    _id
    brand
    costumerId
    description
    media
    name
    productStatus
  }
`;
export const AuthSignInDocument = gql`
  mutation AuthSignIn($user: LoginUserInput!) {
    authSignIn(User: $user) {
      refreshToken
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type AuthSignInMutationFn = Apollo.MutationFunction<
  AuthSignInMutation,
  AuthSignInMutationVariables
>;

/**
 * __useAuthSignInMutation__
 *
 * To run a mutation, you first call `useAuthSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSignInMutation, { data, loading, error }] = useAuthSignInMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useAuthSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthSignInMutation,
    AuthSignInMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthSignInMutation, AuthSignInMutationVariables>(
    AuthSignInDocument,
    options,
  );
}
export type AuthSignInMutationHookResult = ReturnType<
  typeof useAuthSignInMutation
>;
export type AuthSignInMutationResult =
  Apollo.MutationResult<AuthSignInMutation>;
export type AuthSignInMutationOptions = Apollo.BaseMutationOptions<
  AuthSignInMutation,
  AuthSignInMutationVariables
>;
export const AuthSignUpDocument = gql`
  mutation AuthSignUp($createUserInput: CreateUserInput!) {
    authSignUp(createUserInput: $createUserInput) {
      refreshToken
      token
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export type AuthSignUpMutationFn = Apollo.MutationFunction<
  AuthSignUpMutation,
  AuthSignUpMutationVariables
>;

/**
 * __useAuthSignUpMutation__
 *
 * To run a mutation, you first call `useAuthSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authSignUpMutation, { data, loading, error }] = useAuthSignUpMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useAuthSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthSignUpMutation,
    AuthSignUpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AuthSignUpMutation, AuthSignUpMutationVariables>(
    AuthSignUpDocument,
    options,
  );
}
export type AuthSignUpMutationHookResult = ReturnType<
  typeof useAuthSignUpMutation
>;
export type AuthSignUpMutationResult =
  Apollo.MutationResult<AuthSignUpMutation>;
export type AuthSignUpMutationOptions = Apollo.BaseMutationOptions<
  AuthSignUpMutation,
  AuthSignUpMutationVariables
>;
export const AuthRecoveryPassDocument = gql`
  mutation AuthRecoveryPass($userRecoveryInput: UserRecoveryInput!) {
    authRecoveryPass(UserRecoveryInput: $userRecoveryInput)
  }
`;
export type AuthRecoveryPassMutationFn = Apollo.MutationFunction<
  AuthRecoveryPassMutation,
  AuthRecoveryPassMutationVariables
>;

/**
 * __useAuthRecoveryPassMutation__
 *
 * To run a mutation, you first call `useAuthRecoveryPassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRecoveryPassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRecoveryPassMutation, { data, loading, error }] = useAuthRecoveryPassMutation({
 *   variables: {
 *      userRecoveryInput: // value for 'userRecoveryInput'
 *   },
 * });
 */
export function useAuthRecoveryPassMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthRecoveryPassMutation,
    AuthRecoveryPassMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthRecoveryPassMutation,
    AuthRecoveryPassMutationVariables
  >(AuthRecoveryPassDocument, options);
}
export type AuthRecoveryPassMutationHookResult = ReturnType<
  typeof useAuthRecoveryPassMutation
>;
export type AuthRecoveryPassMutationResult =
  Apollo.MutationResult<AuthRecoveryPassMutation>;
export type AuthRecoveryPassMutationOptions = Apollo.BaseMutationOptions<
  AuthRecoveryPassMutation,
  AuthRecoveryPassMutationVariables
>;
export const AuthRefreshTokensDocument = gql`
  mutation AuthRefreshTokens($refreshToken: String!) {
    authRefreshTokens(refreshToken: $refreshToken) {
      refreshToken
      token
    }
  }
`;
export type AuthRefreshTokensMutationFn = Apollo.MutationFunction<
  AuthRefreshTokensMutation,
  AuthRefreshTokensMutationVariables
>;

/**
 * __useAuthRefreshTokensMutation__
 *
 * To run a mutation, you first call `useAuthRefreshTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRefreshTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRefreshTokensMutation, { data, loading, error }] = useAuthRefreshTokensMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *   },
 * });
 */
export function useAuthRefreshTokensMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthRefreshTokensMutation,
    AuthRefreshTokensMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthRefreshTokensMutation,
    AuthRefreshTokensMutationVariables
  >(AuthRefreshTokensDocument, options);
}
export type AuthRefreshTokensMutationHookResult = ReturnType<
  typeof useAuthRefreshTokensMutation
>;
export type AuthRefreshTokensMutationResult =
  Apollo.MutationResult<AuthRefreshTokensMutation>;
export type AuthRefreshTokensMutationOptions = Apollo.BaseMutationOptions<
  AuthRefreshTokensMutation,
  AuthRefreshTokensMutationVariables
>;
export const AuthRecoveryPassVerifyOtpDocument = gql`
  mutation AuthRecoveryPassVerifyOtp(
    $userRecoveryVerifyOtpInput: UserRecoveryVerifyOtpInput!
  ) {
    authRecoveryPassVerifyOtp(
      UserRecoveryVerifyOtpInput: $userRecoveryVerifyOtpInput
    ) {
      token
    }
  }
`;
export type AuthRecoveryPassVerifyOtpMutationFn = Apollo.MutationFunction<
  AuthRecoveryPassVerifyOtpMutation,
  AuthRecoveryPassVerifyOtpMutationVariables
>;

/**
 * __useAuthRecoveryPassVerifyOtpMutation__
 *
 * To run a mutation, you first call `useAuthRecoveryPassVerifyOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRecoveryPassVerifyOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRecoveryPassVerifyOtpMutation, { data, loading, error }] = useAuthRecoveryPassVerifyOtpMutation({
 *   variables: {
 *      userRecoveryVerifyOtpInput: // value for 'userRecoveryVerifyOtpInput'
 *   },
 * });
 */
export function useAuthRecoveryPassVerifyOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthRecoveryPassVerifyOtpMutation,
    AuthRecoveryPassVerifyOtpMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthRecoveryPassVerifyOtpMutation,
    AuthRecoveryPassVerifyOtpMutationVariables
  >(AuthRecoveryPassVerifyOtpDocument, options);
}
export type AuthRecoveryPassVerifyOtpMutationHookResult = ReturnType<
  typeof useAuthRecoveryPassVerifyOtpMutation
>;
export type AuthRecoveryPassVerifyOtpMutationResult =
  Apollo.MutationResult<AuthRecoveryPassVerifyOtpMutation>;
export type AuthRecoveryPassVerifyOtpMutationOptions =
  Apollo.BaseMutationOptions<
    AuthRecoveryPassVerifyOtpMutation,
    AuthRecoveryPassVerifyOtpMutationVariables
  >;
export const AuthRecoveryPassConfirmDocument = gql`
  mutation AuthRecoveryPassConfirm(
    $userRecoveryInput: UserRecoveryConfirmInput!
  ) {
    authRecoveryPassConfirm(UserRecoveryInput: $userRecoveryInput)
  }
`;
export type AuthRecoveryPassConfirmMutationFn = Apollo.MutationFunction<
  AuthRecoveryPassConfirmMutation,
  AuthRecoveryPassConfirmMutationVariables
>;

/**
 * __useAuthRecoveryPassConfirmMutation__
 *
 * To run a mutation, you first call `useAuthRecoveryPassConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRecoveryPassConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRecoveryPassConfirmMutation, { data, loading, error }] = useAuthRecoveryPassConfirmMutation({
 *   variables: {
 *      userRecoveryInput: // value for 'userRecoveryInput'
 *   },
 * });
 */
export function useAuthRecoveryPassConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthRecoveryPassConfirmMutation,
    AuthRecoveryPassConfirmMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthRecoveryPassConfirmMutation,
    AuthRecoveryPassConfirmMutationVariables
  >(AuthRecoveryPassConfirmDocument, options);
}
export type AuthRecoveryPassConfirmMutationHookResult = ReturnType<
  typeof useAuthRecoveryPassConfirmMutation
>;
export type AuthRecoveryPassConfirmMutationResult =
  Apollo.MutationResult<AuthRecoveryPassConfirmMutation>;
export type AuthRecoveryPassConfirmMutationOptions = Apollo.BaseMutationOptions<
  AuthRecoveryPassConfirmMutation,
  AuthRecoveryPassConfirmMutationVariables
>;
export const DealCreateDocument = gql`
  mutation DealCreate($createDealInput: CreateDealInput!) {
    dealCreate(createDealInput: $createDealInput) {
      _id
      amount
      code
      customerId
      dealType
      evidence
      paymentLimitDate
      payments
      product {
        ...ProductFragment
      }
      productId
      rejectReason
      salesman {
        ...UserFragment
      }
      salesmanId
      shipmentId
      status
    }
  }
  ${ProductFragmentFragmentDoc}
  ${UserFragmentFragmentDoc}
`;
export type DealCreateMutationFn = Apollo.MutationFunction<
  DealCreateMutation,
  DealCreateMutationVariables
>;

/**
 * __useDealCreateMutation__
 *
 * To run a mutation, you first call `useDealCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDealCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dealCreateMutation, { data, loading, error }] = useDealCreateMutation({
 *   variables: {
 *      createDealInput: // value for 'createDealInput'
 *   },
 * });
 */
export function useDealCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DealCreateMutation,
    DealCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DealCreateMutation, DealCreateMutationVariables>(
    DealCreateDocument,
    options,
  );
}
export type DealCreateMutationHookResult = ReturnType<
  typeof useDealCreateMutation
>;
export type DealCreateMutationResult =
  Apollo.MutationResult<DealCreateMutation>;
export type DealCreateMutationOptions = Apollo.BaseMutationOptions<
  DealCreateMutation,
  DealCreateMutationVariables
>;
export const UserMeDocument = gql`
  query UserMe {
    userMe {
      ...UserFragment
    }
  }
  ${UserFragmentFragmentDoc}
`;

/**
 * __useUserMeQuery__
 *
 * To run a query within a React component, call `useUserMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserMeQuery(
  baseOptions?: Apollo.QueryHookOptions<UserMeQuery, UserMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserMeQuery, UserMeQueryVariables>(
    UserMeDocument,
    options,
  );
}
export function useUserMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserMeQuery, UserMeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserMeQuery, UserMeQueryVariables>(
    UserMeDocument,
    options,
  );
}
export function useUserMeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UserMeQuery,
    UserMeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserMeQuery, UserMeQueryVariables>(
    UserMeDocument,
    options,
  );
}
export type UserMeQueryHookResult = ReturnType<typeof useUserMeQuery>;
export type UserMeLazyQueryHookResult = ReturnType<typeof useUserMeLazyQuery>;
export type UserMeSuspenseQueryHookResult = ReturnType<
  typeof useUserMeSuspenseQuery
>;
export type UserMeQueryResult = Apollo.QueryResult<
  UserMeQuery,
  UserMeQueryVariables
>;
