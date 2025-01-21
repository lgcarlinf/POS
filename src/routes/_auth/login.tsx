import { createFileRoute, redirect } from '@tanstack/react-router'
import Login from '../../components/auth/Login'

export const Route = createFileRoute('/_auth/login')({
    beforeLoad: async (ctx) => {
        const { auth } = ctx.context
        const { data: { session } } = await auth.getSession()

        if (session) {
            throw redirect({
                to: '/dashboard',
            })
        }
    },
    component: Login,
})

