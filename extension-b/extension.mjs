import { writeFileSync } from "node:fs";
import { joinSession } from "@github/copilot-sdk/extension";

writeFileSync(new URL("./cael-extension-b-started", import.meta.url), "");
await joinSession({});
