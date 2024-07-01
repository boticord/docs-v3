const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'BotiCord.top Public API',
    tagline: '',
    url: 'https://docs.boticord.top',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'BotiCord',
    projectName: 'BotiCord.top Public API',
    themeConfig: {
        navbar: {
            title: 'BotiCord',
            logo: {
                alt: 'BotiCord logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    href: '/api/',
                    position: 'left',
                    label: 'API',
                },
                {
                    href: '/sdk/',
                    position: 'left',
                    label: 'SDK',
                },
                {
                    href: 'https://github.com/boticord',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                          label: 'Contributing',
                          to: '/contributing',
                        },
                        {
                            label: 'REST API',
                            to: '/api/',
                        },
                        {
                            label: "SDK's",
                            to: '/sdk/',
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/boticord',
                        },
                        {
                            label: 'BotiCord',
                            href: 'https://boticord.top',
                        },
                        {
                            label: 'Support',
                            href: 'https://get.boticord.top/support',
                        }
                    ],
                },
            ],
            copyright: `All right reserved. © 2020-${new Date().getFullYear()} BotiCord.top`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    remarkPlugins: [math, require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
                    rehypePlugins: [katex],
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl: "https://github.com/boticord/docs-v3/edit/main/",
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                language: ["en"],
                docsRouteBasePath: "/",
            })
        ]
    ]
};
