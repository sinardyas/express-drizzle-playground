import { z } from "zod"
import { logger } from "../../commons/utils/log"

export const sync = async () => {
  logger.info("[SYNC][STATION] Syncing station data started")

  try {
    const res = await fetch(
      "https://api-partner.krl.co.id/krlweb/v1/krl-station",
    ).then((res) => res.json())

    logger.info("[SYNC][STATION] Fetched data from API")

    const schema = z.object({
      status: z.number(),
      message: z.string(),
      data: z.array(
        z.object({
          sta_id: z.string(),
          sta_name: z.string(),
          group_wil: z.number(),
          fg_enable: z.number(),
        }),
      ),
    })

    const parsed = schema.parse(res)

    logger.info(`[SYNC][STATION] Total ${parsed.data.length} fetched`)

    return parsed.data
  } catch (error) {
    logger.error("[SYNC][STATION] Error", error)
  }
}
