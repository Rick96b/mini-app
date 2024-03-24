import { RootStore } from 'app/store/rootStore';
import { ReactNode } from 'react'
import { StoreContext } from 'shared/storeContext/storeContext';

function WithStore({ children }: { children: ReactNode }) {
    const root = new RootStore()

    return (
        <StoreContext.Provider value={root}>
            {children}
        </StoreContext.Provider>
    )
}

export default WithStore