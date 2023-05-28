const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'BotiCord.top Public API',
    tagline: '',
    url: 'https://dev-docs.boticord.top',
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
                    type: 'localeDropdown',
                    position: 'right'
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
                    title: 'Docs',
                    items: [
                        // {
                        //   label: 'Contributing',
                        //   to: '/contributing',
                        // },
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
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/boticord',
                        },
                        {
                            label: 'Сайт',
                            href: 'https://boticord.top',
                        },
                        {
                            label: 'Поддержка',
                            href: 'https://boticord.top/discord',
                        }
                    ],
                },
            ],
            copyright: `Все права защищены. © 2020-${new Date().getFullYear()} BotiCord.top`,
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
                    editUrl:
                        'https://github.com/boticord/docs-v3/blob/main/',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
        // [
        //   'redocusaurus',
        //   {
        //     debug: Boolean(process.env.DEBUG || process.env.CI),
        //     specs: [
        //       {
        //         spec: 'https://api.revolt.chat/openapi.json',
        //         route: '/api/',
        //       }
        //     ],
        //     theme: {
        //       primaryColor: '#1890ff',
        //       redocOptions: { hideDownloadButton: false },
        //     },
        //   },
        // ]
    ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                language: ["en", "ru"],
                docsRouteBasePath: "/",
            })
        ]
    ],
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru','en'],
        path: 'locale',
        localeConfigs: {
            ru: {
                label: 'Русский',
            },
            en: {
                label: 'English',
            }
        }
    },
};
