import { types } from "mobx-state-tree"
import { DemoStoreModel } from "../demo-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
    demoStore: types.optional(DemoStoreModel, {}),
})
