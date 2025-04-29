/*!
 * Copyright (c) 2025 Digital Credentials Consortium.
 */
export type IKeyPair = IVerificationKeyPair2018 | IVerificationKeyPair2020 |
  IMultikeyPair | IJsonWebKeyPair2020

export type IPublicKey = IPublicKey2018 | IPublicKey2020 | IPublicMultikey
  | IJsonWebPublicKey2020

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

export interface IPublicMultikey extends IKeyPairCore {
  publicKeyMultibase?: string
}
export interface IMultikeyPair extends IPublicMultikey {
  secretKeyMultibase?: string
}

export interface IJsonWebPublicKey2020 {
  // Used by JsonWebKey2020
  publicKeyJwk?: IJsonWebKey
}
export interface IJsonWebKeyPair2020 extends IJsonWebPublicKey2020 {
  privateKeyJwk?: IJsonWebKey
}
export interface IJsonWebKey {
  // Key type, e.g. 'RSA' or 'OKP'
  kty?: string

  // Curve, used by elliptic cryptography keys (kty: 'OKP'), e.g. 'Ed25519'
  crv?: string

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

export interface ISigner {
  id?: string
  algorithm?: string
  sign: ({ data }: { data: Uint8Array }) => Promise<Uint8Array>
}

export interface IVerifier {
  id?: string
  verify: ({
    data,
    signature
  }: {
    data: Uint8Array
    signature: Uint8Array
  }) => Promise<boolean>
}
