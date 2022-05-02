import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Example store containing Rick and Morty characters
 */
export const DemoStoreModel = types
    .model("DemoStore")
    .props({
        demo: "demo store lib",
    })
    .actions((self) => ({
        saveDemo: (demoSnapshotType: string) => {
            self.demo = demoSnapshotType
        },
        getDemo: () => {

        }
    }))

type CharacterStoreType = Instance<typeof DemoStoreModel>
export interface CharacterStore extends CharacterStoreType { }
type CharacterStoreSnapshotType = SnapshotOut<typeof DemoStoreModel>
export interface CharacterStoreSnapshot extends CharacterStoreSnapshotType { }
export const createCharacterStoreDefaultModel = () => types.optional(DemoStoreModel, {})
