local on_attach = require('netoca.on_attach').on_attach
local capabilities = require('netoca.capabilities').capabilities

require('lspconfig')['vls'].setup {
    on_attach = on_attach,
    capabilities = capabilities,
}
