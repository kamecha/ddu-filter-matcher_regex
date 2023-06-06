import { Denops } from "https://deno.land/x/ddu_vim@v2.8.3/deps.ts";
import {
  BaseFilter,
  DduItem,
} from "https://deno.land/x/ddu_vim@v2.8.3/types.ts";

type Params = {
  regex: string | undefined;
};

export class Filter extends BaseFilter<Params> {
  filter(args: {
    denops: Denops;
    filterParams: Params;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    const regex_str = args.filterParams.regex ?? args.input;
    const regex = new RegExp(regex_str);
    const items = args.items.filter((item: DduItem) => {
      return regex.test(item.word);
    });
    return Promise.resolve(items);
  }
  params(): Params {
    return {
      regex: undefined,
    };
  }
}
