/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SafeMintDataInterface extends ethers.utils.Interface {
  functions: {
    "AUDITOR_ROLE()": FunctionFragment;
    "auditorClaimFee(string)": FunctionFragment;
    "challengeArr(uint256)": FunctionFragment;
    "contractAddress(address)": FunctionFragment;
    "getProject(string)": FunctionFragment;
    "getProjectById(uint256)": FunctionFragment;
    "lockedArr(uint256)": FunctionFragment;
    "namehashToId(bytes32)": FunctionFragment;
    "passedArr(uint256)": FunctionFragment;
    "pendingArr(uint256)": FunctionFragment;
    "projectArr(uint256)": FunctionFragment;
    "projectId(string)": FunctionFragment;
    "projectPrice()": FunctionFragment;
    "projectStatus(string,uint8)": FunctionFragment;
    "rejectArr(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "user(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "AUDITOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auditorClaimFee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "challengeArr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getProject", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getProjectById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockedArr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "namehashToId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "passedArr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingArr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectArr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "projectId", values: [string]): string;
  encodeFunctionData(
    functionFragment: "projectPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projectStatus",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectArr",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "user", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "AUDITOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auditorClaimFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "challengeArr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProject", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProjectById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lockedArr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "namehashToId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "passedArr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingArr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectArr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "projectPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rejectArr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;

  events: {
    "AuditorClaimFee(string,uint256)": EventFragment;
    "EditProject(string,uint256,uint256,string)": EventFragment;
    "ProjectStatus(string,uint8)": EventFragment;
    "SaveProject(string,address,address,uint256,uint256,string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuditorClaimFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EditProject"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProjectStatus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaveProject"): EventFragment;
}

export type AuditorClaimFeeEvent = TypedEvent<
  [string, BigNumber] & { name: string; projectFee: BigNumber }
>;

export type EditProjectEvent = TypedEvent<
  [string, BigNumber, BigNumber, string] & {
    name: string;
    startTime: BigNumber;
    endTime: BigNumber;
    ipfsAddress: string;
  }
>;

export type ProjectStatusEvent = TypedEvent<
  [string, number] & { name: string; status: number }
>;

export type SaveProjectEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] & {
    name: string;
    owner: string;
    projectContract: string;
    startTime: BigNumber;
    endTime: BigNumber;
    ipfsAddress: string;
    projectPrice: BigNumber;
    projectId: BigNumber;
  }
>;

export class SafeMintData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SafeMintDataInterface;

  functions: {
    AUDITOR_ROLE(overrides?: CallOverrides): Promise<[string]>;

    auditorClaimFee(
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    challengeArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contractAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getProject(
      name: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        [
          string,
          string,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          number
        ] & {
          name: string;
          owner: string;
          createTime: BigNumber;
          projectContract: string;
          startTime: BigNumber;
          endTime: BigNumber;
          ipfsAddress: string;
          projectFee: BigNumber;
          status: number;
        }
      ]
    >;

    getProjectById(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          number
        ] & {
          name: string;
          owner: string;
          createTime: BigNumber;
          projectContract: string;
          startTime: BigNumber;
          endTime: BigNumber;
          ipfsAddress: string;
          projectFee: BigNumber;
          status: number;
        }
      ]
    >;

    lockedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    namehashToId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    passedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    projectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number
      ] & {
        name: string;
        owner: string;
        createTime: BigNumber;
        projectContract: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
        projectFee: BigNumber;
        status: number;
      }
    >;

    projectId(name: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    projectPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    projectStatus(
      name: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rejectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    user(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  AUDITOR_ROLE(overrides?: CallOverrides): Promise<string>;

  auditorClaimFee(
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  challengeArr(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractAddress(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  getProject(
    name: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      [
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number
      ] & {
        name: string;
        owner: string;
        createTime: BigNumber;
        projectContract: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
        projectFee: BigNumber;
        status: number;
      }
    ]
  >;

  getProjectById(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      number
    ] & {
      name: string;
      owner: string;
      createTime: BigNumber;
      projectContract: string;
      startTime: BigNumber;
      endTime: BigNumber;
      ipfsAddress: string;
      projectFee: BigNumber;
      status: number;
    }
  >;

  lockedArr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  namehashToId(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  passedArr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  pendingArr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  projectArr(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      number
    ] & {
      name: string;
      owner: string;
      createTime: BigNumber;
      projectContract: string;
      startTime: BigNumber;
      endTime: BigNumber;
      ipfsAddress: string;
      projectFee: BigNumber;
      status: number;
    }
  >;

  projectId(name: string, overrides?: CallOverrides): Promise<BigNumber>;

  projectPrice(overrides?: CallOverrides): Promise<BigNumber>;

  projectStatus(
    name: string,
    status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rejectArr(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  user(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    AUDITOR_ROLE(overrides?: CallOverrides): Promise<string>;

    auditorClaimFee(name: string, overrides?: CallOverrides): Promise<void>;

    challengeArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractAddress(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    getProject(
      name: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        [
          string,
          string,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          number
        ] & {
          name: string;
          owner: string;
          createTime: BigNumber;
          projectContract: string;
          startTime: BigNumber;
          endTime: BigNumber;
          ipfsAddress: string;
          projectFee: BigNumber;
          status: number;
        }
      ]
    >;

    getProjectById(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number
      ] & {
        name: string;
        owner: string;
        createTime: BigNumber;
        projectContract: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
        projectFee: BigNumber;
        status: number;
      }
    >;

    lockedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    namehashToId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    passedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        number
      ] & {
        name: string;
        owner: string;
        createTime: BigNumber;
        projectContract: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
        projectFee: BigNumber;
        status: number;
      }
    >;

    projectId(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    projectPrice(overrides?: CallOverrides): Promise<BigNumber>;

    projectStatus(
      name: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    rejectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    user(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "AuditorClaimFee(string,uint256)"(
      name?: string | null,
      projectFee?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { name: string; projectFee: BigNumber }
    >;

    AuditorClaimFee(
      name?: string | null,
      projectFee?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { name: string; projectFee: BigNumber }
    >;

    "EditProject(string,uint256,uint256,string)"(
      name?: string | null,
      startTime?: null,
      endTime?: null,
      ipfsAddress?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      {
        name: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
      }
    >;

    EditProject(
      name?: string | null,
      startTime?: null,
      endTime?: null,
      ipfsAddress?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, string],
      {
        name: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
      }
    >;

    "ProjectStatus(string,uint8)"(
      name?: string | null,
      status?: null
    ): TypedEventFilter<[string, number], { name: string; status: number }>;

    ProjectStatus(
      name?: string | null,
      status?: null
    ): TypedEventFilter<[string, number], { name: string; status: number }>;

    "SaveProject(string,address,address,uint256,uint256,string,uint256,uint256)"(
      name?: string | null,
      owner?: string | null,
      projectContract?: string | null,
      startTime?: null,
      endTime?: null,
      ipfsAddress?: null,
      projectPrice?: null,
      projectId?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
      ],
      {
        name: string;
        owner: string;
        projectContract: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
        projectPrice: BigNumber;
        projectId: BigNumber;
      }
    >;

    SaveProject(
      name?: string | null,
      owner?: string | null,
      projectContract?: string | null,
      startTime?: null,
      endTime?: null,
      ipfsAddress?: null,
      projectPrice?: null,
      projectId?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
      ],
      {
        name: string;
        owner: string;
        projectContract: string;
        startTime: BigNumber;
        endTime: BigNumber;
        ipfsAddress: string;
        projectPrice: BigNumber;
        projectId: BigNumber;
      }
    >;
  };

  estimateGas: {
    AUDITOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    auditorClaimFee(
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    challengeArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProject(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    getProjectById(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    namehashToId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    passedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projectId(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    projectPrice(overrides?: CallOverrides): Promise<BigNumber>;

    projectStatus(
      name: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rejectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    user(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AUDITOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auditorClaimFee(
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    challengeArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProject(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProjectById(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    namehashToId(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    passedArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectId(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projectPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectStatus(
      name: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rejectArr(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
