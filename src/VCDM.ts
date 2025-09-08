/*!
 * Copyright (c) 2022-2025 Digital Credentials Consortium. All rights reserved.
 */
import { ILdType, ILinkedDataObject } from './LD.js'

export interface IIssuerObject extends ILinkedDataObject {
  id: string
  url?: string

  [x: string]: any
}

// Represents a Json Web Token in compact form: "header.payload.signature"
export type ICompactJWT = string

// Represents a Verifiable Credential protected by
//   the Verifiable Credential Data Integrity 1.0 spec
// @see https://www.w3.org/TR/vc-data-integrity/
// Note: for JWS-protected VCs, see `ICompactJWT` property above
export interface IVerifiableCredential extends ILinkedDataObject {
  // The first element of the @context array must be the VC context itself
  // Subsequent elements are either URLs for other contexts OR
  // inline context objects.
  // https://w3c.github.io/vc-data-model/#contexts
  '@context': Array<string | object>

  // https://w3c.github.io/vc-data-model/#identifiers
  id?: string

  // https://w3c.github.io/vc-data-model/#types
  type: ILdType

  // https://w3c.github.io/vc-data-model/#issuer
  issuer: string | IIssuerObject

  // https://w3c.github.io/vc-data-model/#credential-subject
  credentialSubject: ICredentialSubject | ICredentialSubject[]

  // VC Data Model 2.0 fields
  // https://www.w3.org/TR/vc-data-model-2.0/#validity-period
  validFrom?: string
  // https://www.w3.org/TR/vc-data-model-2.0/#validity-period
  validUntil?: string

  // VC Data Model 1.0 fields (deprecated)
  // https://www.w3.org/TR/2019/REC-vc-data-model-20191119/#issuance-date
  issuanceDate?: string
  // https://www.w3.org/TR/2019/REC-vc-data-model-20191119/#expiration
  expirationDate?: string

  // https://w3c.github.io/vc-data-model/#status
  credentialStatus?: ICredentialStatus | ICredentialStatus[]

  // https://w3c.github.io/vc-data-model/#data-schemas
  credentialSchema?: ICredentialSchema | ICredentialSchema[]

  // https://w3c.github.io/vc-data-model/#integrity-of-related-resources
  relatedResource?: IRelatedResource | IRelatedResource[]

  // https://w3c.github.io/vc-data-model/#evidence
  evidence?: IEvidence | IEvidence[]

  // https://w3c.github.io/vc-data-model/#refreshing
  refreshService?: IRefreshService | IRefreshService[]

  // https://w3c.github.io/vc-data-model/#terms-of-use
  termsOfUse?: ITermsOfUse | ITermsOfUse[]

  // https://w3c-ccg.github.io/confidence-method-spec
  confidenceMethod?: IConfidenceMethod | IConfidenceMethod[]

  // https://w3c-ccg.github.io/vc-render-method
  renderMethod?: IRenderMethod | IRenderMethod[]

  // For W3C Linked Data Integrity-protected VCs, a 'proof' is required
  // However, for JWT-protected VCs, 'proof' is optional (is external)
  // @see https://w3c-ccg.github.io/ld-cryptosuite-registry/
  // for examples of cryptographic suites used for VC proofs
  proof?: any

  // Implementers are free to add any other properties to a VC
  [x: string]: any
}

// https://w3c.github.io/vc-data-model/#credential-subject
export interface ICredentialSubject extends ILinkedDataObject {
  // although a VC is required to have a `credentialSubject` property,
  // the spec does not require any properties inside it.
  [x: string]: any
}

// https://w3c.github.io/vc-data-model/#status
export interface ICredentialStatus extends ILinkedDataObject {
  // id and type are required for `credentialStatus` by the VC spec
  id?: string
  type: ILdType
  [x: string]: any

  // Each status type has its own required fields. For example:
  // https://w3c.github.io/vc-bitstring-status-list
  statusPurpose?: string
  statusListIndex?: string | number
  statusListCredential?: string
}

// https://w3c.github.io/vc-data-model/#data-schemas
export interface ICredentialSchema {
  id: string
  type: ILdType
  [x: string]: any
}

// https://w3c.github.io/vc-data-model/#terms-of-use
export interface ITermsOfUse {
  id?: string
  type: ILdType
  [x: string]: any
}

// https://w3c.github.io/vc-data-model/#refreshing
export interface IRefreshService {
  type: ILdType
  [x: string]: any
}

// https://w3c.github.io/vc-data-model/#integrity-of-related-resources
export interface IRelatedResource {
  id: string
  digestSRI: string
  mediaType?: string
}

// https://w3c.github.io/vc-data-model/#evidence
export interface IEvidence {
  id?: string
  type: ILdType
  [x: string]: any
}

// https://w3c-ccg.github.io/confidence-method-spec
export interface IConfidenceMethod {
  id?: string
  type: ILdType
  [x: string]: any
}

// https://w3c-ccg.github.io/vc-render-method
export interface IRenderMethod {
  type: ILdType
  [x: string]: any
}

export interface IVerifiablePresentation extends ILinkedDataObject {
  '@context': any

  // A 'type' property is required for VPs
  // see https://www.w3.org/TR/vc-data-model/#presentations-0
  type: ILdType

  // Optional, expected to be a URI for the entity presenting the VP
  holder?: string

  // Including VCs in a VP is optional "empty" VPs are used for DID Auth
  verifiableCredential?: IVerifiableCredential | IVerifiableCredential[]

  // https://w3c.github.io/vc-data-model/#refreshing
  refreshService?: IRefreshService

  // Adding a proof (signing) to a VP is optional, and is typically used
  // to authenticate the presenter (who may be different from the subject of
  // any of the VCs).
  proof?: any

  // Implementers are free to add any other properties to a VP
  [x: string]: any
}
