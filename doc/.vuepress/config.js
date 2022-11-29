module.exports = {
    title: '东方赞的CPA之旅-从狗屁不通到高大上的注册会计师',
    description: '从狗屁不通到高大上的注册会计师',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'keywords', content: 'cpa,注册会计师,会计,审计,税法,财务成本管理,经济法,公司战略与风险管理' }],
        [ 'script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?10befa5b7f9ac8db7ba52074ce7553a7";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ],
        [ 'script', {}, `  
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z718YJ6MRQ');`
        ],
        [ 'script', {src:'https://www.googletagmanager.com/gtag/js?id=G-Z718YJ6MRQ'}]
    ],
    base: '/',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        [
            '@vuepress/google-analytics', {
            'ga': 'G-Z718YJ6MRQ'
        }
        ]
    ],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: '最后更新',
        nav: [
            { text: '首页', link: '/' },
            { text: '关于我', link: '/关于我.html'},
            { text: 'Gitee', link: 'https://gitee.com/mortise-and-tenon/tesla-java-sdk' },
            { text: 'Github', link: 'https://github.com/dongfangzan/tesla-java-sdk' }
        ],
        sidebar: [
            {
                title: '写在开始之前',
                path: '/',
                children: []
            },
            {
                title: 'Getting Started',
                // path: '/start',
                children: [
                    {
                        title: '会计',
                        children: [
                            '/start/accountant/存货.html'
                        ]
                    }

                ]
            },
            {
                title: '关于我',
                path: '/关于我.html',
                children: []
            }
        ]

    }
};