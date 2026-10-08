import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const booking = await prisma.booking.create({
    data: {
      type: data.type,
      itemId: data.itemId,
      itemName: data.itemName,
      name: data.name,
      email: data.email,
      phone: data.phone,
      startDate: new Date(data.startDate),
      endDate: data.endDate ? new Date(data.endDate) : null,
      guests: data.guests,
      notes: data.notes ?? "",
    },
  });

  return NextResponse.json({ booking }, { status: 201 });
}
