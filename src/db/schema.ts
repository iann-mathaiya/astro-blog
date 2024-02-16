import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
	id: text("id").primaryKey(),
	username: text('username').unique().notNull(),
	hashed_password: text('hashed_password').notNull(),
	emailAddress: text('email_address').unique().notNull(),
});

export type User = typeof users.$inferSelect

export const sessions = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export type Session = typeof sessions.$inferSelect

