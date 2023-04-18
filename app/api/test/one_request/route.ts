/* Sends a single request to an external service */

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const resp = await fetch(`https://dummyjson.com/products` || "");
    console.log("resp", resp.status);
    if (resp.status === 200) {
      const jsonData = await resp.json();
      console.log("json data", jsonData.products.slice(0, 3));
    } else {
      console.log("Could not fetch data");
    }
    return new NextResponse(
      JSON.stringify({
        success: true,
        result: "Done - Single Request",
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
