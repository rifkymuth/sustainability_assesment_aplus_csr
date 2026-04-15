import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      {
        ok: true,
        db: "skipped",
        message:
          "MONGODB_URI not configured — set it in .env.local to enable persistence.",
      },
      { status: 200 }
    );
  }

  try {
    const db = await getDb();
    const ping = await db.command({ ping: 1 });
    return NextResponse.json({ ok: true, db: "connected", ping });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        db: "error",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
