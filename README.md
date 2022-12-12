# Verifiable Credentials Data Model _(@digitalcredentials/vc-data-model)_

[![Build status](https://img.shields.io/github/workflow/status/digitalcredentials/vc-data-model/Node.js%20CI)](https://github.com/digitalcredentials/vc-data-model/actions?query=workflow%3A%22Node.js+CI%22)
[![NPM Version](https://img.shields.io/npm/v/@digitalcredentials/vc-data-model.svg)](https://npm.im/@digitalcredentials/vc-data-model)

> Typescript types for the W3C Verifiable Credentials Data Model.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Background

If you're implementing the Verifiable Credential specification in Typescript,
chances are that you're using a type definition for VerifiableCredentials
and VerifiablePresentations. Many VC-related projects (Sphereon's Veramo, 
LEF's LearnCard, Transmute's Verifiable Data) include the type definitions in
their monorepos.

We saw a niche for a standalone library that exported just the type definitions,
hence this repository.

See [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/)
specification.

Inspired by / incorporates elements of other VC Typescript libraries:

* https://github.com/Sphereon-Opensource/veramo (`/packages/core/src/types/vc-data-model.ts`)
* https://github.com/transmute-industries/verifiable-data (`/packages/vc.js/src/types/`)
* https://github.com/learningeconomy/LearnCard (`/packages/learn-card-core/src/types/`)
* Existing type definitions in DCC libraries (in `learner-credential-wallet` and others)

### Versioning

The version numbers of this npm module are meant to mirror the version numbers
of the Verifiable Credentials Data Model specification. Developers are encouraged
to specify which VC Data model version they're using. For example, currently,
the VC DM 1.1 is the stable version:

```
"dependencies": {
   "@digitalcredentials/vc-data-model": "^1.1.0"
}
```

However, the VC DM 2.0 Working group is currently developing the second version
of the specification (which will likely make breaking changes). So, in the future:

```
"dependencies": {
   "@digitalcredentials/vc-data-model": "^2.0.0"
}
```

## Install

- Node.js 16+ is recommended.

### NPM

To install via NPM:

```
npm install @digitalcredentials/vc-data-model
```

### Development

To install locally (for development):

```
git clone https://github.com/digitalcredentials/vc-data-model.git
cd vc-data-model
npm install
```

## Usage

```ts
import { VerifiableCredential, VerifiablePresentation } from '@digitalcredentials/vc-data-model'

// for example, in an Express route definition:
const vp = req.body.presentation as VerifiablePresentation
```

## Contribute

PRs accepted.

If editing the Readme, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT License](LICENSE.md) © 2022 Digital Credentials Consortium.
