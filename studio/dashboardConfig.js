export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '626316d4dadbc3106d9b2e4e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7m8a1g77',
                  apiId: '9a66c9cc-b669-4347-afaf-8c301f2363d5'
                },
                {
                  buildHookId: '626316d4cbf6840a9aaff604',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-g5kh66h5',
                  apiId: '59252986-3780-40f0-aa4c-2985fffbcf6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samuel-gomez/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-g5kh66h5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
