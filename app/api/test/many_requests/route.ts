import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const endpoints = ["products", "carts", "users", "posts", "comments"];
    const resp1 = await fetch(`https://dummyjson.com/${endpoints[0]}` || "");
    if (resp1.status === 200) {
      const jsonData1 = await resp1.json();
      console.log(`${endpoints[0]} data`, jsonData1[endpoints[0]].slice(0, 3));
    } else {
      console.log("Could not fetch data");
    }

    const resp2 = await fetch(`https://dummyjson.com/${endpoints[1]}` || "");
    if (resp2.status === 200) {
      const jsonData2 = await resp2.json();
      console.log(`${endpoints[1]} data`, jsonData2[endpoints[1]].slice(0, 3));
    } else {
      console.log("Could not fetch data");
    }

    const resp3 = await fetch(`https://dummyjson.com/${endpoints[2]}` || "");
    if (resp3.status === 200) {
      const jsonData3 = await resp3.json();
      console.log(`${endpoints[2]} data`, jsonData3[endpoints[2]].slice(0, 3));
    } else {
      console.log("Could not fetch data");
    }

    const resp4 = await fetch(`https://dummyjson.com/${endpoints[3]}` || "");
    if (resp4.status === 200) {
      const jsonData4 = await resp4.json();
      console.log(`${endpoints[3]} data`, jsonData4[endpoints[3]].slice(0, 3));
    } else {
      console.log("Could not fetch data");
    }

    const resp5 = await fetch(`https://dummyjson.com/${endpoints[4]}` || "");
    if (resp5.status === 200) {
      const jsonData5 = await resp5.json();
      console.log(`${endpoints[4]} data`, jsonData5[endpoints[4]].slice(0, 3));
    } else {
      console.log("Could not fetch data");
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        result: "Done - Multiple requests",
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
