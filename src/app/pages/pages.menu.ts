export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'general.menu.manage_user',
            icon: 'ion-pricetag',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'general.menu.list_user',
              }
            }
          }
        ]
      },
      {
        path: 'products',
        data: {
          menu: {
            title: 'general.menu.manage_product',
            icon: 'ion-pricetag',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'input',
            data: {
              menu: {
                title: 'general.menu.input_product',
              }
            }
          },
          {
            path: 'list',
            data: {
              menu: {
                title: 'general.menu.list_product',
              }
            }
          }
        ]
      },
      {
        path: 'orders',
        data: {
          menu: {
            title: 'general.menu.manage_order',
            icon: 'ion-pricetag',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'general.menu.list_order',
              }
            }
          }
        ]
      }
    ]
  }
];
