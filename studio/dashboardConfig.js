export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e466cc0582599a6cb73532d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-661b8hgc',
                  apiId: 'dfa9be5b-f22e-4786-abdd-7e4005ae76c1'
                },
                {
                  buildHookId: '5e466cc09d95eb6be905711f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xgdi7yot',
                  apiId: 'ccd61793-dc22-4088-82b6-d7b288ddef5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LouisVallaey/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xgdi7yot.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
