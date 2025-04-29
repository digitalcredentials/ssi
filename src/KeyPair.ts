/*!
 * Copyright (c) 2025 Digital Credentials Consortium.
 */
export type IKeyPair = IVerificationKeyPair2018 | IVerificationKeyPair2020 |
  IMultikeyPair | IJsonWebKeyPair2020 | IJsonWebKeyPair

export type IPublicKey = IPublicKey2018 | IPublicKey2020 | IPublicMultikey
  | IJsonWebPublicKey

export interface IKeyPairCore {
  '@context'?: string
  id?: string
  type?: string
  controller?: string
  revoked?: string
}

export interface IPublicKey2018 extends IKeyPairCore {
  // Used by Ed25519VerificationKey2018 and others
  publicKeyBase58?: string
}
export interface IVerificationKeyPair2018 extends IPublicKey2018 {
  // Used by Ed25519VerificationKey2018 and others
  privateKeyBase58?: string
}

export interface IPublicKey2020 extends IKeyPairCore {
  // Used by Ed25519VerificationKey2020
  publicKeyMultibase?: string
}
export interface IVerificationKeyPair2020 extends IPublicKey2020 {
  // Used by Ed25519VerificationKey2020
  privateKeyMultibase?: string
}

/**
 * @see https://www.w3.org/TR/cid-1.0/#Multikey
 */
export interface IPublicMultikey extends IKeyPairCore {
  publicKeyMultibase?: string
}
export interface IMultikeyPair extends IPublicMultikey {
  secretKeyMultibase?: string
}

export interface IJsonWebPublicKey extends IKeyPairCore {
  // Used by JsonWebKey2020
  publicKeyJwk?: IJsonWebKey
}
export interface IJsonWebKeyPair2020 extends IJsonWebPublicKey {
  privateKeyJwk?: IJsonWebKey
}
// @see https://www.w3.org/TR/cid-1.0/#JsonWebKey
export interface IJsonWebKeyPair extends IJsonWebPublicKey {
  secretKeyJwk?: IJsonWebKey
}

export interface IJsonWebKey {
  // Key type, e.g. 'RSA' or 'OKP'
  kty?: string

  // Curve, used by elliptic cryptography keys (kty: 'OKP'), e.g. 'Ed25519'
  crv?: string

  // Algorithm, e.g. 'ES384'
  alg?: string

  // Public key, typically base64url encoded
  x?: string

  // Private key, typically base64url encoded
  d?: string

  // Other JWK properties, see RFC
  dp?: string
  dq?: string
  e?: string
  k?: string
  n?: string
  p?: string
  q?: string
  qi?: string
  y?: string

  [key: string]: unknown;
}

export interface ISign {
  data: Uint8Array
}
export interface ISigner {
  id?: string
  algorithm?: string
  sign: (signable: ISign) => Promise<Uint8Array>
}

export interface IVerify {
  data: Uint8Array
  signature: Uint8Array
}
export interface IVerifier {
  id?: string
  verify: (data: IVerify) => Promise<boolean>
}
