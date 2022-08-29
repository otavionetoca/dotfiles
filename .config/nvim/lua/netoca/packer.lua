-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)
    -- Packer can manage itself
    use 'wbthomason/packer.nvim'
    use 'otavionetoca/moonlight.nvim'

    -- LSP
    use 'neovim/nvim-lspconfig' -- Collection of configurations for built-in LSP client
    use 'hrsh7th/nvim-cmp' -- Autocomplete
    use 'hrsh7th/cmp-nvim-lsp' -- LSP Source for nvim-cmp
    use 'hrsh7th/cmp-buffer' -- LSP Source for buffer
   -- use 'hrsh7th/cmp-path' -- LSP Source for path
    use 'saadparwaiz1/cmp_luasnip' -- Snippets source for nvim-cmp
    use 'L3MON4D3/LuaSnip' -- Snippets plugin
end)
