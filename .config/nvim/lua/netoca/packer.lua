-- This file can be loaded by calling `lua require('plugins')` from your init.vim

-- Only required if you have packer configured as `opt`
vim.cmd([[packadd packer.nvim]])

return require("packer").startup({
	function(use)
		-- Packer can manage itself
		use("wbthomason/packer.nvim")
		use("otavionetoca/moonlight.nvim")

		-- LSP
		use("neovim/nvim-lspconfig") -- Collection of configurations for built-in LSP client
		use("hrsh7th/nvim-cmp") -- Autocomplete
		use("hrsh7th/cmp-nvim-lsp") -- LSP Source for nvim-cmp
		use("hrsh7th/cmp-buffer") -- LSP Source for buffer
		use("hrsh7th/cmp-path") -- LSP Source for path
		use("saadparwaiz1/cmp_luasnip") -- Snippets source for nvim-cmp
		use("L3MON4D3/LuaSnip") -- Snippets plugin

		use("nvim-lua/plenary.nvim") -- Dependecy for null-ls
		use({
			"jose-elias-alvarez/null-ls.nvim",
			requires = { "nvim-lua/plenary.nvim" },
		}) -- Code actions, diagnostics, formatting and more
		use({
			"nvim-treesitter/nvim-treesitter",
			run = function()
				require("nvim-treesitter.install").update({ with_sync = true })
			end,
		})
		use({
			"windwp/nvim-autopairs",
			config = function()
				require("nvim-autopairs").setup({})
			end,
		})

		use({
			"nvim-telescope/telescope.nvim",
			tag = "0.1.0",
			requires = { { "nvim-lua/plenary.nvim" } },
		})
		use({
			"nvim-telescope/telescope-fzf-native.nvim",
			run = "cmake -S. -Bbuild -DCMAKE_BUILD_TYPE=Release && cmake --build build --config Release && cmake --install build --prefix build",
		})
	end,
	config = {
		profile = {
			enable = true,
			threshold = 1,
		},
	},
})
