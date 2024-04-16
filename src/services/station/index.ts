import { sync as syncStation } from "./sync"

export const station = {
  sync: async () => {
    const stations = await syncStation()

    return {
      status: 200,
      data: stations,
    }
  },
}
