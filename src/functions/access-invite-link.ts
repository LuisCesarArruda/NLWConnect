import { subscriptions } from "../drizzle/schema/subscriptions"
import { redis } from "../redis/client"

interface accesInviteLinkParams {
    subscriberId: string
}

export async function accesInviteLink({ subscriberId }: accesInviteLinkParams) {
    await redis.hincrby("referral: access-count", subscriberId, 1)
}
