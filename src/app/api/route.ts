import { NextResponse } from "next/server";
import connectDB from "@/services/mongoDb";
// import TodoModel from "@/models/todo";
import TodoInterface from "@/interfaces/TodoInterface";

connectDB();

// Get all todos in mongo instance
export async function GET(request: Request) {
  // const res = await TodoModel.find({});
  // return NextResponse.json({ Todos: res });
  return NextResponse.json({ message: "Gum Ball" });
}

// Add all todos in mongo instance
export async function POST(request: Request) {
  const formData = await request.json();
  console.log(formData);
  return NextResponse.json({ message: "Hello from next server" });
}
