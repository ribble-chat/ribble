import * as signalR from "@microsoft/signalr";
import process from "process";

const serverAddress = "ws://localhost:5000";

const connection = new signalR.HubConnectionBuilder()
  .withUrl(`${serverAddress}/chat`, {
    skipNegotiation: true,
    transport: signalR.HttpTransportType.WebSockets,
  })
  .configureLogging(signalR.LogLevel.Information)
  .build();

// timeout is annoying whilst debuging server
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  connection.serverTimeoutInMilliseconds = 9000000;

connection.on("joined-group", (groupName: string, user: string) => {
  console.log(`${user} joined ${groupName}`);
});

connection.on("message-received", (msg: Message) => {
  console.log(`${msg.authorId} sent "${msg.content}" to current group`);
});

type SendMessageRequest = {
  authorId: number;
  author: string;
  groupGuid: string;
  content: string;
};

type Message = SendMessageRequest & {
  messageId: string;
  timestamp: Date;
};

type SendMessageResponse = {};
type JoinGroupResponse = {};

export async function joinGroup(
  groupName: string,
  user: string
): Promise<JoinGroupResponse> {
  return await connection.invoke("JoinGroup", groupName, user);
}

export async function sendChatMessage(
  request: SendMessageRequest
): Promise<SendMessageResponse> {
  console.log("send message");
  return await connection.invoke("SendMessage", request);
}

async function start() {
  try {
    await connection.start();
    console.log("SignalR Connected.");
  } catch (err) {
    console.log(err);
    setTimeout(start, 2000);
  }
}

connection.onclose(start);
start();
