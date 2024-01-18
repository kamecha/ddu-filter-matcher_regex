# ddu-filter-matcher_regex
regex matcher for ddu.vim

This matcher filters regex matched items.

## Required
### denops.vim
https://github.com/vim-denops/denops.vim

### ddu.vim
https://github.com/Shougo/ddu.vim

## Configuration
```vim
call ddu#custom#patch_global(#{
    \   sourceOptions: #{
    \     _: #{
    \       matchers: ['matcher_regex'],
    \     },
    \   }
    \ })
```
