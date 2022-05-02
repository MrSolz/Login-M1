import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Rick and Morty character model.
 */
export const DemoModel = types.model("Demo").props({
    name: "demo"
})

type DemoType = Instance<typeof DemoModel>
export interface Demo extends DemoType { }
type DemoSnapshotType = SnapshotOut<typeof DemoModel>
export interface DemoSnapshot extends DemoSnapshotType { }
export const createDemoDefaultModel = () => types.optional(DemoModel, {})
