import { types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-env"

export const DemoStoreModel = types
    .model("DemoStore")
    .props({
        demo: "demo main store"
    })
    .extend(withEnvironment)
    .actions((self) => ({

    }))
    .actions((self) => ({

    }))

export const createDemoStoreModelDefaultModel = () => types.optional(DemoStoreModel, {})
