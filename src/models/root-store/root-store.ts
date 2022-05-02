import { getSnapshot, types } from "mobx-state-tree"
import { DemoStoreModel } from "../demo-store"

/**
 * A RootStore model.
 */
// prettier-ignore
const RootStoreModel = types.model("RootStore").props({
    demoStore: types.optional(DemoStoreModel, {} as any),
})

export const store = getSnapshot(RootStoreModel.create({
    demoStore: {} // users is required here because it's not marked as optional
}));