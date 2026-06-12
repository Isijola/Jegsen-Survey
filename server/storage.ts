import { inquiries, type InsertInquiry, type Inquiry } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    if (!db) {
      throw new Error(
        "Database is not configured. Set the DATABASE_URL environment variable.",
      );
    }
    const [inquiry] = await db
      .insert(inquiries)
      .values(insertInquiry)
      .returning();
    return inquiry;
  }
}

export const storage = new DatabaseStorage();
