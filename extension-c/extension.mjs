import { writeFileSync } from "node:fs";
import { joinSession } from "@github/copilot-sdk/extension";

writeFileSync(new URL("./cael-extension-c-started", import.meta.url), "");
await joinSession({});
