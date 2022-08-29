print('Initializing tsserver_ls')

local on_attach = require('netoca.on_attach').on_attach
local capabilities = require('netoca.on_attach').capabilities

require('lspconfig')['tsserver'].setup {
    on_attach = on_attach,
    capabilities = capabilities,
}
