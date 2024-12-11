import { cleanEnv, str, port } from "envalid";
import * as dotenv from "dotenv";

dotenv.config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development"] }),
  PORT: port(),
});

export default env;
