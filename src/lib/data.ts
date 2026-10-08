import { prisma } from "@/lib/prisma";

export async function getPackages() {
  return prisma.package.findMany({ orderBy: { popular: "desc" } });
}

export async function getPackageBySlug(slug: string) {
  return prisma.package.findUnique({ where: { slug } });
}

export async function getPopularPackages(take = 3) {
  return prisma.package.findMany({
    where: { popular: true },
    take,
    orderBy: { rating: "desc" },
  });
}

export async function getHotels() {
  return prisma.hotel.findMany({ orderBy: { rating: "desc" } });
}

export async function getHotelBySlug(slug: string) {
  return prisma.hotel.findUnique({ where: { slug } });
}

export async function getCars() {
  return prisma.car.findMany({ orderBy: { pricePerDay: "asc" } });
}

export async function getCarBySlug(slug: string) {
  return prisma.car.findUnique({ where: { slug } });
}

export async function getReviews() {
  return prisma.review.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function getReviewStats() {
  const reviews = await getReviews();
  const total = reviews.length;
  const avg = total
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / total
    : 0;
  const distribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));
  return { total, avg, distribution };
}
