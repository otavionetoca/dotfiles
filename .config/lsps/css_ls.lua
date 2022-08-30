local on_attach = require('netoca.on_attach').on_attach
local capabilities = require('netoca.capabilities').capabilities

capabilities.textDocument.completion.completionItem.snippetSupport = true

require('lspconfig')['cssls'].setup {
    on_attach = on_attach,
    capabilities = capabilities,
}
