import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AdCreated,
  AdServed,
  ApprovalForAll,
  CampaignStarted,
  CampaignStopped,
  Click,
  PublisherAdded,
  PublisherCreated,
  PublisherRemoved,
  TransferBatch,
  TransferSingle,
  URI,
  fundsAdded,
  fundsRemoved
} from "../generated/Server/Server"

export function createAdCreatedEvent(
  id: BigInt,
  totalFunds: BigInt,
  AdURI: string,
  Advertiser: Address
): AdCreated {
  let adCreatedEvent = changetype<AdCreated>(newMockEvent())

  adCreatedEvent.parameters = new Array()

  adCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalFunds",
      ethereum.Value.fromUnsignedBigInt(totalFunds)
    )
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam("AdURI", ethereum.Value.fromString(AdURI))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "Advertiser",
      ethereum.Value.fromAddress(Advertiser)
    )
  )

  return adCreatedEvent
}

export function createAdServedEvent(
  Adid: BigInt,
  publisherId: BigInt
): AdServed {
  let adServedEvent = changetype<AdServed>(newMockEvent())

  adServedEvent.parameters = new Array()

  adServedEvent.parameters.push(
    new ethereum.EventParam("Adid", ethereum.Value.fromUnsignedBigInt(Adid))
  )
  adServedEvent.parameters.push(
    new ethereum.EventParam(
      "publisherId",
      ethereum.Value.fromUnsignedBigInt(publisherId)
    )
  )

  return adServedEvent
}

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createCampaignStartedEvent(id: BigInt): CampaignStarted {
  let campaignStartedEvent = changetype<CampaignStarted>(newMockEvent())

  campaignStartedEvent.parameters = new Array()

  campaignStartedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return campaignStartedEvent
}

export function createCampaignStoppedEvent(id: BigInt): CampaignStopped {
  let campaignStoppedEvent = changetype<CampaignStopped>(newMockEvent())

  campaignStoppedEvent.parameters = new Array()

  campaignStoppedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return campaignStoppedEvent
}

export function createClickEvent(id: BigInt, PublisherId: BigInt): Click {
  let clickEvent = changetype<Click>(newMockEvent())

  clickEvent.parameters = new Array()

  clickEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  clickEvent.parameters.push(
    new ethereum.EventParam(
      "PublisherId",
      ethereum.Value.fromUnsignedBigInt(PublisherId)
    )
  )

  return clickEvent
}

export function createPublisherAddedEvent(
  id: BigInt,
  PublisherId: BigInt
): PublisherAdded {
  let publisherAddedEvent = changetype<PublisherAdded>(newMockEvent())

  publisherAddedEvent.parameters = new Array()

  publisherAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  publisherAddedEvent.parameters.push(
    new ethereum.EventParam(
      "PublisherId",
      ethereum.Value.fromUnsignedBigInt(PublisherId)
    )
  )

  return publisherAddedEvent
}

export function createPublisherCreatedEvent(
  id: BigInt,
  clickReward: BigInt,
  displayReward: BigInt,
  publisher: Address,
  url: string
): PublisherCreated {
  let publisherCreatedEvent = changetype<PublisherCreated>(newMockEvent())

  publisherCreatedEvent.parameters = new Array()

  publisherCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  publisherCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "clickReward",
      ethereum.Value.fromUnsignedBigInt(clickReward)
    )
  )
  publisherCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "displayReward",
      ethereum.Value.fromUnsignedBigInt(displayReward)
    )
  )
  publisherCreatedEvent.parameters.push(
    new ethereum.EventParam("publisher", ethereum.Value.fromAddress(publisher))
  )
  publisherCreatedEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )

  return publisherCreatedEvent
}

export function createPublisherRemovedEvent(
  id: BigInt,
  PublisherId: BigInt
): PublisherRemoved {
  let publisherRemovedEvent = changetype<PublisherRemoved>(newMockEvent())

  publisherRemovedEvent.parameters = new Array()

  publisherRemovedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  publisherRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "PublisherId",
      ethereum.Value.fromUnsignedBigInt(PublisherId)
    )
  )

  return publisherRemovedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createfundsAddedEvent(
  id: BigInt,
  AddedAmount: BigInt
): fundsAdded {
  let fundsAddedEvent = changetype<fundsAdded>(newMockEvent())

  fundsAddedEvent.parameters = new Array()

  fundsAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  fundsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "AddedAmount",
      ethereum.Value.fromUnsignedBigInt(AddedAmount)
    )
  )

  return fundsAddedEvent
}

export function createfundsRemovedEvent(
  id: BigInt,
  RemovedAmount: BigInt
): fundsRemoved {
  let fundsRemovedEvent = changetype<fundsRemoved>(newMockEvent())

  fundsRemovedEvent.parameters = new Array()

  fundsRemovedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  fundsRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "RemovedAmount",
      ethereum.Value.fromUnsignedBigInt(RemovedAmount)
    )
  )

  return fundsRemovedEvent
}
