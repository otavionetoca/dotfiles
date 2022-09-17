-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd([[packadd packer.nvim]])

return require("packer").startup({
    function(use)
        -- Packer can manage itself
        use("wbthomason/packer.nvim")
        use("folke/tokyonight.nvim")
        use({
            "nvim-treesitter/nvim-treesitter",
            run = function() require("nvim-treesitter.install").update({ with_sync = true }) end,
        })
        use({
            "williamboman/mason.nvim",
            "williamboman/mason-lspconfig.nvim",
            "neovim/nvim-lspconfig",
            "hrsh7th/nvim-cmp", -- Autocompletion plugin
            "hrsh7th/cmp-nvim-lsp", -- LSP source for nvim-cmp
            "hrsh7th/cmp-buffer",
            "hrsh7th/cmp-path",
            "L3MON4D3/LuaSnip", -- Snippets plugin
            "saadparwaiz1/cmp_luasnip", -- Snippets source for nvim-cmp
            "nvim-lua/plenary.nvim",
            "jose-elias-alvarez/null-ls.nvim"
        })
        use({
            "glepnir/lspsaga.nvim",
            branch = "main"
        })

        use("windwp/nvim-ts-autotag")
        use("windwp/nvim-autopairs")

        use {
            "nvim-telescope/telescope.nvim", tag = "0.1.0",
            requires = { { "nvim-lua/plenary.nvim" } }
        }
        use("nvim-telescope/telescope-media-files.nvim")

        use("tpope/vim-commentary")
        use("tpope/vim-surround")
        use("preservim/nerdtree")
    end,
    config = {
        profile = {
            enable = true,
            threshold = 1,
        },
    },
})
