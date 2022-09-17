require("nvim-treesitter.configs").setup {

  ensure_installed = {
    "lua",
    "css",
    "scss",
    "html",
    "javascript",
    "json",
    "tsx",
    "typescript",
    "vue",
    "yaml",
    "dockerfile",
    "vim"
  },

  -- Install parsers synchronously (only applied to `ensure_installed`)
  sync_install = true,

  -- Automatically install missing parsers when entering buffer
  auto_install = true,

  -- List of parsers to ignore installing (for "all")
  ignore_install = {},

  highlight = {
    -- `false` will disable the whole extension
    enable = true,

    -- list of language that will be disabled
    disable = {}
  },
  indent = {
    enable = true
  },
  incremental_selection = {
    enable = true,
    keymaps = {
      init_selection = "gnn",
      node_incremental = "grn",
      scope_incremental = "grc",
      node_decremental = "grm",
    },
  }
}
