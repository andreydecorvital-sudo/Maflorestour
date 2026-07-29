import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const offerLeads = sqliteTable("offer_leads", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
