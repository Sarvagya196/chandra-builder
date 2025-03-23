
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/name-bracelet-builder"
  },
  {
    "renderMode": 2,
    "route": "/name-necklace-builder"
  },
  {
    "renderMode": 2,
    "route": "/custom-necklace-builder"
  },
  {
    "renderMode": 2,
    "route": "/date-bracelet-builder"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23564, hash: 'eeb0c77cc9727a59186702b7fc5ea27fcac88086a685a924413b16e81ee13347', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: '502fb0bdb9ebf5ee07399ae9203ef5448fddabf59268816470489b64f4a50e8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 31019, hash: 'be4925bce561de1327d2596dd0ef41f922415d53c7a7b33e5ace99feb95f9f3f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'name-bracelet-builder/index.html': {size: 38177, hash: 'aee6c7ad4ba31b893b2baf6c7662394c20f0baad8cae1c412b3c29741091d41a', text: () => import('./assets-chunks/name-bracelet-builder_index_html.mjs').then(m => m.default)},
    'date-bracelet-builder/index.html': {size: 94996, hash: 'f96da5ec130fbb167e8f0659e6e12ce4fb0a2b90a3b35c500f50c58b7e517dab', text: () => import('./assets-chunks/date-bracelet-builder_index_html.mjs').then(m => m.default)},
    'name-necklace-builder/index.html': {size: 38463, hash: '0bd5e143de2167cd05b9b682b5f3833ab6f505a579ef6eca3c8bce7d2c475d62', text: () => import('./assets-chunks/name-necklace-builder_index_html.mjs').then(m => m.default)},
    'custom-necklace-builder/index.html': {size: 32647, hash: '189ad0553478cad6a637bccee5c80b39187bc69fb2aa55a8bf037bc44ea9b00a', text: () => import('./assets-chunks/custom-necklace-builder_index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
