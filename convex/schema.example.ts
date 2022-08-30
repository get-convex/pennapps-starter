import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  messages: defineTable({
    author: s.string(),
    body: s.string(),
  }),
  counters: defineTable({
    name: s.string(),
    counter: s.number(),
  })
});
