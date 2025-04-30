import { describe, test } from 'node:test'
import assert from 'node:assert'
import { IVerifiableCredential, IVerifiablePresentation } from '../src'

await describe('VerifiableCredential', async () => {
  await test('exists', async () => {
    const vc: IVerifiableCredential = {
      '@context': ['http://example.com'],
      issuer: 'http://example.com',
      type: 'VerifiableCredential',
      credentialSubject: {}
    }

    assert.ok(vc)
  })
})

await describe('VerifiablePresentation', () => {
  await test('exists', async () => {
    const vp: IVerifiablePresentation = {
      '@context': ['http://example.com'],
      type: 'VerifiablePresentation'
    }
    assert.ok(vp)
  })
})
