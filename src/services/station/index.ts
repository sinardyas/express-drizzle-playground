import { SyncType } from "../../commons/types"
import { sync } from "../utils/sync"
import { sync as syncStation } from "./sync"

export const station = {
  sync: async (type: SyncType) => {
    const stations = await sync(syncStation, { item: "station", type })()

    return {
      status: 200,
      data: stations,
    }
  },
}
