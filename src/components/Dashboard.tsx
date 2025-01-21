
import { useNavigate } from "@tanstack/react-router"
import { supabase } from "../lib/supabase"

export const Dashboard = () => {
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut()
            navigate({ to: '/login' })
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }

    return (
        <>
            <div>Dashboard</div>
            <button onClick={handleSignOut} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 disabled:opacity-50 disabled:pointer-events-none">Log Out</button>
        </>
    )
}
