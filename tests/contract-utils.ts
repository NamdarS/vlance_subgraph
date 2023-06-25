import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { verifiedGithubContributor } from "../generated/Contract/Contract"

export function createverifiedGithubContributorEvent(
  contributor: Address
): verifiedGithubContributor {
  let verifiedGithubContributorEvent = changetype<verifiedGithubContributor>(
    newMockEvent()
  )

  verifiedGithubContributorEvent.parameters = new Array()

  verifiedGithubContributorEvent.parameters.push(
    new ethereum.EventParam(
      "contributor",
      ethereum.Value.fromAddress(contributor)
    )
  )

  return verifiedGithubContributorEvent
}
