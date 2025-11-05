/*!
 * Open Badges v3.0 interfaces
 * @see https://www.imsglobal.org/spec/ob/v3p0/
 */

import { IVerifiableCredential } from './VCDM.js'
import { ILdType, ILinkedDataObject } from './LD.js'

/**
 * OBv3 Credential
 * Extends W3C VC with an OBv3-specific credentialSubject
 */
export interface IOpenBadgeCredentialV3 extends IVerifiableCredential {
  credentialSubject: IOpenBadgeSubject | IOpenBadgeSubject[]
}

export interface IOBv3IdentityObject {
  hashed: boolean
  // @see https://www.imsglobal.org/spec/ob/v3p0/#org.1edtech.ob.v3p0.identifiertypeenum.class
  identityType?: string | string[]
  identityHash?: string
  salt?: string
}

/**
 * OBv3 CredentialSubject
 * https://www.imsglobal.org/spec/ob/v3p0/#credentialsubject
 */
export interface IOpenBadgeSubject extends ILinkedDataObject {
  achievement: IAchievement | string
  evidence?: IOBv3Evidence | IOBv3Evidence[]
  identifier?: IOBv3IdentityObject | IOBv3IdentityObject[]
  [x: string]: any
}

/**
 * OBv3 Achievement
 * https://www.imsglobal.org/spec/ob/v3p0/#achievement
 */
export interface IAchievement extends ILinkedDataObject {
  id: string

  type: ILdType

  name: string

  description: string

  criteria: ICriteria

  alignment?: IAlignment[]

  achievementType?: string

  creator?: IProfile | string

  creditsAvailable?: number

  endorsement?: IEndorsementCredential[]

  endorsementJwt?: string[]

  fieldOfStudy?: string

  humanCode?: string

  image?: IImage

  inLanguage?: string

  otherIdentifier?: IIdentifierEntry[]

  related?: IRelated[]

  resultDescription?: IResultDescription[]

  specialization?: string

  tag?: string[]

  version?: string

  [x: string]: any
}

/** Evidence supporting the achievement */
export interface IOBv3Evidence extends ILinkedDataObject {
  id?: string
  type: ILdType
  name?: string
  description?: string
  url?: string
  [x: string]: any
}

/** Criteria for the achievement */
export interface ICriteria {
  id?: string
  narrative?: string
  [x: string]: any
}

/** Alignment between achievement and framework */
export interface IAlignment {
  type?: ILdType
  targetName?: string
  targetUrl?: string
  targetCode?: string
  targetDescription?: string
  targetFramework?: string
  targetType?: string
  [x: string]: any
}

/** Simple image metadata */
export interface IImage {
  id: string
  type: 'Image'
  caption?: string
}

/** Profile (issuer/creator) */
export interface IProfile {
  id: string
  type: ILdType
  name?: string
  url?: string
  description?: string
  [x: string]: any
}

/** EndorsementCredential */
export interface IEndorsementCredential extends IVerifiableCredential {
  type: ILdType
  name?: string
  description?: string
  credentialSubject: IEndorsementSubject
}

/** EndorsementSubject */
export interface IEndorsementSubject {
  id: string
  type: ILdType
  endorsementComment?: string
  [x: string]: any
}

/** Identifier entry */
export interface IIdentifierEntry {
  type: 'IdentifierEntry'
  identifier: string
  identifierType: string
}

/** Related achievement */
export interface IRelated {
  id: string
  type: ILdType
  inLanguage?: string
  version?: string
}

/** ResultDescription */
export interface IResultDescription {
  id: string
  type: ILdType
  name: string
  resultType: string
  alignment?: IAlignment[]
  allowedValue?: string[]
  requiredLevel?: string
  requiredValue?: string
  rubricCriterionLevel?: IRubricCriterionLevel[]
  valueMax?: string
  valueMin?: string
}

/** RubricCriterionLevel */
export interface IRubricCriterionLevel {
  id: string
  type: ILdType
  name: string
  description?: string
  level?: string
  points?: string
  alignment?: IAlignment[]
}
