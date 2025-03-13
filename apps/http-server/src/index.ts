import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  res.status(200).json({
    userId: user.id,
    message: "signup Successfull",
  });
});

app.listen(3002);
