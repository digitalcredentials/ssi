# ssi Changelog

## 3.0.1-3.0.5 - 2025-04-29
### Changed
- Fix `IJsonWebPublicKey` (ensure it extends `IKeyPairCore`)
- Add `algorithm` to `IVerifier` interface (to match multikey library).

## 3.0.0 - 2025-04-29
### Changed
- BREAKING: Rename repo to `ssi` from `vc-data-model`.

### Added
- Export `IDID` and `IDidDocument` interface.
- Export key and keypair interfaces (`IKeyPair`, `IPublicKey`, `ISigner`, `IVerifier`).

## 2.0.0 - 2024-xx-xx
### Added
- Implement VC Data Model v2.0

## 1.1.0 - 2022-12-12
### Added
- Initial commit. Meant to model VC Data Model v1.1
