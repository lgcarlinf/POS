
import { supabase } from "../../lib/supabase"

const Login = () => {

    const handleGoogleLogin = async () => {
        try {
            await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/dashboard`
                }
            })
        } catch (error) {
            console.error('Error al iniciar sesión:', error)
        }
    }


    return (
        <button onClick={handleGoogleLogin} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">Login</button>
    )
}

export default Login