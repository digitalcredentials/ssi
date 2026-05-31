import { describe, test } from 'node:test'
import assert from 'node:assert'
import {
  ICapabilityDelegationProof,
  IDelegatedZcap,
  IRootZcap,
  IZcap,
  IZcapLike
} from '../src'

await describe('RootZcap', async () => {
  await test('exists', async () => {
    const root: IRootZcap = {
      '@context': 'https://w3id.org/zcap/v1',
      id: 'urn:zcap:root:https%3A%2F%2Fexample.com%2Fresource',
      controller: 'did:example:alice',
      invocationTarget: 'https://example.com/resource'
    }

    assert.ok(root)
  })
})

await describe('DelegatedZcap', async () => {
  await test('exists', async () => {
    const proof: ICapabilityDelegationProof = {
      type: 'Ed25519Signature2020',
      created: '2026-01-01T00:00:00Z',
      verificationMethod: 'did:example:alice#key-1',
      proofPurpose: 'capabilityDelegation',
      capabilityChain: [
        'urn:zcap:root:https%3A%2F%2Fexample.com%2Fresource'
      ],
      proofValue: 'z3...'
    }

    const delegated: IDelegatedZcap = {
      '@context': ['https://w3id.org/zcap/v1'],
      id: 'urn:uuid:00000000-0000-0000-0000-000000000001',
      parentCapability: 'urn:zcap:root:https%3A%2F%2Fexample.com%2Fresource',
      controller: 'did:example:bob',
      invocationTarget: 'https://example.com/resource',
      allowedAction: ['GET'],
      expires: '2026-12-31T23:59:59Z',
      proof
    }

    assert.ok(delegated)
  })
})

await describe('IZcap union', async () => {
  await test('accepts root and delegated', async () => {
    const root: IZcap = {
      '@context': 'https://w3id.org/zcap/v1',
      id: 'urn:zcap:root:https%3A%2F%2Fexample.com%2Fr',
      controller: 'did:example:alice',
      invocationTarget: 'https://example.com/r'
    }
    assert.ok(!('parentCapability' in root))
  })
})

await describe('IZcapLike', async () => {
  await test('admits extra properties', async () => {
    const loose: IZcapLike = {
      '@context': 'https://w3id.org/zcap/v1',
      id: 'urn:zcap:root:https%3A%2F%2Fexample.com%2Fr',
      invocationTarget: 'https://example.com/r',
      arbitraryExtra: 'allowed'
    }
    assert.ok(loose)
  })
})
