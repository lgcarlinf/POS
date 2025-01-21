import { createFileRoute, redirect } from '@tanstack/react-router'
import { Dashboard } from '../../components/Dashboard'

export const Route = createFileRoute('/dashboard/')({
  component: Dashboard,
  beforeLoad: async (ctx) => {

    const { auth } = ctx.context
    const { data: { session } } = await auth.getSession()

    if (!session)
      throw redirect({
        to: '/login',
      })
  }
})


