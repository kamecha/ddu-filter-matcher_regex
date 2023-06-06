import { Denops } from "https://deno.land/x/ddu_vim@v2.8.3/deps.ts";
import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v2.8.3/types.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  filter(args: {
    denops: Denops;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    const regex = new RegExp(args.input);
    const items = args.items.filter((item: DduItem) => {
      return regex.test(item.word);
    });
    return Promise.resolve(items);
  }
  params(): Params {
    return {};
  }
}
