local on_attach = require('netoca.on_attach').on_attach
local capabilities = require('netoca.on_attach').capabilities

require('lspconfig')['html'].setup {
    on_attach = on_attach,
    capabilities = capabilities,
}
