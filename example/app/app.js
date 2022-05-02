import "./i18n";
import "./utils/ignore-warnings"
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { initFonts } from "./theme/fonts";
import { ErrorBoundary } from "./screens/Error/errorBoundary"
import { RootStoreProvider, setupRootStore } from "./models"
const App = ({ }) => {
    const [rootStore, setRootStore] = useState(undefined)
    useEffect(() => {
        ; (async () => {
            await initFonts()
            setupRootStore().then(setRootStore)
        })()
    }, [])

    const {
        initialNavigationState,
        onNavigationStateChange,
        isRestored: isNavigationStateRestored,
    } = useNavigationPersistence(NAVIGATION_PERSISTENCE_KEY)
    if (!rootStore || !isNavigationStateRestored) return null
    return (
        <RootStoreProvider value={rootStore}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <ErrorBoundary catchErrors={"always"}>
                    <AppNavigator
                        initialState={initialNavigationState}
                        onStateChange={onNavigationStateChange}
                    />
                </ErrorBoundary>
            </SafeAreaProvider>
        </RootStoreProvider>
    )
};

export default App;
