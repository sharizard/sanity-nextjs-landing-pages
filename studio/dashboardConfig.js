export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606ca6673e4c0b0cb38fe6e5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vse3c9zd',
                  apiId: '395cb1c7-5b3e-480b-8ddf-6f08409de2eb'
                },
                {
                  buildHookId: '606ca668a614fa12126cbd0e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9frzwcjw',
                  apiId: '85976ff5-543b-4768-968d-6bb309304b26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sharizard/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9frzwcjw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
