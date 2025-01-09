import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    vrp_id: text('vrp_id'),
    discord_id: text('discord_id').unique(),
    supabase_id: text('supabase_id').unique(),
    discord_user: text('discord_user').unique(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    avatar: text('avatar').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})
