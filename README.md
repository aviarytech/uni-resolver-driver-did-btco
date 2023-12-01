![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver: BTCO

This is a [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:btco** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## Requirements

* A publicly accessible [Ord (version > 0.12.2)](https://github.com/ordinals/ord) explorer for the networks of interest
  * Mainnet
  * Signet
  * Regtest
  * Testnet

## Example DIDs

```
did:btco:sig:6915376990035
```

## Build and Run (Docker)

```
docker build -f ./Dockerfile . -t brianrichter/did-btco
docker run -p 8080:8080 brianrichter/did-btco
curl -X GET http://localhost:8080/1.0/identifiers/did:btco:sig:6915376990035
```

## Build and Run (NodeJS)

```
npm start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

### `ORD_API`

 * The Base URL of a Mainnet Ord explorer.
 * Default value: (empty string)

### `ORD_SIGNET_API`

 * The Base URL of a Signet Ord explorer.
 * Default value: (empty string)

### `ORD_REGTEST_API`

 * The Base URL of a Regtest Ord explorer.
 * Default value: (empty string)

### `ORD_TESTNET_API`

 * The Base URL of a Testnet Ord explorer.
 * Default value: (empty string)

### `PORT`

 * The port the application will listen on.
 * Default valuie: (8080)

## Driver Metadata

The driver returns the following metadata in addition to a DID document:

### Resolution Metadata

* `error?`: Error message if there is any
* `did`: The DID that was resolved
* `inscriptionId`: The inscription the DID Document was written to

### DID Document Metadata

* `writes`: The number of times the DID has been written to
