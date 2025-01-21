import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient'

export interface RouterContext {
    auth: SupabaseAuthClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => (
        <>
            <Outlet />
        </>
    ),
})


