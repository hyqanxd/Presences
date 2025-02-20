const presence = new Presence({
  clientId: '996589941926670366',
})
const startTimestamp = Math.floor(Date.now() / 1000)

interface Stauts {
  file?: string
  workspace?: string
  editor?: {
    lang?: string
  }
}

enum ActivityAssets {
  Logo = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/logo.png',
  Ahk = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/0.png',
  Android = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/1.png',
  Astro = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/2.png',
  Arduino = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/3.png',
  Autoit = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/4.png',
  Brainfuck = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/5.png',
  Applescript = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/6.png',
  Appveyor = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/7.png',
  Asp = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/8.png',
  Assembly = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/9.png',
  Angular = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/10.png',
  Ansible = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/11.png',
  Babel = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/12.png',
  Bower = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/13.png',
  Bat = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/14.png',
  Coffee = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/15.png',
  Crystal = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/16.png',
  Cpp = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/17.png',
  Css = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/18.png',
  D = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/19.png',
  Codeclimate = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/20.png',
  Clojure = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/21.png',
  Cmake = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/22.png',
  Csharp = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/23.png',
  Circleci = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/24.png',
  Cssmap = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/25.png',
  Dart = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/26.png',
  C = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/27.png',
  Cargo = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/28.png',
  Cuda = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/29.png',
  Editorconfig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/30.png',
  Erlang = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/31.png',
  Elixir = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/32.png',
  Firebase = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/33.png',
  Elm = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/34.png',
  Denizen = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/35.png',
  Debugging = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/36.png',
  Flowconfig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/37.png',
  Docker = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/38.png',
  Fsharp = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/39.png',
  Eslint = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/40.png',
  Env = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/41.png',
  Ejs = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/42.png',
  Gatsbyjs = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/43.png',
  Delphi = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/44.png',
  Hjson = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/45.png',
  Groovy = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/46.png',
  Gemfile = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/47.png',
  Haxe = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/48.png',
  Handlebars = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/49.png',
  Gulp = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/50.png',
  Graphql = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/51.png',
  Godot = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/52.png',
  Go = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/53.png',
  Html = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/54.png',
  Gradle = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/55.png',
  Haskell = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/56.png',
  Git = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/57.png',
  Heroku = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/58.png',
  Harbour = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/59.png',
  Jupyter = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/60.png',
  Idle = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/61.png',
  Json = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/62.png',
  Julia = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/63.png',
  IdleVscodeInsiders = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/64.png',
  Js = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/65.png',
  Jest = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/66.png',
  Jsx = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/67.png',
  Laravel = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/68.png',
  Java = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/69.png',
  Jsmap = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/70.png',
  IdleVscode = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/71.png',
  Kotlin = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/72.png',
  Http = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/73.png',
  Jar = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/74.png',
  Log = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/75.png',
  Livescript = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/76.png',
  Lisp = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/77.png',
  Lua = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/78.png',
  Npm = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/79.png',
  Manifest = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/80.png',
  Metal = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/81.png',
  Nim = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/82.png',
  Marko = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/83.png',
  Makefile = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/84.png',
  Nix = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/85.png',
  Objc = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/86.png',
  Nodemon = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/87.png',
  Markdown = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/88.png',
  Markdownx = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/89.png',
  Postcss = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/90.png',
  Pascal = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/91.png',
  Pawn = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/92.png',
  Powershell = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/93.png',
  Python = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/94.png',
  Purescript = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/95.png',
  Processing = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/96.png',
  Php = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/97.png',
  Odin = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/98.png',
  Perl = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/99.png',
  Prettier = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/100.png',
  Prisma = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/101.png',
  Ocaml = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/102.png',
  Ponylang = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/103.png',
  Pug = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/104.png',
  Ruby = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/105.png',
  Sql = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/106.png',
  Sqf = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/107.png',
  R = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/108.png',
  Svelte = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/109.png',
  Scss = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/110.png',
  Terraform = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/111.png',
  Scala = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/112.png',
  Sourcepawn = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/113.png',
  Tex = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/114.png',
  Shell = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/115.png',
  Stylus = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/116.png',
  Swift = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/117.png',
  Rust = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/118.png',
  Svg = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/119.png',
  Tsmap = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/120.png',
  Vala = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/121.png',
  Vscode = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/122.png',
  V = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/123.png',
  Ts = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/124.png',
  Toml = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/125.png',
  Text = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/126.png',
  TypescriptDef = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/127.png',
  Vitestconfig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/128.png',
  Twig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/129.png',
  Viteconfig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/130.png',
  Vb = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/131.png',
  Tsx = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/132.png',
  Turbo = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/133.png',
  Travis = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/134.png',
  VscodeInsiders = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/135.png',
  Yaml = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/136.png',
  Xml = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/137.png',
  Wasm = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/138.png',
  Vueconfig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/139.png',
  Vue = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/140.png',
  Yarn = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/141.png',
  Webpack = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/142.png',
  Vscodeignore = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/143.png',
  Zig = 'https://cdn.rcd.gg/PreMiD/websites/V/vscode.dev/assets/144.png',
}

// https://github.com/iCrawl/discord-vscode/blob/master/src/data/languages.json @iCrawl
// https://github.com/leonardssh/vscord/tree/main/assets/icons @leonardssh
const KNOWN_LANGUAGES: { language: string, image: string }[] = [
  { language: 'abap', image: ActivityAssets.Text },
  { language: 'ansible', image: ActivityAssets.Ansible },
  { language: 'bat', image: ActivityAssets.Bat },
  { language: 'bibtex', image: ActivityAssets.Text },
  { language: 'clojure', image: ActivityAssets.Clojure },
  { language: 'coffeescript', image: ActivityAssets.Coffee },
  { language: 'c', image: ActivityAssets.C },
  { language: 'cpp', image: ActivityAssets.Cpp },
  { language: 'csharp', image: ActivityAssets.Csharp },
  { language: 'css', image: ActivityAssets.Css },
  { language: 'diff', image: ActivityAssets.Manifest },
  { language: 'dockerfile', image: ActivityAssets.Docker },
  { language: 'fsharp', image: ActivityAssets.Fsharp },
  { language: 'git-commit', image: ActivityAssets.Manifest },
  { language: 'git-rebase', image: ActivityAssets.Manifest },
  { language: 'go', image: ActivityAssets.Go },
  { language: 'groovy', image: ActivityAssets.Groovy },
  { language: 'handlebars', image: ActivityAssets.Handlebars },
  { language: 'haml', image: ActivityAssets.Text },
  { language: 'html', image: ActivityAssets.Html },
  { language: 'ini', image: ActivityAssets.Manifest },
  { language: 'java', image: ActivityAssets.Java },
  { language: 'javascript', image: ActivityAssets.Js },
  { language: 'javascriptreact', image: ActivityAssets.Jsx },
  { language: 'jsx', image: ActivityAssets.Jsx },
  { language: 'json', image: ActivityAssets.Json },
  { language: 'jsonc', image: ActivityAssets.Json },
  { language: 'jupyter', image: ActivityAssets.Jupyter },
  { language: 'latex', image: ActivityAssets.Text },
  { language: 'less', image: ActivityAssets.Text },
  { language: 'lua', image: ActivityAssets.Lua },
  { language: 'makefile', image: ActivityAssets.Makefile },
  { language: 'markdown', image: ActivityAssets.Markdown },
  { language: 'objective-c', image: ActivityAssets.Objc },
  { language: 'objective-cpp', image: ActivityAssets.Objc },
  { language: 'odin', image: ActivityAssets.Odin },
  { language: 'perl', image: ActivityAssets.Perl },
  { language: 'perl6', image: ActivityAssets.Perl },
  { language: 'php', image: ActivityAssets.Php },
  { language: 'plaintext', image: ActivityAssets.Text },
  { language: 'powershell', image: ActivityAssets.Powershell },
  { language: 'jade', image: ActivityAssets.Pug },
  { language: 'pug', image: ActivityAssets.Pug },
  { language: 'prisma', image: ActivityAssets.Prisma },
  { language: 'python', image: ActivityAssets.Python },
  { language: 'r', image: ActivityAssets.R },
  { language: 'razor', image: ActivityAssets.Html },
  { language: 'ruby', image: ActivityAssets.Ruby },
  { language: 'rust', image: ActivityAssets.Rust },
  { language: 'scss', image: ActivityAssets.Scss },
  { language: 'sass', image: ActivityAssets.Scss },
  { language: 'shaderlab', image: ActivityAssets.Manifest },
  { language: 'shellscript', image: ActivityAssets.Shell },
  { language: 'slim', image: ActivityAssets.Text },
  { language: 'sql', image: ActivityAssets.Sql },
  { language: 'stylus', image: ActivityAssets.Stylus },
  { language: 'swift', image: ActivityAssets.Swift },
  { language: 'typescript', image: ActivityAssets.Ts },
  { language: 'typescriptreact', image: ActivityAssets.Tsx },
  { language: 'tex', image: ActivityAssets.Tex },
  { language: 'vb', image: ActivityAssets.Vb },
  { language: 'vue', image: ActivityAssets.Vue },
  { language: 'vue-html', image: ActivityAssets.Vue },
  { language: 'xml', image: ActivityAssets.Xml },
  { language: 'xsl', image: ActivityAssets.Xml },
  { language: 'yaml', image: ActivityAssets.Yaml },
]
const KNOWN_EXTENSIONS: { [key: string]: { image: string } } = {
  'nodemon.json': { image: ActivityAssets.Nodemon },
  'package.json': { image: ActivityAssets.Npm },
  'turbo.json': { image: ActivityAssets.Turbo },
  '/\\.prettier((rc)|(\\.(toml|yml|yaml|json|js))?$){2}/i': {
    image: ActivityAssets.Prettier,
  },
  '/\\.eslint((rc|ignore)|(\\.(json|js))?$){2}/i': { image: ActivityAssets.Eslint },
  '/\\prettier.config.js/i': { image: ActivityAssets.Prettier },
  '/vue.config\\.(js|ts)/i': { image: ActivityAssets.Vueconfig },
  '/vite.config\\.(js|ts)/i': { image: ActivityAssets.Viteconfig },
  '/vitest.config\\.(js|ts|mjs)/i': { image: ActivityAssets.Vitestconfig },
  '/jest.config\\.(js|ts)/i': { image: ActivityAssets.Jest },
  '/gatsby-(browser|node|ssr|config)\\.js/i': { image: ActivityAssets.Gatsbyjs },
  '/webpack(\\.dev|\\.development|\\.prod|\\.production)?\\.config(\\.babel)?\\.(js|jsx|coffee|ts|json|json5|yaml|yml)/i': { image: ActivityAssets.Webpack },
  'babel.config.js': { image: ActivityAssets.Babel },
  '.ahk': { image: ActivityAssets.Ahk },
  '.ahkl': { image: ActivityAssets.Ahk },
  '.astro': { image: ActivityAssets.Astro },
  'androidmanifest.xml': { image: ActivityAssets.Android },
  '/^angular[^.]*\\.js$/i': { image: ActivityAssets.Angular },
  '.applescript': { image: ActivityAssets.Applescript },
  '/(\\.)?appveyor\\.yml/i': { image: ActivityAssets.Appveyor },
  '.ino': { image: ActivityAssets.Arduino },
  '.swf': { image: ActivityAssets.Text },
  '.as': { image: ActivityAssets.Text },
  '.jsfl': { image: ActivityAssets.Text },
  '.swc': { image: ActivityAssets.Text },
  '.asp': { image: ActivityAssets.Asp },
  '.asax': { image: ActivityAssets.Asp },
  '.ascx': { image: ActivityAssets.Asp },
  '.ashx': { image: ActivityAssets.Asp },
  '.asmx': { image: ActivityAssets.Asp },
  '.aspx': { image: ActivityAssets.Asp },
  '.axd': { image: ActivityAssets.Asp },
  '/\\.(l?a|[ls]?o|out|s|a51|asm|axf|elf|prx|puff|z80)$/i': {
    image: ActivityAssets.Assembly,
  },
  '.agc': { image: ActivityAssets.Assembly },
  '.ko': { image: ActivityAssets.Assembly },
  '.lst': { image: ActivityAssets.Assembly },
  '/\\.((c([+px]{2}?)?-?)?objdump|bsdiff|bin|dat|pak|pdb)$/i': {
    image: ActivityAssets.Assembly,
  },
  '.d-objdump': { image: ActivityAssets.Assembly },
  '/\\.gcode|\\.gco/i': { image: ActivityAssets.Assembly },
  '/\\.rpy[bc]$/i': { image: ActivityAssets.Assembly },
  '/\\.py[co]$/i': { image: ActivityAssets.Assembly },
  '.swp': { image: ActivityAssets.Assembly },
  '.DS_Store': { image: ActivityAssets.Assembly },
  '.au3': { image: ActivityAssets.Autoit },
  '/\\.babelrc/i': { image: ActivityAssets.Babel },
  '.bat': { image: ActivityAssets.Bat },
  '.batch': { image: ActivityAssets.Bat },
  '.cmd': { image: ActivityAssets.Bat },
  '/\\.(exe|com|msi)$/i': { image: ActivityAssets.Bat },
  '.reg': { image: ActivityAssets.Bat },
  '/^(\\.bowerrc|bower\\.json|Bowerfile)$/i': { image: ActivityAssets.Bower },
  '/\\.bf?$/i': { image: ActivityAssets.Brainfuck },
  '/\\.c$/i': { image: ActivityAssets.C },
  '/(cargo.toml|cargo.lock)/i': { image: ActivityAssets.Cargo },
  '.casc': { image: ActivityAssets.Text },
  '.cas': { image: ActivityAssets.Text },
  '.cfc': { image: ActivityAssets.Text },
  '.cfm': { image: ActivityAssets.Text },
  'circle.yml': { image: ActivityAssets.Circleci },
  '.clj': { image: ActivityAssets.Clojure },
  '.cl2': { image: ActivityAssets.Clojure },
  '.cljc': { image: ActivityAssets.Clojure },
  '.cljx': { image: ActivityAssets.Clojure },
  '.hic': { image: ActivityAssets.Clojure },
  '/\\.cljs(cm)?$/i': { image: ActivityAssets.Clojure },
  '.cmake': { image: ActivityAssets.Cmake },
  '/^CMakeLists\\.txt$/': { image: ActivityAssets.Cmake },
  '/\\.codeclimate\\.(yml|json)/i': { image: ActivityAssets.Codeclimate },
  '.coffee': { image: ActivityAssets.Coffee },
  '.cjsx': { image: ActivityAssets.Coffee },
  '.coffee.ecr': { image: ActivityAssets.Coffee },
  '.coffee.erb': { image: ActivityAssets.Coffee },
  '.litcoffee': { image: ActivityAssets.Coffee },
  '.iced': { image: ActivityAssets.Coffee },
  '/\\.c[+px]{2}$|\\.cc$/i': { image: ActivityAssets.Cpp },
  '/\\.h[+px]{2}$/i': { image: ActivityAssets.Cpp },
  '/\\.[it]pp$/i': { image: ActivityAssets.Cpp },
  '/\\.(tcc|inl)$/i': { image: ActivityAssets.Cpp },
  '.cats': { image: ActivityAssets.Cpp },
  '.idc': { image: ActivityAssets.Cpp },
  '.w': { image: ActivityAssets.Cpp },
  '.nc': { image: ActivityAssets.Cpp },
  '.upc': { image: ActivityAssets.Cpp },
  '.xpm': { image: ActivityAssets.Cpp },
  '/\\.e?cr$/i': { image: ActivityAssets.Crystal },
  '.cs': { image: ActivityAssets.Csharp },
  '.csx': { image: ActivityAssets.Csharp },
  '.cshtml': { image: ActivityAssets.Html },
  '.css': { image: ActivityAssets.Css },
  '.css.map': { image: ActivityAssets.Cssmap },
  '.cu': { image: ActivityAssets.Cuda },
  '/\\.di?$/i': { image: ActivityAssets.D },
  '.dart': { image: ActivityAssets.Dart },
  '.dfm': { image: ActivityAssets.Delphi },
  '.dpr': { image: ActivityAssets.Delphi },
  '.dsc': { image: ActivityAssets.Denizen },
  '.dm': { image: ActivityAssets.Text },
  '.dme': { image: ActivityAssets.Text },
  '.dmm': { image: ActivityAssets.Text },
  '/^(Dockerfile|docker-compose)|\\.docker(file|ignore)$/i': {
    image: ActivityAssets.Docker,
  },
  '/^docker-sync\\.yml$/i': { image: ActivityAssets.Docker },
  '.editorconfig': { image: ActivityAssets.Editorconfig },
  '.ejs': { image: ActivityAssets.Ejs },
  '.ex': { image: ActivityAssets.Elixir },
  '/\\.(exs|l?eex)$/i': { image: ActivityAssets.Elixir },
  '/^mix\\.(exs?|lock)$/i': { image: ActivityAssets.Elixir },
  '.elm': { image: ActivityAssets.Elm },
  '.env': { image: ActivityAssets.Env },
  '.erl': { image: ActivityAssets.Erlang },
  '.beam': { image: ActivityAssets.Erlang },
  '.hrl': { image: ActivityAssets.Erlang },
  '.xrl': { image: ActivityAssets.Erlang },
  '.yrl': { image: ActivityAssets.Erlang },
  '.app.src': { image: ActivityAssets.Erlang },
  '/^Emakefile$/': { image: ActivityAssets.Erlang },
  '/^rebar(\\.config)?\\.lock$/i': { image: ActivityAssets.Erlang },
  '/(\\.firebaserc|firebase\\.json)/i': { image: ActivityAssets.Firebase },
  '.flowconfig': { image: ActivityAssets.Flowconfig },
  '.fs': { image: ActivityAssets.Fsharp },
  '.fsi': { image: ActivityAssets.Fsharp },
  '.fsscript': { image: ActivityAssets.Fsharp },
  '.fsx': { image: ActivityAssets.Fsharp },
  '/^Gemfile(\\.lock)?$/i': { image: ActivityAssets.Gemfile },
  '/^\\.git|^\\.keep$|\\.mailmap$/i': { image: ActivityAssets.Git },
  '.go': { image: ActivityAssets.Go },
  '.gd': { image: ActivityAssets.Godot },
  '.gradle': { image: ActivityAssets.Gradle },
  'gradlew': { image: ActivityAssets.Gradle },
  '.gql': { image: ActivityAssets.Graphql },
  '.graphql': { image: ActivityAssets.Graphql },
  '.groovy': { image: ActivityAssets.Groovy },
  '.gvy': { image: ActivityAssets.Groovy },
  '.gy': { image: ActivityAssets.Groovy },
  '.gsh': { image: ActivityAssets.Groovy },
  '/gruntfile\\.(js|coffee)/i': { image: ActivityAssets.Text },
  'gulpfile.js': { image: ActivityAssets.Gulp },
  '/\\.(hbs|handlebars|(mu)?stache)$/i': { image: ActivityAssets.Handlebars },
  '.prg': { image: ActivityAssets.Harbour },
  '.hbp': { image: ActivityAssets.Harbour },
  '.hbc': { image: ActivityAssets.Harbour },
  '.rc': { image: ActivityAssets.Harbour },
  '.fmg': { image: ActivityAssets.Harbour },
  '.hs': { image: ActivityAssets.Haskell },
  '.hsc': { image: ActivityAssets.Haskell },
  '.c2hs': { image: ActivityAssets.Haskell },
  '.lhs': { image: ActivityAssets.Haskell },
  '.hx': { image: ActivityAssets.Haxe },
  '.hxml': { image: ActivityAssets.Haxe },
  '/^procfile/i': { image: ActivityAssets.Heroku },
  'heroku.yml': { image: ActivityAssets.Heroku },
  '.hjson': { image: ActivityAssets.Hjson },
  '/\\.x?html?$/i': { image: ActivityAssets.Html },
  '.http': { image: ActivityAssets.Http },
  '.rest': { image: ActivityAssets.Http },
  '.jar': { image: ActivityAssets.Jar },
  '.java': { image: ActivityAssets.Java },
  '.j2': { image: ActivityAssets.Text },
  '.jinja': { image: ActivityAssets.Text },
  '.js': { image: ActivityAssets.Js },
  '.es6': { image: ActivityAssets.Js },
  '.es': { image: ActivityAssets.Js },
  '.mjs': { image: ActivityAssets.Js },
  '.js.map': { image: ActivityAssets.Jsmap },
  '.json': { image: ActivityAssets.Json },
  '.jsonc': { image: ActivityAssets.Json },
  '.jsx': { image: ActivityAssets.Jsx },
  '/\\.(jil|jl)/i': { image: ActivityAssets.Julia },
  '.ipynb': { image: ActivityAssets.Jupyter },
  '.kt': { image: ActivityAssets.Kotlin },
  '.ktm': { image: ActivityAssets.Kotlin },
  '.kts': { image: ActivityAssets.Kotlin },
  '.less': { image: ActivityAssets.Text },
  '.lsp': { image: ActivityAssets.Lisp },
  '.lisp': { image: ActivityAssets.Lisp },
  '.l': { image: ActivityAssets.Lisp },
  '.nl': { image: ActivityAssets.Lisp },
  '.ny': { image: ActivityAssets.Lisp },
  '.podsl': { image: ActivityAssets.Lisp },
  '.sexp': { image: ActivityAssets.Lisp },
  '.ss': { image: ActivityAssets.Lisp },
  '.scm': { image: ActivityAssets.Lisp },
  '.ls': { image: ActivityAssets.Livescript },
  '.log': { image: ActivityAssets.Log },
  '.lua': { image: ActivityAssets.Lua },
  '.pd_lua': { image: ActivityAssets.Lua },
  '.rbxs': { image: ActivityAssets.Lua },
  '.wlua': { image: ActivityAssets.Lua },
  '/^Makefile/': { image: ActivityAssets.Makefile },
  '/^mk\\.config$/': { image: ActivityAssets.Makefile },
  '/\\.(mk|mak|make)$/i': { image: ActivityAssets.Makefile },
  '/^BSDmakefile$/i': { image: ActivityAssets.Makefile },
  '/^GNUmakefile$/i': { image: ActivityAssets.Makefile },
  '/^makefile\\.sco$/i': { image: ActivityAssets.Makefile },
  '/^Kbuild$/': { image: ActivityAssets.Makefile },
  '/^makefile$/': { image: ActivityAssets.Makefile },
  '/^mkfile$/i': { image: ActivityAssets.Makefile },
  '/^\\.?qmake$/i': { image: ActivityAssets.Makefile },
  '/\\.(h|geo|topo)$/i': { image: ActivityAssets.Manifest },
  '.cson': { image: ActivityAssets.Manifest },
  '.json5': { image: ActivityAssets.Manifest },
  '.ndjson': { image: ActivityAssets.Manifest },
  '.fea': { image: ActivityAssets.Manifest },
  '.json.eex': { image: ActivityAssets.Manifest },
  '.proto': { image: ActivityAssets.Manifest },
  '.pytb': { image: ActivityAssets.Manifest },
  '.pydeps': { image: ActivityAssets.Manifest },
  '/\\.pot?$/i': { image: ActivityAssets.Manifest },
  '.ejson': { image: ActivityAssets.Manifest },
  '.edn': { image: ActivityAssets.Manifest },
  '.eam.fs': { image: ActivityAssets.Manifest },
  '.qml': { image: ActivityAssets.Manifest },
  '.qbs': { image: ActivityAssets.Manifest },
  '.ston': { image: ActivityAssets.Manifest },
  '.ttl': { image: ActivityAssets.Manifest },
  '.rviz': { image: ActivityAssets.Manifest },
  '.syntax': { image: ActivityAssets.Manifest },
  '.webmanifest': { image: ActivityAssets.Manifest },
  '/^pkginfo$/': { image: ActivityAssets.Manifest },
  '/^mime\\.types$/i': { image: ActivityAssets.Manifest },
  '/^METADATA\\.pb$/': { image: ActivityAssets.Manifest },
  '/[\\/\\\\](?:magic[\\/\\\\]Magdir|file[\\/\\\\]magic)[\\/\\\\][-.\\w]+$/i': { image: ActivityAssets.Manifest },
  '/(\\\\|\\/)dev[-\\w]+\\1(?:[^\\\\\\/]+\\1)*(?!DESC|NOTES)(?:[A-Z][-A-Z]*)(?:\\.in)?$/': { image: ActivityAssets.Manifest },
  'lib/icons/.icondb.js': { image: ActivityAssets.Manifest },
  '/\\.git[\\/\\\\](.*[\\/\\\\])?(HEAD|ORIG_HEAD|packed-refs|logs[\\/\\\\](.+[\\/\\\\])?[^\\/\\\\]+)$/': { image: ActivityAssets.Manifest },
  '/\\.(md|mdown|markdown|mkd|mkdown|mdwn|mkdn|rmd|ron|pmd)$/i': {
    image: ActivityAssets.Markdown,
  },
  '.mdx': { image: ActivityAssets.Markdownx },
  '.marko': { image: ActivityAssets.Marko },
  '.nim': { image: ActivityAssets.Nim },
  '.nims': { image: ActivityAssets.Nim },
  '.nimble': { image: ActivityAssets.Nim },
  '.nix': { image: ActivityAssets.Nix },
  '.npmrc': { image: ActivityAssets.Npm },
  '.npmignore': { image: ActivityAssets.Npm },
  '/\\.mm?$/i': { image: ActivityAssets.Objc },
  '.pch': { image: ActivityAssets.Objc },
  '.x': { image: ActivityAssets.Objc },
  '.ml': { image: ActivityAssets.Ocaml },
  '.mli': { image: ActivityAssets.Ocaml },
  '.eliom': { image: ActivityAssets.Ocaml },
  '.eliomi': { image: ActivityAssets.Ocaml },
  '.ml4': { image: ActivityAssets.Ocaml },
  '.mll': { image: ActivityAssets.Ocaml },
  '.mly': { image: ActivityAssets.Ocaml },
  '.mt': { image: ActivityAssets.Metal },
  '.odin': { image: ActivityAssets.Odin },
  '/\\.pas(cal)?$/i': { image: ActivityAssets.Pascal },
  '.lpr': { image: ActivityAssets.Pascal },
  '.p': { image: ActivityAssets.Pawn },
  '.inc': { image: ActivityAssets.Pawn },
  '.sma': { image: ActivityAssets.Pawn },
  '.pwn': { image: ActivityAssets.Pawn },
  '.sp': { image: ActivityAssets.Sourcepawn },
  '/\\.p(er)?l$/i': { image: ActivityAssets.Perl },
  '.al': { image: ActivityAssets.Perl },
  '.ph': { image: ActivityAssets.Perl },
  '.plx': { image: ActivityAssets.Perl },
  '.pm': { image: ActivityAssets.Perl },
  '/\\.(psgi|xs)$/i': { image: ActivityAssets.Perl },
  '.pl6': { image: ActivityAssets.Perl },
  '/\\.[tp]6$|\\.6pl$/i': { image: ActivityAssets.Perl },
  '/\\.(pm6|p6m)$/i': { image: ActivityAssets.Perl },
  '.6pm': { image: ActivityAssets.Perl },
  '.nqp': { image: ActivityAssets.Perl },
  '.p6l': { image: ActivityAssets.Perl },
  '.pod6': { image: ActivityAssets.Perl },
  '/^Rexfile$/': { image: ActivityAssets.Perl },
  '/\\.php([st\\d]|_cs)?$/i': { image: ActivityAssets.Php },
  '/^Phakefile/': { image: ActivityAssets.Php },
  '.pony': { image: ActivityAssets.Ponylang },
  '.pcss': { image: ActivityAssets.Postcss },
  '.ps1': { image: ActivityAssets.Powershell },
  '.psd1': { image: ActivityAssets.Powershell },
  '.psm1': { image: ActivityAssets.Powershell },
  '.ps1xml': { image: ActivityAssets.Powershell },
  '.prettierignore': { image: ActivityAssets.Prettier },
  'prisma.yml': { image: ActivityAssets.Prisma },
  '.pde': { image: ActivityAssets.Processing },
  '.jade': { image: ActivityAssets.Pug },
  '.pug': { image: ActivityAssets.Pug },
  '.purs': { image: ActivityAssets.Purescript },
  '.py': { image: ActivityAssets.Python },
  '.ipy': { image: ActivityAssets.Python },
  '.isolate': { image: ActivityAssets.Python },
  '.pep': { image: ActivityAssets.Python },
  '.gyp': { image: ActivityAssets.Python },
  '.gypi': { image: ActivityAssets.Python },
  '.pyde': { image: ActivityAssets.Python },
  '.pyp': { image: ActivityAssets.Python },
  '.pyt': { image: ActivityAssets.Python },
  '.py3': { image: ActivityAssets.Python },
  '.pyi': { image: ActivityAssets.Python },
  '.pyw': { image: ActivityAssets.Python },
  '.tac': { image: ActivityAssets.Python },
  '.wsgi': { image: ActivityAssets.Python },
  '.xpy': { image: ActivityAssets.Python },
  '.rpy': { image: ActivityAssets.Python },
  '/\\.?(pypirc|pythonrc|python-venv)$/i': { image: ActivityAssets.Python },
  '/^(SConstruct|SConscript)$/': { image: ActivityAssets.Python },
  '/^(Snakefile|WATCHLISTS)$/': { image: ActivityAssets.Python },
  '/^wscript$/': { image: ActivityAssets.Python },
  '/\\.(r|Rprofile|rsx|rd)$/i': { image: ActivityAssets.R },
  '/\\.res?i?$/i': { image: ActivityAssets.Text },
  '/\\.(rb|ru|ruby|erb|gemspec|god|mspec|pluginspec|podspec|rabl|rake|opal)$/i': { image: ActivityAssets.Ruby },
  '/^\\.?(irbrc|gemrc|pryrc|ruby-(gemset|version))$/i': {
    image: ActivityAssets.Ruby,
  },
  '/^(Appraisals|(Rake|[bB]uild|Cap|Danger|Deliver|Fast|Guard|Jar|Maven|Pod|Puppet|Snap)file(\\.lock)?)$/': { image: ActivityAssets.Ruby },
  '/\\.(jbuilder|rbuild|rb[wx]|builder)$/i': { image: ActivityAssets.Ruby },
  '/^rails$/': { image: ActivityAssets.Ruby },
  '.watchr': { image: ActivityAssets.Ruby },
  '.rs': { image: ActivityAssets.Rust },
  '/\\.(sc|scala)$/i': { image: ActivityAssets.Scala },
  '.scss': { image: ActivityAssets.Scss },
  '.sass': { image: ActivityAssets.Scss },
  '/\\.(sh|rc|bats|bash|tool|install|command)$/i': { image: ActivityAssets.Shell },
  '/^(\\.?bash(rc|[-_]?(profile|login|logout|history|prompt))|_osc|config|install-sh|PKGBUILD)$/i': { image: ActivityAssets.Shell },
  '/\\.(ksh|mksh|pdksh)$/i': { image: ActivityAssets.Shell },
  '.sh-session': { image: ActivityAssets.Shell },
  '/\\.zsh(-theme|_history)?$|^\\.?(antigen|zpreztorc|zlogin|zlogout|zprofile|zshenv|zshrc)$/i': { image: ActivityAssets.Shell },
  '/\\.fish$|^\\.fishrc$/i': { image: ActivityAssets.Shell },
  '/^\\.?(login|profile)$/': { image: ActivityAssets.Shell },
  '.inputrc': { image: ActivityAssets.Shell },
  '.tmux': { image: ActivityAssets.Shell },
  '/^(configure|config\\.(guess|rpath|status|sub)|depcomp|libtool|compile)$/': { image: ActivityAssets.Shell },
  '/^\\/(private\\/)?etc\\/([^\\/]+\\/)*(profile$|nanorc$|rc\\.|csh\\.)/i': {
    image: ActivityAssets.Shell,
  },
  '/^\\.?cshrc$/i': { image: ActivityAssets.Shell },
  '.profile': { image: ActivityAssets.Shell },
  '.tcsh': { image: ActivityAssets.Shell },
  '.csh': { image: ActivityAssets.Shell },
  '.sk': { image: ActivityAssets.Text },
  '.sqf': { image: ActivityAssets.Sqf },
  '/\\.(my)?sql$/i': { image: ActivityAssets.Sql },
  '.ddl': { image: ActivityAssets.Sql },
  '.udf': { image: ActivityAssets.Sql },
  '.hql': { image: ActivityAssets.Sql },
  '.viw': { image: ActivityAssets.Sql },
  '.prc': { image: ActivityAssets.Sql },
  '.cql': { image: ActivityAssets.Sql },
  '.db2': { image: ActivityAssets.Sql },
  '/\\.(styl|stylus)$/i': { image: ActivityAssets.Stylus },
  '.svelte': { image: ActivityAssets.Svelte },
  '.svg': { image: ActivityAssets.Svg },
  '.swift': { image: ActivityAssets.Swift },
  '.tex': { image: ActivityAssets.Tex },
  '.ltx': { image: ActivityAssets.Tex },
  '.aux': { image: ActivityAssets.Tex },
  '.sty': { image: ActivityAssets.Tex },
  '.dtx': { image: ActivityAssets.Tex },
  '.cls': { image: ActivityAssets.Tex },
  '.ins': { image: ActivityAssets.Tex },
  '.lbx': { image: ActivityAssets.Tex },
  '.mkiv': { image: ActivityAssets.Tex },
  '.mkvi': { image: ActivityAssets.Tex },
  '.mkii': { image: ActivityAssets.Tex },
  '.texi': { image: ActivityAssets.Tex },
  '/^hyphen(ex)?\\.(cs|den|det|fr|sv|us)$/': { image: ActivityAssets.Tex },
  '/\\.te?xt$/i': { image: ActivityAssets.Text },
  '.rtf': { image: ActivityAssets.Text },
  '/\\.i?nfo$/i': { image: ActivityAssets.Text },
  '.msg': { image: ActivityAssets.Text },
  '/\\.(utxt|utf8)$/i': { image: ActivityAssets.Text },
  '.toml': { image: ActivityAssets.Toml },
  '.travis.yml': { image: ActivityAssets.Travis },
  '.ts.map': { image: ActivityAssets.Tsmap },
  '/.*\\.d\\.ts/i': { image: ActivityAssets.TypescriptDef },
  '.ts': { image: ActivityAssets.Ts },
  '.tsx': { image: ActivityAssets.Tsx },
  '.twig': { image: ActivityAssets.Twig },
  '.v': { image: ActivityAssets.V },
  '.vh': { image: ActivityAssets.V },
  '.vala': { image: ActivityAssets.Vala },
  '.vapi': { image: ActivityAssets.Vala },
  '.vb': { image: ActivityAssets.Vb },
  '.vbs': { image: ActivityAssets.Vb },
  '.vbhtml': { image: ActivityAssets.Vb },
  '.vbproj': { image: ActivityAssets.Vb },
  '.vba': { image: ActivityAssets.Text },
  '.vcxproj': { image: ActivityAssets.Text },
  '.vscodeignore': { image: ActivityAssets.Vscodeignore },
  '.vue': { image: ActivityAssets.Vue },
  '.wat': { image: ActivityAssets.Wasm },
  '.wast': { image: ActivityAssets.Wasm },
  '.wasm': { image: ActivityAssets.Wasm },
  '.xml': { image: ActivityAssets.Xml },
  '/\\.ya?ml$/i': { image: ActivityAssets.Yaml },
  '/^yarn(\\.lock)?$/i': { image: ActivityAssets.Yarn },
  '.yarnrc': { image: ActivityAssets.Yarn },
  '.zig': { image: ActivityAssets.Zig },
  '/\\.(tfvars|tf)$/i': { image: ActivityAssets.Terraform },
}

presence.on('UpdateData', async () => {
  const [
    detailIdling,
    customDetail,
    customState,
    customSmallText,
    customEmpty,
    timestamps,
    buttons,
  ] = await Promise.all([
    presence.getSetting<string>('customIdling'),
    presence.getSetting<string>('customDetail'),
    presence.getSetting<string>('customState'),
    presence.getSetting<string>('customImageText'),
    presence.getSetting<string>('customEmpty'),
    presence.getSetting<boolean>('timeStamps'),
    presence.getSetting<boolean>('buttons'),
  ])
  const presenceData: PresenceData = {
    largeImageKey: ActivityAssets.Logo,
    smallImageKey: ActivityAssets.Vscode,
    startTimestamp,
  }
  const status: Stauts = {
    file: document.querySelector('.tab.active a')?.textContent ?? undefined,
    workspace: document
      .querySelector('.pane-header > .codicon-explorer-view-icon')
      ?.getAttribute('aria-label') ?? undefined,
    editor: {
      lang: document.querySelector('#status\\.editor\\.mode')?.textContent ?? undefined,
    },
  }
  const { file, workspace, editor } = status
  const findExtension = Object.keys(KNOWN_EXTENSIONS).find((key) => {
    if (file?.endsWith(key))
      return true
    const match = /^\/(.*)\/([mgiy]+)$/.exec(key)
    if (!match)
      return false
    return new RegExp(match[1]!, match[2]).test(file ?? '')
  })

  if (!file || !workspace) {
    presenceData.details = detailIdling
    presenceData.largeImageKey = ActivityAssets.IdleVscode
    if (presenceData.buttons)
      delete presenceData.buttons
  }
  else {
    presenceData.state = Replace(customState, customEmpty)
    presenceData.details = Replace(customDetail, customEmpty)
    presenceData.smallImageText = Replace(customSmallText, customEmpty)
    presenceData.largeImageKey = KNOWN_EXTENSIONS[findExtension ?? '']?.image
      || KNOWN_LANGUAGES.find(key =>
        key.language.includes(editor?.lang?.toLowerCase() ?? ''),
      )?.image
      || ActivityAssets.Logo
  }

  if (buttons && document.location.pathname?.split('/')[1] === 'github') {
    presenceData.buttons = [
      {
        label: 'View Repository',
        url: document.location.href.replace('vscode.dev/github', 'github.com'),
      },
    ]
  }

  if (!timestamps)
    delete presenceData.startTimestamp
  if (!buttons)
    delete presenceData.buttons
  if (presenceData.details)
    presence.setActivity(presenceData)
  else presence.setActivity()
})

function Replace(value: string, empty: string) {
  for (const [string, selector] of Object.entries({
    '%file%': ['.tab.active a'],
    '%branch%': ['#status\\.scm\\.0'],
    '%error%': ['#status\\.problems > a > span.codicon.codicon-error', 'nextSibling'],
    '%problems%': ['#status\\.problems > a > span.codicon.codicon-warning', 'nextSibling'],
    '%workspace%': [
      '.pane-header > .codicon-explorer-view-icon',
      'aria-label',
    ],
    '%lang%': ['#status\\.editor\\.mode'],
    '%encoding%': ['#status\\.editor\\.encoding'],
    '%selection%': ['#status\\.editor\\.selection'],
  })) {
    value = value.replace(
      string,
      selector[1] === 'nextSibling'
        ? document
          .querySelector(selector[0]!)
          ?.nextSibling
          ?.textContent
          ?.trim() || empty
        : selector[1]
          ? document
            .querySelector(selector[0]!)
            ?.getAttribute(selector[1])
            ?.trim() || empty
          : document.querySelector(selector[0]!)?.textContent?.trim() || empty,
    )
  }
  return value
}
