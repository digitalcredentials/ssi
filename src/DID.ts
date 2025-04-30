/*!
 * Copyright (c) 2025 Digital Credentials Consortium. All rights reserved.
 */
import { ILdType } from './LD'
import { IPublicKey } from './KeyPair'

/**
 * A Decentralized Identifier (DID) URL
 * @see https://www.w3.org/TR/did-core/#did-syntax
 */
export type IDID = `did:${string}`

export type IDidDocument = IDidDocument_v1_0 | IDidDocument_v1_1

export type KeyId = string
export type IKeyIdOrObject = KeyId | IPublicKey

// @see https://www.w3.org/TR/cid-1.0/#services
export interface IServiceObject {
  id?: string // a URL
  type: ILdType
  serviceEndpoint: string | string[]
}

export interface IDidCoreDocument {
  id: IDID

  controller?: IDID | IDID[]

  alsoKnownAs?: string | string[]

  service?: IServiceObject | IServiceObject[]

  /**
   * Verification Relationships
   * @see https://www.w3.org/TR/cid-1.0/#verification-relationships
   */
  // Verification method used for signing assertions such as VCs
  assertionMethod?: IKeyIdOrObject | IKeyIdOrObject[]

  // Verification method used for authentication
  //   and (for some DID methods) for key rotation and document updates
  authentication?: IKeyIdOrObject | IKeyIdOrObject[]

  // Used for delegating zCaps (Authorization Capabilities) chains
  capabilityDelegation?: IKeyIdOrObject | IKeyIdOrObject[]

  // Used for invoking zCaps (Authorization Capabilities) chains
  capabilityInvocation?: IKeyIdOrObject | IKeyIdOrObject[]

  // Used for encrypting/decrypting
  keyAgreement?: IKeyIdOrObject | IKeyIdOrObject[]

  // Used when the verification purpose (auth, assertion, etc) is unknown,
  // or when a key can be used for all purposes
  verificationMethod?: IKeyIdOrObject | IKeyIdOrObject[]
}

/**
 * @see https://www.w3.org/TR/did-1.0/
 */
export interface IDidDocument_v1_0 extends IDidCoreDocument {
  '@context': ['https://www.w3.org/ns/did/v1', ...Array<string | object>]
}

/**
 * @see https://www.w3.org/TR/did-1.1/
 */
export interface IDidDocument_v1_1 extends IDidCoreDocument {
  '@context': ['https://www.w3.org/ns/did/v1.1', ...Array<string | object>]
}
