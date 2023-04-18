import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const endpoints = ["products", "carts", "users", "posts", "comments"];
    endpoints.forEach(async (endpoint) => {
      const resp = await fetch(`https://dummyjson.com/${endpoint}` || "");
      if (resp.status === 200) {
        const jsonData1 = await resp.json();
        console.log(`${endpoint} data`, jsonData1[endpoint].slice(0, 3));
      } else {
        console.log("Could not fetch data");
      }
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        result: "Done - Looped requests",
        error: null,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        result: null,
        error: err.message,
      }),
      { status: 500 },
    );
  }
}
