local nnoremap = require("netoca.keymap").nnoremap

nnoremap("<leader>pv", "<cmd>Ex<CR>")

-- Delete word backwards
nnoremap("<leader>dw", 'vb"_d')

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

nnoremap("<C-w>v", "<cmd>vsplit<CR>")
nnoremap("<C-w>h", "<cmd>split<CR>")

nnoremap("<C-a>", "gg<S-v>Gy") -- Copy all file content
nnoremap("<C-s>", "<cmd>w<CR>") -- Save file
nnoremap("<C-x>", "<cmd>q!<CR>") -- Force close file
nnoremap("<leader><leader>", "<cmd>so %<CR>") -- Source

nnoremap("<C-M-k>", "ddk<S-p>") -- Move line up
nnoremap("<C-M-j>", "ddj<S-p>") -- Move line down

nnoremap("<leader>l", "<cmd>tabnext<CR>")
nnoremap("<leader>h", "<cmd>tabprevious<CR>")

-- Mappings.
-- See `:help vim.diagnostic.*` for documentation on any of the below functions
local opts = { noremap = true, silent = true }
nnoremap("<leader>e", vim.diagnostic.open_float, opts)
nnoremap("[d", vim.diagnostic.goto_prev, opts)
nnoremap("]d", vim.diagnostic.goto_next, opts)
nnoremap("<leader>q", vim.diagnostic.setloclist, opts)

-- Using Lua functions
nnoremap("<leader>ff", "<cmd>lua require('telescope.builtin').find_files({ hidden = true })<cr>")
nnoremap("<leader>fg", "<cmd>lua require('telescope.builtin').live_grep()<cr>")
nnoremap("<leader>fb", "<cmd>lua require('telescope.builtin').buffers()<cr>")
nnoremap("<leader>fh", "<cmd>lua require('telescope.builtin').help_tags()<cr>")
