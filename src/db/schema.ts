import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  username: text("username").unique().notNull(),
  hashed_password: text("hashed_password").notNull(),
  email_address: text("email_address").unique().notNull(),
})

export type User = typeof users.$inferSelect

export const sessions = sqliteTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
})

export type Session = typeof sessions.$inferSelect

export const cart = sqliteTable("cart", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
})

export type Cart = typeof cart.$inferSelect
