import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "../../../components/utils/ProductsDataArrayAndType";

interface typeOfData {
  price: string;
  name: string;
  quantity: number;
}

let orignalData: Array<typeOfData> = [
  {
    price: "price_1Niz0RGYfBzZkMj0dHA1LuKm",
    name: "Kids one",
    quantity: 15,
  },
  {
    price: "price_1NVvHrGYfBzZkMj0zcXRYnXz",
    name: "Pink Fleece Sweatpants",
    quantity: 12,
  },
  {
    price: "price_1NVvLyGYfBzZkMj0IMq2FV07",
    name: "Brushed Raglan Sweatshirt",
    quantity: 10,
  },
  {
    price: "price_1NVvK0GYfBzZkMj0qwx7AQKn",
    name: "Cameryn Sash Tie Dress",
    quantity: 25,
  },
  {
    price: "price_1NVvMkGYfBzZkMj0nkIbYt0L",
    name: "Imperial Alpaca Hoodie",
    quantity: 18,
  },
  {
    price: "price_1NVvOjGYfBzZkMj0RPLhmRLK",
    name: "Flex Sweatpants",
    quantity: 9,
  },
  {
    price: "price_1NVvPqGYfBzZkMj0ZovByZO6",
    name: "Lite Sweatpants",
    quantity: 11,
  },
  {
    price: "price_1NVvSyGYfBzZkMj07EvAXM9S",
    name: "Raglan Sweatshirt",
    quantity: 15,
  },
  {
    price: "price_1NVvQLGYfBzZkMj07N0uGLjc",
    name: "Flex Push Button Bomber",
    quantity: 22,
  },
  {
    price: "price_1NVvRTGYfBzZkMj0bzFffYi6",
    name: "Brushed Bomber",
    quantity: 19,
  },
  {
    price: "price_1NVvQuGYfBzZkMj0saymKfhR",
    name: "Muscle Tank",
    quantity: 15,
  },
  {
    price: "price_1NVvO2GYfBzZkMj0heiTdFOv",
    name: "Flex Sweatshirt",
    quantity: 10,
  },
];

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  let cartItemsArray = await req.json();

  try {
    let line_item = orignalData.filter((item: typeOfData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element: oneProductType = cartItemsArray[index];
        if (element.productName === item.name) {
          return true;
        }
      }
    });
    let line_itemToSend: any = line_item.map((item: typeOfData) => {
      for (let index = 0; index < cartItemsArray.length; index++) {
        const element: oneProductType = cartItemsArray[index];
        if (element.productName === item.name) {
          return {
            price: item.price,
            quantity: element.quantity,
          };
        }
      }
    });

    let session = await stripe.checkout.sessions.create({
      line_items: line_itemToSend,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/?success=true`,
      cancel_url: `${req.nextUrl.origin}/?success=false`,
    });
    return NextResponse.json({ link: session.url });
  } catch (error) {
    console.log((error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
