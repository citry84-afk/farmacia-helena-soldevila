import { NextResponse } from "next/server";
import {
  getAvailableHolidayYears,
  getGranadaHolidays,
  OFFICIAL_CALENDAR_URL,
} from "@/lib/holidays";

export const revalidate = 86400;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const yearParam = searchParams.get("year");
  const year = yearParam ? Number(yearParam) : new Date().getFullYear();

  if (Number.isNaN(year)) {
    return NextResponse.json({ error: "Año no válido" }, { status: 400 });
  }

  const data = getGranadaHolidays(year);

  if (!data) {
    return NextResponse.json(
      {
        error: `No hay datos sincronizados para ${year}. Ejecuta: npm run sync:holidays`,
        availableYears: getAvailableHolidayYears(),
        officialCalendarUrl: OFFICIAL_CALENDAR_URL,
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    ...data,
    officialCalendarUrl: OFFICIAL_CALENDAR_URL,
  });
}
