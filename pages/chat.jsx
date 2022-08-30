import { useEffect, useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";


// Render a chat message.
function MessageView(props) {
  const message = props.message;
  return (
    <div>
      <strong>{message.author}:</strong> {message.body}
    </div>
  );
}

export default function App() {
  // Dynamically update `messages` in response to the output of
  // `listMessages.ts`.
  const messages = useQuery("listMessages") || [];

  const [name, setName] = useState('user name');
  useEffect(() => {
    const randomName = "User " + Math.floor(Math.random() * 10000);
    setName(randomName);
  }, [])


  // Run `sendMessage.ts` as a mutation to record a chat message when
  // `handleSendMessage` triggered.
  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText(""); // reset text entry box
    await sendMessage(newMessageText, name);
  }
  return (
    <>
      <h1 className="text-center">Convex Chat</h1>
      <p className="text-center">
        <span className="badge bg-dark">{name}</span>
      </p>
      <ul className="list-group shadow-sm my-3">
        {messages.slice(-10).map((message) => (
          <li
            key={message._id}
            className="list-group-item d-flex justify-content-between"
          >
            <MessageView message={message} />
            <div className="ml-auto text-secondary text-nowrap">
              {new Date(message._creationTime).toLocaleTimeString()}
            </div>
          </li>
        ))}
      </ul>
      <form
        onSubmit={handleSendMessage}
        className="d-flex justify-content-center"
      >
        <input
          value={newMessageText}
          onChange={event => setNewMessageText(event.target.value)}
          className="form-control w-50"
          placeholder="Write a message…"
        />
        <input
          type="submit"
          value="Send"
          className="ms-2 btn btn-primary"
          disabled={!newMessageText}
        />
      </form>
    </>
  );
}
