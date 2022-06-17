import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RegistrationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Registration {
  readonly id: string;
  readonly fullname?: string | null;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly invoiceNo?: string | null;
  readonly invoiceAmount?: number | null;
  readonly receiptImage?: string | null;
  readonly entry?: number | null;
  readonly entryTotal?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Registration, RegistrationMetaData>);
  static copyOf(source: Registration, mutator: (draft: MutableModel<Registration, RegistrationMetaData>) => MutableModel<Registration, RegistrationMetaData> | void): Registration;
}