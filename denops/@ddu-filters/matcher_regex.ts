import { Denops } from "https://deno.land/x/ddu_vim@v2.8.3/deps.ts";
import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v2.8.3/types.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  async filter(args: {
    denops: Denops;
    input: string;
  }): Promise<DduItem[]> {
    return [];
  }
  params(): Params {
    return {};
  }
}
