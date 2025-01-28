import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'

export { sql, eq, and, or } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
    return drizzle(hubDatabase(), { schema })
}

export type User = typeof schema.users.$inferSelect
export type Item = typeof schema.items.$inferSelect
export type Coupon = typeof schema.coupons.$inferSelect
export type Order = typeof schema.orders.$inferSelect
export type OrderItems = typeof schema.orderItems.$inferSelect
