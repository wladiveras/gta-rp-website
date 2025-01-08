import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),

    rp_id: text('rp_id').notNull(),
    discord_id: text('discord_id').notNull().unique(),
    discord_user: text('discord_user').notNull().unique(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    avatar: text('avatar').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})
