import { expect } from 'chai'
import { IVerifiableCredential, IVerifiablePresentation } from '../src'

describe('VerifiableCredential', () => {
  it('exists', async () => {
    const vc = {} as IVerifiableCredential;
    expect(vc).to.exist;
  })
})

describe('VerifiablePresentation', () => {
  it('exists', async () => {
    const vp = {} as IVerifiablePresentation;
    expect(vp).to.exist;
  })
})
