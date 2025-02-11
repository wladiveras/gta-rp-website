import { relations } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    vrp_id: text('vrp_id').unique(),
    discord_id: text('discord_id').unique(),
    supabase_id: text('supabase_id').unique(),
    discord_user: text('discord_user').unique(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    password: text('password'),
    avatar: text('avatar'),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})

export const items = sqliteTable('items', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    code: text('code').notNull().unique(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    price: integer('price').notNull(),
    category: text('category').notNull().default('others'),
    hasCoupon: integer('has_coupon').notNull().default(0),
    isActive: integer('is_active').notNull().default(0),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})

export const coupons = sqliteTable('coupons', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    code: text('code').notNull().unique(),
    name: text('name').notNull(),
    isActive: integer('is_active').notNull().default(1),
    createdById: integer('created_by_id')
        .notNull()
        .references(() => users.id),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})

export const orders = sqliteTable('orders', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    userId: integer('user_id')
        .notNull()
        .references(() => users.id),
    couponId: integer('coupon_id').references(() => coupons.id),
    status: text('status').notNull().default('pending'),
    total: integer('total').notNull(),
    subTotal: integer('sub_total').notNull(),
    tax: integer('tax').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})

export const orderItems = sqliteTable('orders_items', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    orderId: integer('order_id')
        .notNull()
        .references(() => orders.id),
    itemId: integer('item_id')
        .notNull()
        .references(() => items.id),
    quantity: integer('quantity').notNull(),
    price: integer('price').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' })
        .notNull()
        .default(new Date())
})

export const ordersRelations = relations(orders, ({ many }) => ({
    orderItems: many(orderItems)
}))

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
    order: one(orders, {
        fields: [orderItems.orderId],
        references: [orders.id]
    })
}))

export const couponsRelations = relations(coupons, ({ one }) => ({
    createdBy: one(users, {
        fields: [coupons.createdById],
        references: [users.id]
    })
}))
