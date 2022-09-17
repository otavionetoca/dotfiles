vim.o.updatetime = 250
--vim.cmd [[autocmd! CursorHold,CursorHoldI * lua vim.diagnostic.open_float(nil, {focus=false})]]

function on_attach(client, bufnr)
    if client.supports_method("textDocument/formatting") then
        vim.api.nvim_clear_autocmds({ group = augroup, buffer = bufnr })
        vim.api.nvim_create_autocmd("BufWritePre", {
            group = augroup,
            buffer = bufnr,
            callback = function()
                vim.lsp.buf.formatting_seq_sync()
            end,
        })
    end
end

vim.diagnostic.config({
    virtual_text = {
        prefix = "x", -- Could be '●', '▎', 'x', '■'
    }
})

-- Add additional capabilities supported by nvim-cmp
local capabilities = vim.lsp.protocol.make_client_capabilities()
capabilities = require("cmp_nvim_lsp").update_capabilities(capabilities)

local lspconfig = require("lspconfig")
lspconfig.util.default_config = vim.tbl_extend("force", lspconfig.util.default_config, {
    on_attach = on_attach,
})

lspconfig["tsserver"].setup({
    capabilities = capabilities,
})

lspconfig["html"].setup({
    capabilities = capabilities
})

lspconfig["gopls"].setup({
    capabilities = capabilities
})

lspconfig["sqlls"].setup({
    capabilities = capabilities
})

lspconfig["taplo"].setup({
    capabilities = capabilities
})

local cssCapabilities = capabilities
cssCapabilities.textDocument.completion.completionItem.snippetSupport = true
lspconfig["cssls"].setup({
    capabilities = cssCapabilities
})

lspconfig["sumneko_lua"].setup({
    capabilities = capabilities,
    settings = {
        Lua = {
            format = {
                enable = true,
                defaultConfig = {
                    quote_style = "double"
                }
            }
        },
    }
})

local signs = { Error = " ", Warn = " ", Hint = " ", Info = " " }
for type, icon in pairs(signs) do
    local hl = "DiagnosticSign" .. type
    vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = hl })
end

-- luasnip setup
local luasnip = require("luasnip")

local cmp = require("cmp")
local cmp_autopairs = require("nvim-autopairs.completion.cmp")
cmp.event:on(
    "confirm_done",
    cmp_autopairs.on_confirm_done()
)
cmp.setup({
    snippet = {
        expand = function(args)
            luasnip.lsp_expand(args.body)
        end,
    },
    mapping = cmp.mapping.preset.insert({
        ["<C-d>"] = cmp.mapping.scroll_docs(-4),
        ["<C-f>"] = cmp.mapping.scroll_docs(4),
        ["<C-Space>"] = cmp.mapping.complete(),
        ["<CR>"] = cmp.mapping.confirm({
            behavior = cmp.ConfirmBehavior.Replace,
            select = true,
        }),
        ["<Tab>"] = cmp.mapping(function(fallback)
            if cmp.visible() then
                cmp.select_next_item()
            elseif luasnip.expand_or_jumpable() then
                luasnip.expand_or_jump()
            else
                fallback()
            end
        end, { "i", "s" }),
        ["<S-Tab>"] = cmp.mapping(function(fallback)
            if cmp.visible() then
                cmp.select_prev_item()
            elseif luasnip.jumpable(-1) then
                luasnip.jump(-1)
            else
                fallback()
            end
        end, { "i", "s" }),
    }),
    sources = {
        { name = "nvim_lsp" },
        { name = "luasnip" },
        { name = "path" },
        {
            { name = "buffer" },
        },
    },
})
