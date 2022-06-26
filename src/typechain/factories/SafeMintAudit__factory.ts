/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMintAudit, SafeMintAuditInterface } from "../SafeMintAudit";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_safeMint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ARBITRATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AUDITOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "adminSetAuditPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "adminSetChellengePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "adminSetDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "adminWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "enum ISafeMint.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "arbitrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "comments",
        type: "string",
      },
      {
        internalType: "enum ISafeMint.Status",
        name: "status",
        type: "uint8",
      },
    ],
    name: "audit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "auditPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auditRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "auditor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "auditTime",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "comments",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "auditFee",
        type: "uint256",
      },
      {
        internalType: "enum ISafeMint.Status",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "comments",
        type: "string",
      },
    ],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "challengePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "challengeRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "challenger",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "comments",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "challengeFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "claimAuditReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "claimChellengeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "feeRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "auditTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "auditor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getRoleMemberIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "safeMint",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260136008553480156200001657600080fd5b5060405162002aef38038062002aef83398101604081905262000039916200017e565b6200004660003362000078565b600480546001600160a01b039384166001600160a01b03199182161790915560058054929093169116179055620001b6565b62000084828262000088565b5050565b600082815260208181526040909120620000ad91839062001e1a620000ef821b17901c565b15620000845760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b600062000106836001600160a01b0384166200010f565b90505b92915050565b6000818152600183016020526040812054620001585750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000109565b50600062000109565b80516001600160a01b03811681146200017957600080fd5b919050565b600080604083850312156200019257600080fd5b6200019d8362000161565b9150620001ad6020840162000161565b90509250929050565b61292980620001c66000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80638e73c7e6116100f9578063a434e05711610097578063d547741f11610071578063d547741f14610452578063d9af113614610465578063f1098a3114610478578063fc0c546a1461048157600080fd5b8063a434e05714610408578063a4e465aa1461041b578063ca15c8731461043f57600080fd5b80639cea0787116100d35780639cea0787146103bd5780639de7d7ba146103e4578063a217fddf146103ed578063a28835b6146103f557600080fd5b80638e73c7e6146103745780639010d07c1461038757806391d148541461039a57600080fd5b806334eaa5e1116101665780634e0df3f6116101405780634e0df3f6146102ea57806361f0558e146102fd5780636871ee40146103225780636e1d616e1461034d57600080fd5b806334eaa5e1146102b157806336568abe146102c457806339e31595146102d757600080fd5b806323d35f7e116101a257806323d35f7e1461020d578063248a9ca3146102205780632ed9e812146102435780632f2ff15d1461029e57600080fd5b80630928374c146101c95780630fb5a6b4146101de5780631d54f0e8146101fa575b600080fd5b6101dc6101d736600461218c565b610494565b005b6101e760085481565b6040519081526020015b60405180910390f35b6101dc6102083660046121e3565b610957565b6101dc61021b3660046121fc565b610983565b6101e761022e3660046121e3565b60009081526020819052604090206002015490565b61027b6102513660046121e3565b60036020526000908152604090208054600182015460029092015490916001600160a01b03169083565b604080519384526001600160a01b039092166020840152908201526060016101f1565b6101dc6102ac36600461227d565b610c6e565b6101dc6102bf3660046122ad565b610cfc565b6101dc6102d236600461227d565b611428565b6101dc6102e53660046121e3565b6114a2565b6101e76102f836600461227d565b6114ce565b61031061030b366004612331565b6114f9565b6040516101f1969594939291906123e7565b600554610335906001600160a01b031681565b6040516001600160a01b0390911681526020016101f1565b6101e77f59a1c48e5837ad7a7f3dcedcbe129bf3249ec4fbf651fd4f5e2600ead39fe2f581565b6101dc6103823660046121e3565b6115e5565b610335610395366004612331565b611611565b6103ad6103a836600461227d565b611630565b60405190151581526020016101f1565b6101e77f16ceee8289685dd2a02b9c8ae81d2df373176ce53519e6284e2a2950d6546ffa81565b6101e760065481565b6101e7600081565b6101dc610403366004612434565b611648565b6101dc610416366004612451565b611755565b61042e610429366004612331565b611a0c565b6040516101f1959493929190612493565b6101e761044d3660046121e3565b611aee565b6101dc61046036600461227d565b611b05565b6101dc610473366004612451565b611b86565b6101e760075481565b600454610335906001600160a01b031681565b6104be7f16ceee8289685dd2a02b9c8ae81d2df373176ce53519e6284e2a2950d6546ffa33611630565b61051b5760405162461bcd60e51b815260206004820152602360248201527f73656e64657220646f65736e277420686176652061726269747261746f7220726044820152626f6c6560e81b60648201526084015b60405180910390fd5b600181600481111561052f5761052f6123af565b148061054c5750600481600481111561054a5761054a6123af565b145b6105885760405162461bcd60e51b815260206004820152600d60248201526c537461747573206572726f722160981b6044820152606401610512565b600554604051633ddbc30f60e21b81526000916001600160a01b03169063f76f0c3c906105bb90879087906004016124fb565b602060405180830381865afa1580156105d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fc9190612517565b600554604051635f72e6e560e11b8152600481018390529192506000916001600160a01b039091169063bee5cdca90602401600060405180830381865afa15801561064b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106739190810190612613565b90506003816101000151600481111561068e5761068e6123af565b146106d35760405162461bcd60e51b815260206004820152601560248201527450726f6a65637420737461747573206572726f722160581b6044820152606401610512565b60018360048111156106e7576106e76123af565b14156107b6576000805b60008481526002602052604090205481101561078d57600084815260026020526040902080548290811061072757610727612705565b906000526020600020906005020160040154826107449190612731565b6000858152600260205260408120805492945090918390811061076957610769612705565b600091825260209091206004600590920201015561078681612749565b90506106f1565b50600083815260036020526040812060020180548392906107af908490612731565b9091555050505b60048360048111156107ca576107ca6123af565b1415610899576000828152600260208181526040808420546003909252832090910154909190829061080490670de0b6b3a7640000612764565b61080e9190612783565b905060005b828110156108835761082d670de0b6b3a764000083612783565b600086815260026020526040902080548390811061084d5761084d612705565b9060005260206000209060050201600401600082825461086d9190612731565b9091555061087c905081612749565b9050610813565b5050506000828152600360205260408120600201555b6005546040516302e2647960e61b81526001600160a01b039091169063b8991e40906108cd908890889088906004016127a5565b600060405180830381600087803b1580156108e757600080fd5b505af11580156108fb573d6000803e3d6000fd5b50506040513392506109119150879087906127c8565b60405180910390207fc3cfb93e98af5dbce223e3dce9c0bb9df1cc0a287fc736812a8cbdd20f34bbc98560405161094891906127d8565b60405180910390a35050505050565b610962600033611630565b61097e5760405162461bcd60e51b8152600401610512906127e6565b600855565b600480546007546040516323b872dd60e01b8152339381019390935230602484015260448301526001600160a01b0316906323b872dd906064016020604051808303816000875af11580156109dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a00919061281d565b50600554604051633ddbc30f60e21b81526000916001600160a01b03169063f76f0c3c90610a3490889088906004016124fb565b602060405180830381865afa158015610a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a759190612517565b6008546000828152600360205260409020549192504291610a969190612731565b11610ace5760405162461bcd60e51b8152602060048201526008602482015267657870697265642160c01b6044820152606401610512565b600260008281526020019081526020016000206040518060a00160405280838152602001336001600160a01b0316815260200142815260200185858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050600754602093840152508354600180820186559482529082902083516005909202019081558282015193810180546001600160a01b0319166001600160a01b03909516949094179093556040820151600284015560608201518051929392610bac926003850192019061209a565b50608091909101516004918201556005546040516302e2647960e61b81526001600160a01b039091169163b8991e4091610bed9189918991600391016127a5565b600060405180830381600087803b158015610c0757600080fd5b505af1158015610c1b573d6000803e3d6000fd5b5050604051339250610c319150879087906127c8565b60405180910390207fdc21ae6de88cd55439f170e62c30e773b86a29f909e825b0859b44bbdf79e9a960075486866040516109489392919061283f565b600082815260208190526040902060020154610c8a9033611630565b610cee5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526e0818591b5a5b881d1bc819dc985b9d608a1b6064820152608401610512565b610cf88282611e2f565b5050565b610d267f59a1c48e5837ad7a7f3dcedcbe129bf3249ec4fbf651fd4f5e2600ead39fe2f533611630565b610d725760405162461bcd60e51b815260206004820181905260248201527f73656e64657220646f65736e277420686176652061756469746f7220726f6c656044820152606401610512565b6001816004811115610d8657610d866123af565b1480610da357506002816004811115610da157610da16123af565b145b80610dbf57506004816004811115610dbd57610dbd6123af565b145b610dfb5760405162461bcd60e51b815260206004820152600d60248201526c537461747573206572726f722160981b6044820152606401610512565b600554604051633ddbc30f60e21b81526000916001600160a01b03169063f76f0c3c90610e2e90899089906004016124fb565b602060405180830381865afa158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f9190612517565b600554604051635f72e6e560e11b8152600481018390529192506000916001600160a01b039091169063bee5cdca90602401600060405180830381865afa158015610ebe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610ee69190810190612613565b905060008161010001516004811115610f0157610f016123af565b14610f465760405162461bcd60e51b815260206004820152601560248201527450726f6a65637420737461747573206572726f722160581b6044820152606401610512565b60008281526003602052604081205461101d5750600654600480546040516323b872dd60e01b81523392810192909252306024830152604482018390526001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610fb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd9919061281d565b5060008381526003602052604081204281556001810180546001600160a01b031916331790556002018054839290611012908490612731565b909155506110779050565b6000838152600360205260409020600101546001600160a01b031633146110775760405162461bcd60e51b815260206004820152600e60248201526d61756469746f72206572726f722160901b6044820152606401610512565b600160008481526020019081526020016000206040518060c00160405280858152602001336001600160a01b0316815260200142815260200188888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050509082525060208101849052604001866004811115611105576111056123af565b9052815460018082018455600093845260209384902083516006909302019182558284015190820180546001600160a01b0319166001600160a01b0390921691909117905560408201516002820155606082015180519293919261116f926003850192019061209a565b506080820151816004015560a08201518160050160006101000a81548160ff021916908360048111156111a4576111a46123af565b0217905550506005546040516302e2647960e61b81526001600160a01b03909116915063b8991e40906111df908b908b9089906004016127a5565b600060405180830381600087803b1580156111f957600080fd5b505af115801561120d573d6000803e3d6000fd5b506001925061121a915050565b84600481111561122c5761122c6123af565b148061124957506004846004811115611247576112476123af565b145b156113c557600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a0823190602401602060405180830381865afa15801561129c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c09190612517565b6005546040516235644d60e31b81529192506001600160a01b0316906301ab2268906112f2908c908c906004016124fb565b600060405180830381600087803b15801561130c57600080fd5b505af1158015611320573d6000803e3d6000fd5b5050600480546040516370a0823160e01b815230928101929092528493506001600160a01b031691506370a0823190602401602060405180830381865afa15801561136f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113939190612517565b61139d9190612862565b600085815260036020526040812060020180549091906113be908490612731565b9091555050505b60405133906113d7908a908a906127c8565b60405180910390207f7d2fafeb3b96c1bb326ed875134810bdead7730bf8bdb6856b1445085d61fe5e6006548989896040516114169493929190612879565b60405180910390a35050505050505050565b6001600160a01b03811633146114985760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610512565b610cf88282611e88565b6114ad600033611630565b6114c95760405162461bcd60e51b8152600401610512906127e6565b600755565b6000828152602081815260408083206001600160a01b03851684526001019091529020545b92915050565b6001602052816000526040600020818154811061151557600080fd5b600091825260209091206006909102018054600182015460028301546003840180549396506001600160a01b0390921694509291611552906128a2565b80601f016020809104026020016040519081016040528092919081815260200182805461157e906128a2565b80156115cb5780601f106115a0576101008083540402835291602001916115cb565b820191906000526020600020905b8154815290600101906020018083116115ae57829003601f168201915b50505050600483015460059093015491929160ff16905086565b6115f0600033611630565b61160c5760405162461bcd60e51b8152600401610512906127e6565b600655565b60008281526020819052604081206116299083611ee1565b9392505050565b60008281526020819052604081206116299083611eed565b611653600033611630565b61166f5760405162461bcd60e51b8152600401610512906127e6565b600480546040516370a0823160e01b815230928101929092526001600160a01b03169063a9059cbb90839083906370a0823190602401602060405180830381865afa1580156116c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e69190612517565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015611731573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf8919061281d565b600554604051633ddbc30f60e21b81526000916001600160a01b03169063f76f0c3c9061178890869086906004016124fb565b602060405180830381865afa1580156117a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c99190612517565b60085460008281526003602052604090205491925042916117ea9190612731565b1061182f5760405162461bcd60e51b8152602060048201526015602482015274617564697454696d65203c206475726174696f6e2160581b6044820152606401610512565b600554604051635f72e6e560e11b8152600481018390526000916001600160a01b03169063bee5cdca90602401600060405180830381865afa158015611879573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118a19190810190612613565b9050600181610100015160048111156118bc576118bc6123af565b14806118de5750600481610100015160048111156118dc576118dc6123af565b145b61191a5760405162461bcd60e51b815260206004820152600d60248201526c537461727573206572726f722160981b6044820152606401610512565b6000828152600360205260409020600101546001600160a01b031633146119745760405162461bcd60e51b815260206004820152600e60248201526d61756469746f72206572726f722160901b6044820152606401610512565b6000828152600360205260409020600201548015611a05576004805460405163a9059cbb60e01b81523392810192909252602482018390526001600160a01b03169063a9059cbb906044015b6020604051808303816000875af11580156119df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a03919061281d565b505b5050505050565b60026020528160005260406000208181548110611a2857600080fd5b600091825260209091206005909102018054600182015460028301546003840180549396506001600160a01b0390921694509291611a65906128a2565b80601f0160208091040260200160405190810160405280929190818152602001828054611a91906128a2565b8015611ade5780601f10611ab357610100808354040283529160200191611ade565b820191906000526020600020905b815481529060010190602001808311611ac157829003601f168201915b5050505050908060040154905085565b60008181526020819052604081206114f390611f0f565b600082815260208190526040902060020154611b219033611630565b6114985760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201526f2061646d696e20746f207265766f6b6560801b6064820152608401610512565b600554604051633ddbc30f60e21b81526000916001600160a01b03169063f76f0c3c90611bb990869086906004016124fb565b602060405180830381865afa158015611bd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bfa9190612517565b6008546000828152600360205260409020549192504291611c1b9190612731565b10611c605760405162461bcd60e51b8152602060048201526015602482015274617564697454696d65203c206475726174696f6e2160581b6044820152606401610512565b600554604051635f72e6e560e11b8152600481018390526000916001600160a01b03169063bee5cdca90602401600060405180830381865afa158015611caa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611cd29190810190612613565b905060048161010001516004811115611ced57611ced6123af565b14611d295760405162461bcd60e51b815260206004820152600c60248201526b29ba30b93ab99032b93937b960a11b6044820152606401610512565b6000805b600084815260026020526040902054811015611ddb576000848152600260205260409020805433919083908110611d6657611d66612705565b60009182526020909120600160059092020101546001600160a01b03161415611dc9576000848152600260205260409020805482908110611da957611da9612705565b90600052602060002090600502016004015482611dc69190612731565b91505b80611dd381612749565b915050611d2d565b508015611a05576004805460405163a9059cbb60e01b81523392810192909252602482018390526001600160a01b03169063a9059cbb906044016119c0565b6000611629836001600160a01b038416611f19565b6000828152602081905260409020611e479082611e1a565b15610cf85760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152602081905260409020611ea09082611f68565b15610cf85760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b60006116298383611f7d565b6001600160a01b03811660009081526001830160205260408120541515611629565b60006114f3825490565b6000818152600183016020526040812054611f60575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556114f3565b5060006114f3565b6000611629836001600160a01b038416611fa7565b6000826000018281548110611f9457611f94612705565b9060005260206000200154905092915050565b60008181526001830160205260408120548015612090576000611fcb600183612862565b8554909150600090611fdf90600190612862565b9050818114612044576000866000018281548110611fff57611fff612705565b906000526020600020015490508087600001848154811061202257612022612705565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080612055576120556128dd565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506114f3565b60009150506114f3565b8280546120a6906128a2565b90600052602060002090601f0160209004810192826120c8576000855561210e565b82601f106120e157805160ff191683800117855561210e565b8280016001018555821561210e579182015b8281111561210e5782518255916020019190600101906120f3565b5061211a92915061211e565b5090565b5b8082111561211a576000815560010161211f565b60008083601f84011261214557600080fd5b50813567ffffffffffffffff81111561215d57600080fd5b60208301915083602082850101111561217557600080fd5b9250929050565b6005811061218957600080fd5b50565b6000806000604084860312156121a157600080fd5b833567ffffffffffffffff8111156121b857600080fd5b6121c486828701612133565b90945092505060208401356121d88161217c565b809150509250925092565b6000602082840312156121f557600080fd5b5035919050565b6000806000806040858703121561221257600080fd5b843567ffffffffffffffff8082111561222a57600080fd5b61223688838901612133565b9096509450602087013591508082111561224f57600080fd5b5061225c87828801612133565b95989497509550505050565b6001600160a01b038116811461218957600080fd5b6000806040838503121561229057600080fd5b8235915060208301356122a281612268565b809150509250929050565b6000806000806000606086880312156122c557600080fd5b853567ffffffffffffffff808211156122dd57600080fd5b6122e989838a01612133565b9097509550602088013591508082111561230257600080fd5b5061230f88828901612133565b90945092505060408601356123238161217c565b809150509295509295909350565b6000806040838503121561234457600080fd5b50508035926020909101359150565b60005b8381101561236e578181015183820152602001612356565b8381111561237d576000848401525b50505050565b6000815180845261239b816020860160208601612353565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b600581106123e357634e487b7160e01b600052602160045260246000fd5b9052565b86815260018060a01b038616602082015284604082015260c06060820152600061241460c0830186612383565b905083608083015261242960a08301846123c5565b979650505050505050565b60006020828403121561244657600080fd5b813561162981612268565b6000806020838503121561246457600080fd5b823567ffffffffffffffff81111561247b57600080fd5b61248785828601612133565b90969095509350505050565b85815260018060a01b038516602082015283604082015260a0606082015260006124c060a0830185612383565b90508260808301529695505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60208152600061250f6020830184866124d2565b949350505050565b60006020828403121561252957600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff8111828210171561256a5761256a612530565b60405290565b600082601f83011261258157600080fd5b815167ffffffffffffffff8082111561259c5761259c612530565b604051601f8301601f19908116603f011681019082821181831017156125c4576125c4612530565b816040528381528660208588010111156125dd57600080fd5b6125ee846020830160208901612353565b9695505050505050565b805161260381612268565b919050565b80516126038161217c565b60006020828403121561262557600080fd5b815167ffffffffffffffff8082111561263d57600080fd5b90830190610120828603121561265257600080fd5b61265a612546565b82518281111561266957600080fd5b61267587828601612570565b825250612684602084016125f8565b60208201526040830151604082015261269f606084016125f8565b60608201526080830151608082015260a083015160a082015260c0830151828111156126ca57600080fd5b6126d687828601612570565b60c08301525060e083015160e082015261010091506126f6828401612608565b91810191909152949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156127445761274461271b565b500190565b600060001982141561275d5761275d61271b565b5060010190565b600081600019048311821515161561277e5761277e61271b565b500290565b6000826127a057634e487b7160e01b600052601260045260246000fd5b500490565b6040815260006127b96040830185876124d2565b905061250f60208301846123c5565b8183823760009101908152919050565b602081016114f382846123c5565b6020808252601e908201527f73656e64657220646f65736e277420686176652061646d696e20726f6c650000604082015260600190565b60006020828403121561282f57600080fd5b8151801515811461162957600080fd5b8381526040602082015260006128596040830184866124d2565b95945050505050565b6000828210156128745761287461271b565b500390565b8481526060602082015260006128936060830185876124d2565b905061285960408301846123c5565b600181811c908216806128b657607f821691505b602082108114156128d757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220959258b037f1f71d58c5a1ae051a1f4e383909714dde274e0e3533b322223fde64736f6c634300080b0033";

export class SafeMintAudit__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token: string,
    _safeMint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeMintAudit> {
    return super.deploy(
      _token,
      _safeMint,
      overrides || {}
    ) as Promise<SafeMintAudit>;
  }
  getDeployTransaction(
    _token: string,
    _safeMint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _safeMint, overrides || {});
  }
  attach(address: string): SafeMintAudit {
    return super.attach(address) as SafeMintAudit;
  }
  connect(signer: Signer): SafeMintAudit__factory {
    return super.connect(signer) as SafeMintAudit__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMintAuditInterface {
    return new utils.Interface(_abi) as SafeMintAuditInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMintAudit {
    return new Contract(address, _abi, signerOrProvider) as SafeMintAudit;
  }
}
