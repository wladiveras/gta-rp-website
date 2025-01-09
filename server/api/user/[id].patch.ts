export default eventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const body = await readBody(event)

    const values = {
        ...(body.name && { name: body.name }),
        ...(body.email && { email: body.email }),
        ...(body.password && { password: body.password }),
        ...(body.avatar && { avatar: body.avatar }),
        ...(body.vrp_id && { vrp_id: body.vrp_id }),
        ...(body.discord_id && { discord_id: body.discord_id }),
        ...(body.discord_user && { discord_user: body.discord_user }),
        ...(body.supabase_id && { supabase_id: body.supabase_id }),
        createdAt: new Date()
    }

    const user = await useDrizzle()
        .update(tables.users)
        .set(values)
        .where(eq(tables.users.id, Number(id)))
        .returning()
        .get()

    return user
})
