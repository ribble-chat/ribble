import * as signalR from "@microsoft/signalr";
import process from "process";
import { Guid } from "types";

const serverAddress = "ws://localhost:5000";

export interface ChatHub {
  connection: signalR.HubConnection;
  joinGroups(...groupsId: Guid[]): Promise<JoinGroupResponse>;
  sendChatMessage(request: SendMessageRequest): Promise<JoinGroupResponse>;
}

type SendMessageRequest = {
  authorId: Guid;
  groupId: Guid;
  authorName: string;
  content: string;
};

type SendMessageResponse = {};
type JoinGroupResponse = {};

function mkChatHub(): ChatHub {
  const connection = mkChathubConnection();

  const joinGroups = async (...groupId: Guid[]): Promise<JoinGroupResponse> =>
    await connection.invoke("JoinGroups", groupId);

  const sendChatMessage = async (request: SendMessageRequest): Promise<SendMessageResponse> =>
    await connection.invoke("SendMessage", request);

  return {
    connection,
    joinGroups,
    sendChatMessage,
  };
}

export const MESSAGE_RECEIVED_EVENT = "message-received";

const hub = mkChatHub();

// this is probably wrong in all sorts of ways
export function useChathubConnection(): ChatHub {
  return hub;
}

export function mkChathubConnection(): signalR.HubConnection {
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

  // connection.on("joined-group", (groupName: string, user: string) => {
  // console.log(`${user} joined ${groupName}`);
  // });

  async function start() {
    try {
      await connection.start();
      console.log("SignalR Connected.");
    } catch (err) {
      console.log(err);
      setTimeout(start, 2000);
    }
  }

  start();

  return connection;
}
