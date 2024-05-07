// This will handle get and post requests for the messages

import { NextResponse } from "next/server";

// Example handler for fetching chat messages
export async function GET() {
  // Replace this with your actual data retrieval logic. 
  const messages = [
    { id: 1, text: "Hello, world!", user: 'User1' },
    {id:2, text: "Hi!", user: 'User2' }
  ];
  return NextResponse.json(messages);
}


//Example handler for posting chat messages
export async function POST(request) {
  // Replace this with your actual data saving logic.
  const newMessage = await request.json();
  console.log(newMessage);
  return NextResponse.json({success: true, message: newMessage });
}