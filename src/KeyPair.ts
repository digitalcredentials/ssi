export interface ISerializedKeyPair {
  '@context'?: string
  id?: string
  type?: string
  controller?: string
  revoked?: string

  /**
   * Public / private key material
   */
  // Used by Ed25519VerificationKey2018 and others
  publicKeyBase58?: string
  privateKeyBase58?: string

  // Used by Ed25519VerificationKey2020 and Multikey
  publicKeyMultibase?: string
  privateKeyMultibase?: string

  // Used by JsonWebKey2020
  publicKeyJwk?: IJsonWebKey
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
