// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Ad extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ad entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Ad must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Ad", id.toString(), this);
    }
  }

  static load(id: string): Ad | null {
    return changetype<Ad | null>(store.get("Ad", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get AdId(): BigInt {
    let value = this.get("AdId");
    return value!.toBigInt();
  }

  set AdId(value: BigInt) {
    this.set("AdId", Value.fromBigInt(value));
  }

  get Advertiser(): Bytes {
    let value = this.get("Advertiser");
    return value!.toBytes();
  }

  set Advertiser(value: Bytes) {
    this.set("Advertiser", Value.fromBytes(value));
  }

  get TotalFunds(): BigInt {
    let value = this.get("TotalFunds");
    return value!.toBigInt();
  }

  set TotalFunds(value: BigInt) {
    this.set("TotalFunds", Value.fromBigInt(value));
  }

  get CurrentFunds(): BigInt {
    let value = this.get("CurrentFunds");
    return value!.toBigInt();
  }

  set CurrentFunds(value: BigInt) {
    this.set("CurrentFunds", Value.fromBigInt(value));
  }

  get TotalClicks(): BigInt {
    let value = this.get("TotalClicks");
    return value!.toBigInt();
  }

  set TotalClicks(value: BigInt) {
    this.set("TotalClicks", Value.fromBigInt(value));
  }

  get TotalViews(): BigInt {
    let value = this.get("TotalViews");
    return value!.toBigInt();
  }

  set TotalViews(value: BigInt) {
    this.set("TotalViews", Value.fromBigInt(value));
  }

  get Publishers(): Array<BigInt> {
    let value = this.get("Publishers");
    return value!.toBigIntArray();
  }

  set Publishers(value: Array<BigInt>) {
    this.set("Publishers", Value.fromBigIntArray(value));
  }

  get AdData(): string {
    let value = this.get("AdData");
    return value!.toString();
  }

  set AdData(value: string) {
    this.set("AdData", Value.fromString(value));
  }

  get isRunning(): boolean {
    let value = this.get("isRunning");
    return value!.toBoolean();
  }

  set isRunning(value: boolean) {
    this.set("isRunning", Value.fromBoolean(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}

export class Publisher extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Publisher entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Publisher must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Publisher", id.toString(), this);
    }
  }

  static load(id: string): Publisher | null {
    return changetype<Publisher | null>(store.get("Publisher", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get PublisherId(): BigInt {
    let value = this.get("PublisherId");
    return value!.toBigInt();
  }

  set PublisherId(value: BigInt) {
    this.set("PublisherId", Value.fromBigInt(value));
  }

  get Publisher(): Bytes {
    let value = this.get("Publisher");
    return value!.toBytes();
  }

  set Publisher(value: Bytes) {
    this.set("Publisher", Value.fromBytes(value));
  }

  get TotalEarnings(): BigInt {
    let value = this.get("TotalEarnings");
    return value!.toBigInt();
  }

  set TotalEarnings(value: BigInt) {
    this.set("TotalEarnings", Value.fromBigInt(value));
  }

  get TotalClicks(): BigInt {
    let value = this.get("TotalClicks");
    return value!.toBigInt();
  }

  set TotalClicks(value: BigInt) {
    this.set("TotalClicks", Value.fromBigInt(value));
  }

  get TotalViews(): BigInt {
    let value = this.get("TotalViews");
    return value!.toBigInt();
  }

  set TotalViews(value: BigInt) {
    this.set("TotalViews", Value.fromBigInt(value));
  }

  get Advertisers(): Array<BigInt> {
    let value = this.get("Advertisers");
    return value!.toBigIntArray();
  }

  set Advertisers(value: Array<BigInt>) {
    this.set("Advertisers", Value.fromBigIntArray(value));
  }

  get PublisherSite(): string {
    let value = this.get("PublisherSite");
    return value!.toString();
  }

  set PublisherSite(value: string) {
    this.set("PublisherSite", Value.fromString(value));
  }

  get ClickReward(): BigInt {
    let value = this.get("ClickReward");
    return value!.toBigInt();
  }

  set ClickReward(value: BigInt) {
    this.set("ClickReward", Value.fromBigInt(value));
  }

  get ViewReward(): BigInt {
    let value = this.get("ViewReward");
    return value!.toBigInt();
  }

  set ViewReward(value: BigInt) {
    this.set("ViewReward", Value.fromBigInt(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}

export class Advertiser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Advertiser entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Advertiser must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Advertiser", id.toString(), this);
    }
  }

  static load(id: string): Advertiser | null {
    return changetype<Advertiser | null>(store.get("Advertiser", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Address(): Bytes {
    let value = this.get("Address");
    return value!.toBytes();
  }

  set Address(value: Bytes) {
    this.set("Address", Value.fromBytes(value));
  }

  get TotalSpent(): BigInt {
    let value = this.get("TotalSpent");
    return value!.toBigInt();
  }

  set TotalSpent(value: BigInt) {
    this.set("TotalSpent", Value.fromBigInt(value));
  }

  get AdIds(): Array<BigInt> {
    let value = this.get("AdIds");
    return value!.toBigIntArray();
  }

  set AdIds(value: Array<BigInt>) {
    this.set("AdIds", Value.fromBigIntArray(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}
