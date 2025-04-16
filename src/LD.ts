/*!
 * Copyright (c) 2025 Digital Credentials Consortium. All rights reserved.
 */

// General Linked Data 'type' term, aliased from '@type'
export type ILdType = string | string[];

// General purpose Image object, used in VCs etc
export interface IImageObject {
  id: string;
  type?: ILdType;
  [x: string]: any;
}

export interface ILinkedDataObject {
  // id and type are very common to all Linked Data objects
  id?: string;
  type?: ILdType;

  name?: string;
  description?: string;
  image?: string | IImageObject;
}
