我的问题
- 怎么让vim把一个中文当作俩个英文
- 怎么限制vim一行的字符数量，让它可以换行（不是软换行，是插入一个换行符号，并且在中文的情况下也可行）
- 无法统计中文汉字么？

学习目标
- [x] 学会使用 vim 自带文件浏览器(netrw)
- [x] 看完vim实用技巧
- [ ] 可以看完 usr 系列的文章（传说中官方的教程呢）

vim 教程
- [vim 图文教程][1]
- [vim 图文教程 pdf][2]
- [learn vim the hard way!!!][7]
- [vim sheet xxx][8]

vim 酷酷的壳上面的vim教程
- [全部][3]

vim wiki
- [using tab pages][4]


vimrc
- [vimified framework][5]

vim256色
- [256_colors_in_vim][6]

vim 杂事
- [comming home to vim][9]

[1]: http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html
[2]: http://www.viemu.com/a-why-vi-vim.html
[3]: http://coolshell.cn/tag/vim
[4]: http://vim.wikia.com/wiki/Using_tab_pages
[5]: https://github.com/zaiste/vimified/
[6]: http://vim.wikia.com/wiki/256_colors_in_vim
[7]: http://learnvimscriptthehardway.stevelosh.com/
[8]: http://vim.rtorr.com/
[9]: http://stevelosh.com/blog/2010/09/coming-home-to-vim/

vim属于越用越舒服的编辑器，不用奢望它可以通过一些别人配置好的东西一下子成为神器，它并不能。
它能做到的是，让这个编辑器成为你自己的编辑器。

在你对它陌生的时候，可能就会有一种恐惧感让你远离它。
当你熟悉它的时候，就可能开始依赖它，以至于离不开它。
jetbrains旗下的ide似乎一直在从其他编辑器中学习，我总看见，它提到，这是emacs中什么什么的概念。

学习一个新映射的方式是，把原来的映射置空
`:inoremap <esc> <nop>`

把光标移动到中间，上面和下面，分别使用 M、H以及L
而直接移动半页和一页则是 C-U c-d c-f c-b
