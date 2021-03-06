/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ISafeMintAudit,
  ISafeMintAuditInterface,
} from "../ISafeMintAudit";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "arbitrator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ISafeMint.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "ArbitrateProject",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "auditor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "auditPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comments",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum ISafeMint.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "AuditProject",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "challenger",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "challengePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comments",
        type: "string",
      },
    ],
    name: "ChallengeProject",
    type: "event",
  },
];

export class ISafeMintAudit__factory {
  static readonly abi = _abi;
  static createInterface(): ISafeMintAuditInterface {
    return new utils.Interface(_abi) as ISafeMintAuditInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISafeMintAudit {
    return new Contract(address, _abi, signerOrProvider) as ISafeMintAudit;
  }
}
