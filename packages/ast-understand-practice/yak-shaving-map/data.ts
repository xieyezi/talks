import type { Node } from "vis-network";
import poisitions from "./yak-map-pos.json";

export interface ProjectNode extends Partial<Node> {
  name: string;
  display?: string;
  link?: string;
  color?: string;
  dashed?: boolean;
  faded?: boolean;
  from?: string[];
  deps?: string[];
  animateStop?: boolean;
}

const colors = {
  vue: "#34ba67",
  nuxt: "#00DC82",
  vite: "#454ce1",
  unjs: "#982",
  ts: "#007ACC",
  vscode: "#007ACC",
  vitesse: "#895",
  slidev: "#2ae",
  vitest: "#82ba34",
  unplugin: "#525",
  eslint: "#53f",
  shiki: "#CB7676",
  twoslash: "#183F66"
};

export const primary: ProjectNode[] = [
  {
    name: "breadsplit",
    display: "Program",
    link: "https://github.com/breadsplit/breadsplit",
    color: "#555",
    x: 0,
    y: 0
  },
  {
    name: "i18n-ally",
    display: "sourceType",
    color: "#351",
    from: ["breadsplit"],
    dashed: true
  },
  {
    name: "vueuse",
    display: "body",
    from: ["breadsplit"],
    shape: "circle",
    color: colors.vue
  },
  {
    name: "@vue/composition-api",
    display: "VariableDeclaration",
    color: colors.vue,
    from: ["vueuse"]
  },
  {
    name: "vue-demi",
    display: "VariableDeclarator",
    color: colors.shiki,
    from: ["@vue/composition-api"]
  },
  {
    name: "vue",
    display: "StringLiteral",
    link: "https://github.com/vuejs/core",
    color: "#42b8a6",
    from: ["vue-demi"]
  }
];

export const secondary: ProjectNode[] = [
  {
    name: "handle",
    display: "Handle",
    link: "https://github.com/antfu/handle",
    from: ["vitesse"]
  },
  {
    name: "v-dollar",
    link: "https://github.com/antfu/v-dollar",
    color: colors.vue,
    from: ["vue"]
  },
  {
    name: "vue-starport",
    display: "Vue Starport",
    link: "https://github.com/antfu/vue-starport",
    color: colors.vue,
    from: ["vue", "slidev"]
  },
  {
    name: "vite-plugin-restart",
    link: "https://github.com/antfu/vite-plugin-restart",
    color: colors.vite,
    from: ["vite"]
  },
  {
    name: "vite-plugin-remote-assets",
    link: "https://github.com/antfu/vite-plugin-remote-assets",
    color: colors.vite,
    from: ["vite"]
  },
  {
    name: "vite-plugin-vue-server-ref",
    link: "https://github.com/antfu/vite-plugin-vue-server-ref",
    color: colors.vite,
    from: ["vite"]
  },
  {
    name: "vitesse-theme",
    display: "Vitesse Theme",
    link: "https://github.com/antfu/vscode-theme-vitesse",
    color: colors.vitesse,
    from: ["vscode", "vueuse"]
  },
  {
    name: "qrcode-toolkit",
    display: "QR Toolkit",
    link: "https://github.com/antfu/qrcode-toolkit"
  },
  {
    name: "uqr",
    link: "https://github.com/unjs/uqr",
    color: colors.unjs,
    from: ["qrcode-toolkit"]
  },
  {
    name: "ni",
    link: "https://github.com/antfu/ni",
    color: "#153"
  },
  {
    name: "sponsorkit",
    display: "SponsorKit",
    link: "https://github.com/antfu/sponsorkit",
    color: "#a83266"
  },
  {
    name: "type-challenges",
    display: "Type Challenges",
    link: "https://github.com/type-challenges/type-challenges",
    color: colors.ts
  },
  {
    name: "esno",
    link: "https://github.com/antfu/esno",
    from: ["type-challenges"],
    color: colors.ts
  },
  {
    name: "taze",
    link: "https://github.com/antfu/taze",
    color: "#33b85d"
  },
  {
    name: "qr-scanner-wechat",
    link: "https://github.com/antfu/qr-scanner-wechat",
    from: ["qrcode-toolkit"],
    color: colors.vue
  },
  {
    name: "vscode-file-nesting",
    display: "VS Code File Nesting",
    link: "https://github.com/antfu/vscode-file-nesting-config",
    from: ["vscode"],
    color: colors.vscode
  },
  {
    name: "vscode-smart-clicks",
    display: "VS Code Smart Clicks",
    link: "https://github.com/antfu/vscode-smart-clicks",
    from: ["vscode"],
    color: colors.vscode
  },
  {
    name: "retypewriter",
    display: "retypewriter",
    link: "https://github.com/antfu/retypewriter",
    from: ["vscode"],
    color: "#4cb833"
  },
  {
    name: "twoslash-vue",
    display: "Twoslash Vue",
    link: "https://github.com/twoslashes/twoslash",
    color: colors.vue,
    from: ["twoslash"]
  },
  {
    name: "vitepress-twoslash",
    display: "VitePress Twoslash",
    link: "https://github.com/shikijs/shiki",
    color: colors.vue,
    from: ["twoslash-vue"]
  },
  {
    name: "nuxt-content-twoslash",
    display: "Nuxt Content Twoslash",
    color: colors.nuxt,
    link: "https://github.com/antfu/nuxt-content-twoslash",
    from: ["vitepress-twoslash", "nuxt"]
  },
  {
    name: "nuxt-icon",
    display: "Nuxt Icon",
    link: "https://github.com/nuxt/icon",
    color: colors.nuxt,
    dashed: true,
    from: ["iconify", "nuxt"]
  }
];

secondary.forEach((p, idx) => {
  p.faded = true;
  if (idx) p.animateStop = false;
});

export const all = [...primary, ...secondary];

for (const [id, pos] of Object.entries(poisitions) as [string, { x: number; y: number }][]) {
  if (!pos) continue;
  const project = all.find((p) => p.name === id);
  if (project) Object.assign(project, pos);
}

export { poisitions };
