/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
export type LDType = string | string[];

export interface ImageObject {
  id: string;
  type?: LDType;
  [x: string]: any;
}

export interface LinkedDataObject {
  // id and type are very common to all Linked Data objects
  id?: string;
  type?: LDType;

  name?: string;
  description?: string;
  image?: string | ImageObject;
}

export interface IssuerObject extends LinkedDataObject {
  id: string;
  url?: string;

  [x: string]: any;
}

export type VerifiableCredential = VCDIVerifiableCredential | CompactJWT;

// Represents a Json Web Token in compact form: "header.payload.signature"
export type CompactJWT = string;

// Represents a Verifiable Credential protected by
//   the Verifiable Credential Data Integrity 1.0 spec
// @see https://www.w3.org/TR/vc-data-integrity/
export interface VCDIVerifiableCredential extends LinkedDataObject {
  // The first element of the @context array must be the VC context itself
  // Subsequent elements are either URLs for other contexts OR
  // inline context objects.
  // https://w3c.github.io/vc-data-model/#contexts
  '@context': string[] | any;

  // https://w3c.github.io/vc-data-model/#identifiers
  id?: string;

  // https://w3c.github.io/vc-data-model/#types
  type: LDType;

  // https://w3c.github.io/vc-data-model/#issuer
  issuer: string | IssuerObject;

  // https://w3c.github.io/vc-data-model/#validity-period
  validFrom?: string;

  // https://w3c.github.io/vc-data-model/#validity-period
  validUntil?: string;

  // https://w3c.github.io/vc-data-model/#credential-subject
  credentialSubject: CredentialSubject | CredentialSubject[];

  // https://w3c.github.io/vc-data-model/#status
  credentialStatus?: CredentialStatus | CredentialStatus[];

  // https://w3c.github.io/vc-data-model/#data-schemas
  credentialSchema?: CredentialSchema | CredentialSchema[];

  // https://w3c.github.io/vc-data-model/#integrity-of-related-resources
  relatedResource?: RelatedResource | RelatedResource[];

  // https://w3c.github.io/vc-data-model/#evidence
  evidence?: Evidence | Evidence[];

  // https://w3c.github.io/vc-data-model/#refreshing
  refreshService?: RefreshService | RefreshService[];

  // https://w3c.github.io/vc-data-model/#terms-of-use
  termsOfUse?: TermsOfUse | TermsOfUse[];

  // https://w3c-ccg.github.io/confidence-method-spec
  confidenceMethod?: ConfidenceMethod | ConfidenceMethod[];

  // https://w3c-ccg.github.io/vc-render-method
  renderMethod?: RenderMethod | RenderMethod[];

  // For W3C Linked Data Integrity-protected VCs, a 'proof' is required
  // However, for JWT-protected VCs, 'proof' is optional (is external)
  // @see https://w3c-ccg.github.io/ld-cryptosuite-registry/
  // for examples of cryptographic suites used for VC proofs
  proof?: any;

  // Implementers are free to add any other properties to a VC
  [x: string]: any;
}

// https://w3c.github.io/vc-data-model/#credential-subject
export interface CredentialSubject extends LinkedDataObject {
  // although a VC is required to have a `credentialSubject` property,
  // the spec does not require any properties inside it.
  [x: string]: any;
}

// https://w3c.github.io/vc-data-model/#status
export interface CredentialStatus extends LinkedDataObject {
  // id and type are required for `credentialStatus` by the VC spec
  id?: string;
  type: LDType;
  [x: string]: any;

  // Each status type has its own required fields. For example:
  // https://w3c.github.io/vc-bitstring-status-list
  statusPurpose?: string;
  statusListIndex?: string | number;
  statusListCredential?: string;
}

// https://w3c.github.io/vc-data-model/#data-schemas
export interface CredentialSchema {
  id: string;
  type: string;
  [x: string]: any;
}

// https://w3c.github.io/vc-data-model/#terms-of-use
export interface TermsOfUse {
  id?: string;
  type: string;
  [x: string]: any;
}

// https://w3c.github.io/vc-data-model/#refreshing
export interface RefreshService {
  type: string;
  [x: string]: any;
}

// https://w3c.github.io/vc-data-model/#integrity-of-related-resources
export interface RelatedResource {
  id: string;
  digestSRI: string;
  mediaType?: string;
}

// https://w3c.github.io/vc-data-model/#evidence
export interface Evidence {
  id?: string;
  type: string;
  [x: string]: any;
}

// https://w3c-ccg.github.io/confidence-method-spec
export interface ConfidenceMethod {
  id?: string;
  type: string;
  [x: string]: any;
}

// https://w3c-ccg.github.io/vc-render-method
export interface RenderMethod {
  type: string;
  [x: string]: any;
}
