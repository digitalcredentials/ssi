/*!
 * Copyright (c) 2022-2025 Digital Credentials Consortium. All rights reserved.
 */

import { ILdType, ILinkedDataObject } from './LD'
import {
  IRefreshService,
  IVerifiableCredential
} from './VerifiableCredential'

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
