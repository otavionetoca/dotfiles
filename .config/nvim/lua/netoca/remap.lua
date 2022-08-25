local nnoremap = require('netoca.keymap').nnoremap

nnoremap("<leader>pv", "<cmd>Ex<CR>")

-- Delete word backwards
nnoremap("<leader>dw", "vb\"_d")

-- Move window
nnoremap("<M-Space>", "<C-w>w")
nnoremap("<M-left>", "<C-w>h")
nnoremap("<M-up>", "<C-w>k")
nnoremap("<M-down>", "<C-w>j")
nnoremap("<M-right>", "<C-w>l")
nnoremap("<M-h>", "<C-w>h")
nnoremap("<M-k>", "<C-w>k")
nnoremap("<M-j>", "<C-w>j")
nnoremap("<M-l>", "<C-w>l")
