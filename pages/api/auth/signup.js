// Import Helper Functions
import {
  checkExistingUser,
  connectMongoDB,
  createNewUser,
} from "../../../lib/mongodb-util";
import { hashPassword } from "../../../lib/auth.-util";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      message: `Method ${res.method} is not supported`,
    });
    return;
  }

  const data = req.body;
  const { email, password, isRemember } = data;

  if (!email || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    // res.status(422).json(message: "Invalid Email Address");
    res.status(422).json({ message: "郵件地址格式無效" });
    return;
  } else if (!password || password.trim() === "") {
    // res.status(422).json(message: "Invalid Password");
    res.status(422).json({ message: "密碼輸入無效" });
    return;
  } else if (password.trim().length < 8 || password.trim().length > 16) {
    // res.status(422).json(message: "Password must be eight characters or more and cannot contain spaces");
    res
      .status(422)
      .json({ message: "密碼長度應為八個字符或更多並不能包括空格" });
    return;
  }

  // Connect Database
  let client;
  try {
    client = await connectMongoDB();
  } catch {
    // res.status().json({ message: "Failed to connect to database" });
    res.status(500).json({ message: "連接數據庫失敗" });
    client.close();
    return;
  }

  const db = client.db();

  const existingUser = await checkExistingUser(db, email);

  if (existingUser) {
    // res.status(422).json({ message: "User email address already exists" });
    res.status(422).json({ message: "用戶電子郵件地址已存在" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const userData = {
    email: email,
    password: hashedPassword,
    isRemember: isRemember,
    name: "",
    type: "customer",
    address: {
      room: "",
      floor: "",
      block: "",
      street: "",
      area: "",
      district: "",
    },
    isPaymentVerified: false,
    serviceId: "",
    imageUrl: "",
    description: "",
    createdAt: new Date(),
  };

  try {
    const result = await createNewUser(db, "users", userData);
  } catch {
    // res.status().json({ message: "Failed to create new user" });
    res.status(500).json({ message: "創建用戶失敗" });
    client.close();
    return;
  }

  // res.status(201).json({ message: "Registered Successfully" });
  res.status(201).json({ message: "註冊成功!" });
  client.close();
  return;
}

export default handler;
