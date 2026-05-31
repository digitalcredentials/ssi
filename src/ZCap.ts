/*!
 * Authorization Capabilities (zCap) interfaces.
 * @see https://w3c-ccg.github.io/zcap-spec/
 */

/**
 * A proof attached to a delegated zCap.
 */
export interface ICapabilityDelegationProof {
  /** The cryptographic suite type (e.g. `'Ed25519Signature2020'`). */
  type: string
  /** ISO 8601 date-time the proof was created. */
  created: string
  /** Verification method URI used to sign. */
  verificationMethod: string
  /** Always `'capabilityDelegation'`. */
  proofPurpose: 'capabilityDelegation'
  /**
   * Ordered capability chain (root → parent). All entries are string IDs
   * except the last delegated zCap, which is embedded as an object.
   */
  capabilityChain: Array<string | IDelegatedZcap>
  /** The encoded proof value. */
  proofValue: string
}

/**
 * A root authorization capability (zCap). Root zCaps are unsigned, have no
 * `expires` field and no delegation proof. Their `id` follows the convention
 * `urn:zcap:root:${encodeURIComponent(invocationTarget)}`.
 */
export interface IRootZcap {
  /** The zCap JSON-LD context URL. */
  '@context': string
  /** Capability ID (`urn:zcap:root:<encodedTarget>`). */
  id: string
  /** The DID(s) authorized to invoke. */
  controller: string | string[]
  /** Resource URI this capability grants access to (absolute URI). */
  invocationTarget: string
}

/**
 * A delegated authorization capability (zCap). Delegated capabilities narrow
 * a parent capability and must carry exactly one `capabilityDelegation` proof.
 */
export interface IDelegatedZcap {
  /** JSON-LD context array; first entry MUST be the zCap context URL. */
  '@context': string[]
  /** Capability ID (absolute URI). */
  id: string
  /** Parent capability ID (absolute URI). */
  parentCapability: string
  /** The DID(s) authorized to invoke. */
  controller: string | string[]
  /** Resource URI this capability grants access to (absolute URI). */
  invocationTarget: string
  /**
   * The action(s) the controller may perform; if absent, no actions are
   * allowed (except for the root zCap).
   */
  allowedAction?: string | string[]
  /** ISO 8601 date-time when this capability expires. */
  expires: string
  /** The capability delegation proof(s). */
  proof: ICapabilityDelegationProof | ICapabilityDelegationProof[]
}

/**
 * A zCap is either a root or a delegated authorization capability.
 *
 * Use this discriminated union when the call site knows it has a real,
 * well-formed zCap and can narrow via `'parentCapability' in cap`.
 */
export type IZcap = IRootZcap | IDelegatedZcap

/**
 * A permissive zCap shape that conflates root and delegated kinds and admits
 * arbitrary additional properties (e.g. the opaque object returned from
 * `jsigs.sign()`).
 *
 * Prefer the strict `IZcap` union when possible. Use `IZcapLike` only when:
 * - the call site receives a capability whose kind is not yet known and
 *   cannot reasonably discriminate, or
 * - the call site needs to accept the open-ended shape produced by
 *   linked-data signature libraries that may attach extra properties.
 */
export interface IZcapLike {
  '@context': string | string[]
  id: string
  invocationTarget: string
  controller?: string | string[]
  parentCapability?: string
  allowedAction?: string | string[]
  expires?: string
  proof?: ICapabilityDelegationProof | ICapabilityDelegationProof[]
  [key: string]: unknown
}
