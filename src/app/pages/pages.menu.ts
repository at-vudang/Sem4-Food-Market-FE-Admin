export const PAGES_MENU_ADMIN = [
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
            path: 'customer',
            data: {
              menu: {
                title: 'general.menu.customer',
              }
            }
          },
          {
            path: 'supplier',
            data: {
              menu: {
                title: 'general.menu.supplier',
              }
            }
          },
          {
            path: 'admin',
            data: {
              menu: {
                title: 'general.menu.admin',
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
            path: 'payment',
            data: {
              menu: {
                title: 'general.menu.payment',
              }
            }
          },
          {
            path: 'canceled',
            data: {
              menu: {
                title: 'general.menu.list_order_canceled',
              }
            }
          },
          {
            path: 'approved',
            data: {
              menu: {
                title: 'general.menu.list_order_approved',
              }
            }
          },
          {
            path: 'pending',
            data: {
              menu: {
                title: 'general.menu.list_order_pending',
              }
            }
          },
          {
            path: 'finished',
            data: {
              menu: {
                title: 'general.menu.list_order_finished',
              }
            }
          },
        ]
      },
      {
        path: 'promotion',
        data: {
          menu: {
            title: 'general.menu.manage_promotion',
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
                title: 'general.menu.promotion_list',
              }
            }
          }
        ]
      },
      // {
      //   path: 'category',
      //   data: {
      //     menu: {
      //       title: 'general.menu.manage_category',
      //       icon: 'ion-pricetag',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'supplier',
      //       data: {
      //         menu: {
      //           title: 'general.menu.supplier',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'unit',
      //   data: {
      //     menu: {
      //       title: 'general.menu.manage_unit',
      //       icon: 'ion-pricetag',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'supplier',
      //       data: {
      //         menu: {
      //           title: 'general.menu.supplier',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'ship',
      //   data: {
      //     menu: {
      //       title: 'general.menu.manage_ship',
      //       icon: 'ion-pricetag',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'supplier',
      //       data: {
      //         menu: {
      //           title: 'general.menu.supplier',
      //         }
      //       }
      //     }
      //   ]
      // },
      //  {
      //   path: 'statistic',
      //   data: {
      //     menu: {
      //       title: 'general.menu.statistic',
      //       icon: 'ion-pricetag',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'supplier',
      //       data: {
      //         menu: {
      //           title: 'general.menu.supplier',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'editors',
      //   data: {
      //
      //     menu: {
      //       title: 'general.menu.editors',
      //       icon: 'ion-edit',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'ckeditor',
      //       data: {
      //         menu: {
      //           title: 'general.menu.ck_editor',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'components',
      //   data: {
      //     menu: {
      //       title: 'general.menu.components',
      //       icon: 'ion-gear-a',
      //       selected: false,
      //       expanded: false,
      //       order: 250,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'treeview',
      //       data: {
      //         menu: {
      //           title: 'general.menu.tree_view',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'charts',
      //   data: {
      //     menu: {
      //       title: 'general.menu.charts',
      //       icon: 'ion-stats-bars',
      //       selected: false,
      //       expanded: false,
      //       order: 200,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'chartist-js',
      //       data: {
      //         menu: {
      //           title: 'general.menu.chartist_js',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: 'ui',
      //   data: {
      //     menu: {
      //       title: 'general.menu.ui_features',
      //       icon: 'ion-android-laptop',
      //       selected: false,
      //       expanded: false,
      //       order: 300,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'typography',
      //       data: {
      //         menu: {
      //           title: 'general.menu.typography',
      //         }
      //       }
      //     },
      //     {
      //       path: 'buttons',
      //       data: {
      //         menu: {
      //           title: 'general.menu.buttons',
      //         }
      //       }
      //     },
      //     {
      //       path: 'icons',
      //       data: {
      //         menu: {
      //           title: 'general.menu.icons',
      //         }
      //       }
      //     },
      //     {
      //       path: 'modals',
      //       data: {
      //         menu: {
      //           title: 'general.menu.modals',
      //         }
      //       }
      //     },
      //     {
      //       path: 'slim',
      //       data: {
      //         menu: {
      //           title: 'Slim loading bar',
      //         }
      //       }
      //     },
      //     {
      //       path: 'grid',
      //       data: {
      //         menu: {
      //           title: 'general.menu.grid',
      //         }
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'forms',
      //   data: {
      //     menu: {
      //       title: 'general.menu.form_elements',
      //       icon: 'ion-compose',
      //       selected: false,
      //       expanded: false,
      //       order: 400,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'inputs',
      //       data: {
      //         menu: {
      //           title: 'general.menu.form_inputs',
      //         }
      //       }
      //     },
      //     {
      //       path: 'layouts',
      //       data: {
      //         menu: {
      //           title: 'general.menu.form_layouts',
      //         }
      //       }
      //     }
      //   ]
      // },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
      // {
      //   path: 'maps',
      //   data: {
      //     menu: {
      //       title: 'general.menu.maps',
      //       icon: 'ion-ios-location-outline',
      //       selected: false,
      //       expanded: false,
      //       order: 600,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'googlemaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.google_maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'leafletmaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.leaflet_maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'bubblemaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.bubble_maps',
      //         }
      //       }
      //     },
      //     {
      //       path: 'linemaps',
      //       data: {
      //         menu: {
      //           title: 'general.menu.line_maps',
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'general.menu.pages',
      //       icon: 'ion-document',
      //       selected: false,
      //       expanded: false,
      //       order: 650,
      //     }
      //   },
      //   children: [
      //     {
      //       path: ['/login'],
      //       data: {
      //         menu: {
      //           title: 'general.menu.login'
      //         }
      //       }
      //     },
      //     {
      //       path: ['/register'],
      //       data: {
      //         menu: {
      //           title: 'general.menu.register'
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'general.menu.menu_level_1',
      //       icon: 'ion-ios-more',
      //       selected: false,
      //       expanded: false,
      //       order: 700,
      //     }
      //   },
      //   children: [
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'general.menu.menu_level_1_1',
      //           url: '#'
      //         }
      //       }
      //     },
      //     {
      //       path: '',
      //       data: {
      //         menu: {
      //           title: 'general.menu.menu_level_1_2',
      //           url: '#'
      //         }
      //       },
      //       children: [
      //         {
      //           path: '',
      //           data: {
      //             menu: {
      //               title: 'general.menu.menu_level_1_2_1',
      //               url: '#'
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   data: {
      //     menu: {
      //       title: 'general.menu.external_link',
      //       url: 'http://akveo.com',
      //       icon: 'ion-android-exit',
      //       order: 800,
      //       target: '_blank'
      //     }
      //   }
      // }
    ]
  }
];
export const PAGES_MENU_SUPPLIER = [
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
      // {
      //   path: 'orders',
      //   data: {
      //     menu: {
      //       title: 'general.menu.manage_order',
      //       icon: 'ion-pricetag',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'payment',
      //       data: {
      //         menu: {
      //           title: 'general.menu.payment',
      //         }
      //       }
      //     },
      //     {
      //       path: 'canceled',
      //       data: {
      //         menu: {
      //           title: 'general.menu.list_order_canceled',
      //         }
      //       }
      //     },
      //     {
      //       path: 'approved',
      //       data: {
      //         menu: {
      //           title: 'general.menu.list_order_approved',
      //         }
      //       }
      //     },
      //     {
      //       path: 'pending',
      //       data: {
      //         menu: {
      //           title: 'general.menu.list_order_pending',
      //         }
      //       }
      //     },
      //     {
      //       path: 'finished',
      //       data: {
      //         menu: {
      //           title: 'general.menu.list_order_finished',
      //         }
      //       }
      //     },
      //   ]
      // },
      // {
      //   path: 'promotion',
      //   data: {
      //     menu: {
      //       title: 'general.menu.manage_promotion',
      //       icon: 'ion-pricetag',
      //       selected: false,
      //       expanded: false,
      //       order: 100,
      //     }
      //   },
      //   children: [
      //     {
      //       path: 'list',
      //       data: {
      //         menu: {
      //           title: 'general.menu.promotion_list',
      //         }
      //       }
      //     }
      //   ]
      // },
    ]
  }
];
