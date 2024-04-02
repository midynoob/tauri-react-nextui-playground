import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <Card className="col-span-1 sm:col-span-1 h-full" shadow="sm">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            what-to-watch
          </p>
          <h4 className="text-white font-medium text-large">
            stream-the-acme-event
          </h4>
        </CardHeader>
        <CardBody className="flex flex-col justify-center items-center"></CardBody>
          <Button
            onClick={greet}
            className="mb-4"
            color="primary"
            size="sm"
          >
            Greet
          </Button>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input"
          />
          <p className="text-white mt-4">{greetMsg}</p>
      </Card>
    </>
  );
}

export default App;