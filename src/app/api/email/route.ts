import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { prisma } from "../../../../db";
import { create } from "domain";

export async function POST(request: NextRequest) {
  const {
    email,
    fullName,
    message,
    phone,
    orderItems,
    lang = "",
    address = "",
    sector = "",
    deliveryPrice = 0,
    totalPrice = 0,
    orderNumber,
    status,
  } = await request.json();

  // const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000);

  await prisma.order.create({
    data: {
      fullName: fullName,
      country: "Republica Moldova",
      city: "Chisinau",
      status,
      address,
      sector,
      email,
      message,
      phone,
      lang,
      orderNumber,
      deliveryPrice: `${deliveryPrice}`,
      total: +totalPrice - +deliveryPrice,
      totalPrice: String(totalPrice),
      updatedAt: new Date(),
      OrderItem: {
        create: orderItems.map((item: any) => {
          return {
            productId: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            updatedAt: new Date(),
          };
        }),
      },
    },
  });

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  function func(props: any) {
    return `<h2>Новое письмо!</h2>
    <hr/>
    <p>${props.message ? props.message : ""}</p>
    <p>Страна/Регион: Молдова</p>
    <p>Город: Кишинёв</p>
    <hr/>
        <h3>Заказчик: <i>${props.fullName}</i></h3>
        <h3>Адрес доставки: 
          <b>${props.sector}</b> 
          <i>${props.address}</i>
        </h3>
    <hr/>
    <h3 style="display: inline">Phone number:</h3> <a href="tel:${
      props.phone
    }"> <i>${props.phone}</i> </a>
    <h3>${props.orderItems.length > 0 && `Заказ #${props.orderNumber}`}</h3>
    <ol style="">
    ${props.orderItems
      .map(
        (orderItem: any) => `
    <li style="margin-left: 0px;"> 
      <a style="display: inline" href=\"https://jasminedragon.md/${lang}/teas/${orderItem.id}\">
        ${orderItem.name}
      </a>
      <p style="display: inline; margin-left: 10px">|| <i style="display: inline; margin-left: 10px">${orderItem.quantity}</i></p>
    </li>
        `
      )
      .join("")}
    </ol>
    `;
  }

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${fullName} ${email ? `(${email})` : ""}`,
    html: func({
      orderNumber,
      fullName,
      phone,
      email,
      message,
      orderItems,
      lang,
      address,
      sector,
    }),
    // text: `<b>${message}</b>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
