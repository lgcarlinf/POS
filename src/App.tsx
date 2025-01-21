import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import { supabase } from "./lib/supabase";

const App = () => {
    const router = createRouter({
        routeTree,
        context: {
            auth: supabase.auth
        }
    })


    return (
        <RouterProvider router={router} />
    );
};

export default App;