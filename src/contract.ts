import { verifiedGithubContributor as verifiedGithubContributorEvent } from "../generated/Contract/Contract"
import { verifiedGithubContributor } from "../generated/schema"

export function handleverifiedGithubContributor(
  event: verifiedGithubContributorEvent
): void {
  let entity = new verifiedGithubContributor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contributor = event.params.contributor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
