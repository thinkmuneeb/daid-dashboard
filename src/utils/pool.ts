import { getPool } from "./infura";
import { DAIDS } from "../constants/tokens";
import {Pool1} from "../constants/contracts";

export async function getPoolAddress(): Promise<string> {
  const pool = await getPool(DAIDS.addr);
  return Pool1;

  throw new Error("Unrecognized Pool Address");
}

export function getLegacyPoolAddress(poolAddress): string {
  return Pool1;

  throw new Error("Unrecognized Pool Address");
}
