import {
  AdCreated as AdCreatedEvent,
  AdServed as AdServedEvent,
  CampaignStarted as CampaignStartedEvent,
  CampaignStopped as CampaignStoppedEvent,
  Click as ClickEvent,
  PublisherAdded as PublisherAddedEvent,
  PublisherCreated as PublisherCreatedEvent,
  PublisherRemoved as PublisherRemovedEvent,
  fundsAdded as fundsAddedEvent,
  fundsRemoved as fundsRemovedEvent,
} from "../generated/Server/Server";
import { BigInt } from "@graphprotocol/graph-ts";
import { Ad, Advertiser, Publisher } from "../generated/schema";

export function handleAdCreated(event: AdCreatedEvent): void {
  let entity = new Ad(event.params.id.toString());
  entity.id = event.params.id.toString();
  entity.AdId = event.params.id;
  entity.Advertiser = event.params.Advertiser;
  entity.TotalFunds = event.params.totalFunds;
  entity.CurrentFunds = event.params.totalFunds;
  entity.TotalClicks = new BigInt(0);
  entity.TotalViews = new BigInt(0);
  entity.Publishers = new Array<BigInt>();
  entity.AdImg = event.params.AdURI;
  entity.isRunning = false;
  let AdvertiserEntity = Advertiser.load(event.params.Advertiser.toString());
  if (AdvertiserEntity == null) {
    AdvertiserEntity = new Advertiser(event.params.Advertiser.toString());
    AdvertiserEntity.id = event.params.Advertiser.toString();
    AdvertiserEntity.Address = event.params.Advertiser;
    AdvertiserEntity.TotalSpent = BigInt.fromString("0");
    AdvertiserEntity.AdIds = new Array<BigInt>();

    AdvertiserEntity.BlockNumber = event.block.number;
    AdvertiserEntity.BlockTimestamp = event.block.timestamp;
    AdvertiserEntity.TransactionHash = event.transaction.hash;
    AdvertiserEntity.save();
  }
  let AdIds = AdvertiserEntity.AdIds;
  AdIds.push(event.params.id);
  AdvertiserEntity.AdIds = AdIds;
  AdvertiserEntity.save();

  entity.BlockNumber = event.block.number;
  entity.BlockTimestamp = event.block.timestamp;
  entity.TransactionHash = event.transaction.hash;

  entity.save();
}

export function handlePublisherCreated(event: PublisherCreatedEvent): void {
  let entity = new Publisher(event.params.id.toString());
  entity.id = event.params.id.toString();
  entity.PublisherId = event.params.id;
  entity.Publisher = event.params.publisher;
  entity.TotalEarnings = new BigInt(0);
  entity.TotalClicks = new BigInt(0);
  entity.TotalViews = new BigInt(0);
  entity.Advertisers = new Array<BigInt>();
  entity.PublisherSite = event.params.url;
  entity.ClickReward = event.params.clickReward;
  entity.ViewReward = event.params.displayReward;

  entity.BlockNumber = event.block.number;
  entity.BlockTimestamp = event.block.timestamp;
  entity.TransactionHash = event.transaction.hash;

  entity.save();
}

export function handleCampaignStarted(event: CampaignStartedEvent): void {
  let entity = Ad.load(event.params.id.toString());
  if (entity != null) {
    entity.isRunning = true;
    entity.save();
  } else {
    return;
  }
}

export function handlePublisherAdded(event: PublisherAddedEvent): void {
  let entity = Ad.load(event.params.id.toString());
  let pubEntity = Publisher.load(event.params.PublisherId.toString());
  if (entity != null && pubEntity != null) {
    let newPublishers = entity.Publishers;
    newPublishers.push(event.params.PublisherId);
    entity.Publishers = newPublishers;
    entity.save();
    let newAdvertisers = pubEntity.Advertisers;
    newAdvertisers.push(event.params.id);
    pubEntity.Advertisers = newAdvertisers;
    pubEntity.save();
  } else {
    return;
  }
}

export function handleAdServed(event: AdServedEvent): void {
  let entity = Ad.load(event.params.Adid.toString());
  let pubEntity = Publisher.load(event.params.publisherId.toString());
  if (entity != null && pubEntity != null) {
    let AdvertiserEntity = Advertiser.load(entity.Advertiser.toString());
    let inc = BigInt.fromString("1");
    let totalViews = entity.TotalViews;
    totalViews = totalViews.plus(inc);
    entity.TotalViews = totalViews;
    let currentFunds = entity.CurrentFunds;
    currentFunds = currentFunds.minus(pubEntity.ViewReward);
    entity.CurrentFunds = currentFunds;
    entity.save();
    totalViews = pubEntity.TotalViews;
    totalViews = totalViews.plus(inc);
    pubEntity.TotalViews = totalViews;
    let reward = pubEntity.ViewReward;
    pubEntity.TotalEarnings = pubEntity.TotalEarnings.plus(reward);
    if (AdvertiserEntity != null) {
      AdvertiserEntity.TotalSpent = AdvertiserEntity.TotalSpent.plus(reward);
      AdvertiserEntity.save();
    }
    pubEntity.save();
  } else {
    return;
  }
}

export function handleClick(event: ClickEvent): void {
  let entity = Ad.load(event.params.id.toString());
  let pubEntity = Publisher.load(event.params.PublisherId.toString());
  if (entity != null && pubEntity != null) {
    let AdvertiserEntity = Advertiser.load(entity.Advertiser.toString());
    let inc = BigInt.fromString("1");
    let totalClicks = entity.TotalClicks;
    totalClicks = totalClicks.plus(inc);
    entity.TotalClicks = totalClicks;
    entity.CurrentFunds = entity.CurrentFunds.minus(pubEntity.ClickReward);
    totalClicks = pubEntity.TotalClicks;
    totalClicks = totalClicks.plus(inc);
    pubEntity.TotalClicks = totalClicks;
    let reward = pubEntity.ClickReward;
    pubEntity.TotalEarnings = pubEntity.TotalEarnings.plus(reward);
    let index = pubEntity.Advertisers.indexOf(event.params.id);
    if (index <= -1) {
      let newAdvertisers = pubEntity.Advertisers;
      newAdvertisers.push(event.params.id);
      pubEntity.Advertisers = newAdvertisers;
    }
    if (AdvertiserEntity != null) {
      AdvertiserEntity.TotalSpent = AdvertiserEntity.TotalSpent.plus(reward);
      AdvertiserEntity.save();
    }
    entity.save();
    pubEntity.save();
  } else {
    return;
  }
}

export function handleCampaignStopped(event: CampaignStoppedEvent): void {
  let entity = Ad.load(event.params.id.toString());
  if (entity != null) {
    entity.isRunning = false;
    entity.save();
  } else {
    return;
  }
}

export function handlePublisherRemoved(event: PublisherRemovedEvent): void {
  let entity = Ad.load(event.params.id.toString());
  let pubEntity = Publisher.load(event.params.PublisherId.toString());
  if (entity != null && pubEntity != null) {
    let newPublishers = entity.Publishers;
    let index = newPublishers.indexOf(event.params.PublisherId);
    newPublishers.splice(index, 1);
    entity.Publishers = newPublishers;
    let newAdvertisers = pubEntity.Advertisers;
    index = newAdvertisers.indexOf(event.params.id);
    newAdvertisers.splice(index, 1);
    pubEntity.Advertisers = newAdvertisers;
    pubEntity.save();
    entity.save();
  } else {
    return;
  }
}

export function handlefundsAdded(event: fundsAddedEvent): void {
  let entity = Ad.load(event.params.id.toString());
  if (entity != null) {
    entity.TotalFunds = entity.TotalFunds.plus(event.params.AddedAmount);
    entity.CurrentFunds = entity.CurrentFunds.plus(event.params.AddedAmount);
    entity.save();
  } else {
    return;
  }
}

export function handlefundsRemoved(event: fundsRemovedEvent): void {
  let entity = Ad.load(event.params.id.toString());
  if (entity != null) {
    entity.TotalFunds = entity.TotalFunds.minus(event.params.RemovedAmount);
    entity.save();
  } else {
    return;
  }
}
