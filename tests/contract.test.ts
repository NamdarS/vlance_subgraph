import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { verifiedGithubContributor } from "../generated/schema"
import { verifiedGithubContributor as verifiedGithubContributorEvent } from "../generated/Contract/Contract"
import { handleverifiedGithubContributor } from "../src/contract"
import { createverifiedGithubContributorEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let contributor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newverifiedGithubContributorEvent = createverifiedGithubContributorEvent(
      contributor
    )
    handleverifiedGithubContributor(newverifiedGithubContributorEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("verifiedGithubContributor created and stored", () => {
    assert.entityCount("verifiedGithubContributor", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "verifiedGithubContributor",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contributor",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
