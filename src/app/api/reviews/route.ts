import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { reviewSchema } from "@/lib/schemas";

export async function GET() {
  const reviews = await prisma.review.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = reviewSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  const review = await prisma.review.create({
    data: {
      name: data.name,
      location: data.location ?? "",
      rating: data.rating,
      tourType: data.tourType ?? "",
      comment: data.comment,
      approved: true,
    },
  });

  return NextResponse.json({ review }, { status: 201 });
}
