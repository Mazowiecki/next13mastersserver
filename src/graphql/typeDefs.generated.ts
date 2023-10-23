import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 22, end: 30 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 31, end: 33 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 35, end: 37 },
                  },
                  loc: { start: 35, end: 37 },
                },
                loc: { start: 35, end: 38 },
              },
              directives: [],
              loc: { start: 31, end: 38 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 41, end: 49 },
            },
            loc: { start: 41, end: 49 },
          },
          directives: [],
          loc: { start: 22, end: 49 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 52, end: 62 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 63, end: 69 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 71, end: 74 },
                },
                loc: { start: 71, end: 74 },
              },
              directives: [],
              loc: { start: 63, end: 74 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 76, end: 81 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 83, end: 86 },
                },
                loc: { start: 83, end: 86 },
              },
              directives: [],
              loc: { start: 76, end: 86 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filter",
                loc: { start: 88, end: 94 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 96, end: 102 },
                },
                loc: { start: 96, end: 102 },
              },
              directives: [],
              loc: { start: 88, end: 102 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 106, end: 114 },
              },
              loc: { start: 106, end: 114 },
            },
            loc: { start: 105, end: 115 },
          },
          directives: [],
          loc: { start: 52, end: 115 },
        },
      ],
      loc: { start: 0, end: 117 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 124, end: 132 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 137, end: 139 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 141, end: 143 },
              },
              loc: { start: 141, end: 143 },
            },
            loc: { start: 141, end: 144 },
          },
          directives: [],
          loc: { start: 137, end: 144 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 147, end: 151 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 153, end: 159 },
            },
            loc: { start: 153, end: 159 },
          },
          directives: [],
          loc: { start: 147, end: 159 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 162, end: 171 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 173, end: 179 },
            },
            loc: { start: 173, end: 179 },
          },
          directives: [],
          loc: { start: 162, end: 179 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 182, end: 191 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 193, end: 199 },
            },
            loc: { start: 193, end: 199 },
          },
          directives: [],
          loc: { start: 182, end: 199 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 202, end: 209 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 212, end: 219 },
              },
              loc: { start: 212, end: 219 },
            },
            loc: { start: 211, end: 220 },
          },
          directives: [],
          loc: { start: 202, end: 220 },
        },
      ],
      loc: { start: 119, end: 222 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 235, end: 240 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 245, end: 255 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 256, end: 260 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 262, end: 268 },
                  },
                  loc: { start: 262, end: 268 },
                },
                loc: { start: 262, end: 269 },
              },
              directives: [],
              loc: { start: 256, end: 269 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 272, end: 282 },
            },
            loc: { start: 272, end: 282 },
          },
          directives: [],
          loc: { start: 245, end: 282 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 285, end: 296 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 297, end: 303 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 305, end: 308 },
                },
                loc: { start: 305, end: 308 },
              },
              directives: [],
              loc: { start: 297, end: 308 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 310, end: 315 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 317, end: 320 },
                },
                loc: { start: 317, end: 320 },
              },
              directives: [],
              loc: { start: 310, end: 320 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 324, end: 334 },
              },
              loc: { start: 324, end: 334 },
            },
            loc: { start: 323, end: 335 },
          },
          directives: [],
          loc: { start: 285, end: 335 },
        },
      ],
      loc: { start: 223, end: 337 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 344, end: 354 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 359, end: 361 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 363, end: 365 },
              },
              loc: { start: 363, end: 365 },
            },
            loc: { start: 363, end: 366 },
          },
          directives: [],
          loc: { start: 359, end: 366 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 369, end: 373 } },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 375, end: 381 },
            },
            loc: { start: 375, end: 381 },
          },
          directives: [],
          loc: { start: 369, end: 381 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 384, end: 393 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 395, end: 401 },
            },
            loc: { start: 395, end: 401 },
          },
          directives: [],
          loc: { start: 384, end: 401 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 404, end: 413 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 415, end: 421 },
            },
            loc: { start: 415, end: 421 },
          },
          directives: [],
          loc: { start: 404, end: 421 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 424, end: 431 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 434, end: 441 },
              },
              loc: { start: 434, end: 441 },
            },
            loc: { start: 433, end: 442 },
          },
          directives: [],
          loc: { start: 424, end: 442 },
        },
      ],
      loc: { start: 339, end: 444 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 457, end: 462 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItem",
            loc: { start: 467, end: 476 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 477, end: 479 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 481, end: 483 },
                  },
                  loc: { start: 481, end: 483 },
                },
                loc: { start: 481, end: 484 },
              },
              directives: [],
              loc: { start: 477, end: 484 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 487, end: 496 },
            },
            loc: { start: 487, end: 496 },
          },
          directives: [],
          loc: { start: 467, end: 496 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItems",
            loc: { start: 499, end: 509 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 510, end: 516 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 518, end: 521 },
                },
                loc: { start: 518, end: 521 },
              },
              directives: [],
              loc: { start: 510, end: 521 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 523, end: 528 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 530, end: 533 },
                },
                loc: { start: 530, end: 533 },
              },
              directives: [],
              loc: { start: 523, end: 533 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OrderItem",
                loc: { start: 537, end: 546 },
              },
              loc: { start: 537, end: 546 },
            },
            loc: { start: 536, end: 547 },
          },
          directives: [],
          loc: { start: 499, end: 547 },
        },
      ],
      loc: { start: 445, end: 549 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 563, end: 571 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrderItem",
            loc: { start: 576, end: 591 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 592, end: 600 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 602, end: 605 },
                  },
                  loc: { start: 602, end: 605 },
                },
                loc: { start: 602, end: 606 },
              },
              directives: [],
              loc: { start: 592, end: 606 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 608, end: 617 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 619, end: 621 },
                  },
                  loc: { start: 619, end: 621 },
                },
                loc: { start: 619, end: 622 },
              },
              directives: [],
              loc: { start: 608, end: 622 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderId",
                loc: { start: 624, end: 631 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 633, end: 635 },
                  },
                  loc: { start: 633, end: 635 },
                },
                loc: { start: 633, end: 636 },
              },
              directives: [],
              loc: { start: 624, end: 636 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 639, end: 648 },
            },
            loc: { start: 639, end: 648 },
          },
          directives: [],
          loc: { start: 576, end: 648 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrderItem",
            loc: { start: 651, end: 666 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 667, end: 669 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 671, end: 673 },
                  },
                  loc: { start: 671, end: 673 },
                },
                loc: { start: 671, end: 674 },
              },
              directives: [],
              loc: { start: 667, end: 674 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "quantity",
                loc: { start: 676, end: 684 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 686, end: 689 },
                  },
                  loc: { start: 686, end: 689 },
                },
                loc: { start: 686, end: 690 },
              },
              directives: [],
              loc: { start: 676, end: 690 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 693, end: 702 },
            },
            loc: { start: 693, end: 702 },
          },
          directives: [],
          loc: { start: 651, end: 702 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrderItem",
            loc: { start: 705, end: 720 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 721, end: 723 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 725, end: 727 },
                  },
                  loc: { start: 725, end: 727 },
                },
                loc: { start: 725, end: 728 },
              },
              directives: [],
              loc: { start: 721, end: 728 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "OrderItem",
              loc: { start: 731, end: 740 },
            },
            loc: { start: 731, end: 740 },
          },
          directives: [],
          loc: { start: 705, end: 740 },
        },
      ],
      loc: { start: 551, end: 742 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "OrderItem", loc: { start: 749, end: 758 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 763, end: 765 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 767, end: 769 },
              },
              loc: { start: 767, end: 769 },
            },
            loc: { start: 767, end: 770 },
          },
          directives: [],
          loc: { start: 763, end: 770 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 773, end: 781 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 783, end: 786 },
              },
              loc: { start: 783, end: 786 },
            },
            loc: { start: 783, end: 787 },
          },
          directives: [],
          loc: { start: 773, end: 787 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 790, end: 797 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 799, end: 806 },
            },
            loc: { start: 799, end: 806 },
          },
          directives: [],
          loc: { start: 790, end: 806 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderId",
            loc: { start: 809, end: 816 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "ID", loc: { start: 818, end: 820 } },
            loc: { start: 818, end: 820 },
          },
          directives: [],
          loc: { start: 809, end: 820 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 823, end: 832 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 834, end: 840 },
            },
            loc: { start: 834, end: 840 },
          },
          directives: [],
          loc: { start: 823, end: 840 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 843, end: 852 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 854, end: 860 },
            },
            loc: { start: 854, end: 860 },
          },
          directives: [],
          loc: { start: 843, end: 860 },
        },
      ],
      loc: { start: 744, end: 862 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 875, end: 880 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "order", loc: { start: 885, end: 890 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 891, end: 893 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 895, end: 897 },
                  },
                  loc: { start: 895, end: 897 },
                },
                loc: { start: 895, end: 898 },
              },
              directives: [],
              loc: { start: 891, end: 898 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 900, end: 906 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 908, end: 914 },
                },
                loc: { start: 908, end: 914 },
              },
              directives: [],
              loc: { start: 900, end: 914 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 917, end: 922 },
            },
            loc: { start: 917, end: 922 },
          },
          directives: [],
          loc: { start: 885, end: 922 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orders",
            loc: { start: 925, end: 931 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 932, end: 938 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 940, end: 943 },
                },
                loc: { start: 940, end: 943 },
              },
              directives: [],
              loc: { start: 932, end: 943 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 945, end: 950 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 952, end: 955 },
                },
                loc: { start: 952, end: 955 },
              },
              directives: [],
              loc: { start: 945, end: 955 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 957, end: 963 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 965, end: 971 },
                },
                loc: { start: 965, end: 971 },
              },
              directives: [],
              loc: { start: 957, end: 971 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 975, end: 980 },
              },
              loc: { start: 975, end: 980 },
            },
            loc: { start: 974, end: 981 },
          },
          directives: [],
          loc: { start: 925, end: 981 },
        },
      ],
      loc: { start: 863, end: 983 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 997, end: 1005 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 1010, end: 1021 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderItems",
                loc: { start: 1022, end: 1032 },
              },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1035, end: 1041 },
                  },
                  loc: { start: 1035, end: 1041 },
                },
                loc: { start: 1034, end: 1042 },
              },
              directives: [],
              loc: { start: 1022, end: 1042 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1044, end: 1050 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1052, end: 1058 },
                },
                loc: { start: 1052, end: 1058 },
              },
              directives: [],
              loc: { start: 1044, end: 1058 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1061, end: 1066 },
            },
            loc: { start: 1061, end: 1066 },
          },
          directives: [],
          loc: { start: 1010, end: 1066 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 1069, end: 1080 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1081, end: 1083 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1085, end: 1087 },
                  },
                  loc: { start: 1085, end: 1087 },
                },
                loc: { start: 1085, end: 1088 },
              },
              directives: [],
              loc: { start: 1081, end: 1088 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "orderItems",
                loc: { start: 1090, end: 1100 },
              },
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1103, end: 1109 },
                  },
                  loc: { start: 1103, end: 1109 },
                },
                loc: { start: 1102, end: 1110 },
              },
              directives: [],
              loc: { start: 1090, end: 1110 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "status",
                loc: { start: 1112, end: 1118 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "EnumOrderStatus",
                  loc: { start: 1120, end: 1135 },
                },
                loc: { start: 1120, end: 1135 },
              },
              directives: [],
              loc: { start: 1112, end: 1135 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "userId",
                loc: { start: 1137, end: 1143 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1145, end: 1151 },
                },
                loc: { start: 1145, end: 1151 },
              },
              directives: [],
              loc: { start: 1137, end: 1151 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1154, end: 1159 },
            },
            loc: { start: 1154, end: 1159 },
          },
          directives: [],
          loc: { start: 1069, end: 1159 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 1162, end: 1173 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1174, end: 1176 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1178, end: 1180 },
                  },
                  loc: { start: 1178, end: 1180 },
                },
                loc: { start: 1178, end: 1181 },
              },
              directives: [],
              loc: { start: 1174, end: 1181 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1184, end: 1189 },
            },
            loc: { start: 1184, end: 1189 },
          },
          directives: [],
          loc: { start: 1162, end: 1189 },
        },
      ],
      loc: { start: 985, end: 1191 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "EnumOrderStatus",
        loc: { start: 1198, end: 1213 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PENDING",
            loc: { start: 1218, end: 1225 },
          },
          directives: [],
          loc: { start: 1218, end: 1225 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COMPLETED",
            loc: { start: 1228, end: 1237 },
          },
          directives: [],
          loc: { start: 1228, end: 1237 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELLED",
            loc: { start: 1240, end: 1249 },
          },
          directives: [],
          loc: { start: 1240, end: 1249 },
        },
      ],
      loc: { start: 1193, end: 1251 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 1258, end: 1263 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1268, end: 1270 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1272, end: 1274 },
              },
              loc: { start: 1272, end: 1274 },
            },
            loc: { start: 1272, end: 1275 },
          },
          directives: [],
          loc: { start: 1268, end: 1275 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "userId",
            loc: { start: 1278, end: 1284 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1286, end: 1292 },
            },
            loc: { start: 1286, end: 1292 },
          },
          directives: [],
          loc: { start: 1278, end: 1292 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 1295, end: 1300 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int",
              loc: { start: 1302, end: 1305 },
            },
            loc: { start: 1302, end: 1305 },
          },
          directives: [],
          loc: { start: 1295, end: 1305 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 1308, end: 1314 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "EnumOrderStatus",
                loc: { start: 1316, end: 1331 },
              },
              loc: { start: 1316, end: 1331 },
            },
            loc: { start: 1316, end: 1332 },
          },
          directives: [],
          loc: { start: 1308, end: 1332 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orderItem",
            loc: { start: 1335, end: 1344 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OrderItem",
                loc: { start: 1347, end: 1356 },
              },
              loc: { start: 1347, end: 1356 },
            },
            loc: { start: 1346, end: 1357 },
          },
          directives: [],
          loc: { start: 1335, end: 1357 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1360, end: 1369 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1371, end: 1377 },
            },
            loc: { start: 1371, end: 1377 },
          },
          directives: [],
          loc: { start: 1360, end: 1377 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1380, end: 1389 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1391, end: 1397 },
            },
            loc: { start: 1391, end: 1397 },
          },
          directives: [],
          loc: { start: 1380, end: 1397 },
        },
      ],
      loc: { start: 1253, end: 1399 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1412, end: 1417 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 1422, end: 1429 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1430, end: 1432 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1434, end: 1436 },
                  },
                  loc: { start: 1434, end: 1436 },
                },
                loc: { start: 1434, end: 1437 },
              },
              directives: [],
              loc: { start: 1430, end: 1437 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 1440, end: 1447 },
            },
            loc: { start: 1440, end: 1447 },
          },
          directives: [],
          loc: { start: 1422, end: 1447 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1450, end: 1458 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1459, end: 1465 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1467, end: 1470 },
                },
                loc: { start: 1467, end: 1470 },
              },
              directives: [],
              loc: { start: 1459, end: 1470 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 1472, end: 1477 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1479, end: 1482 },
                },
                loc: { start: 1479, end: 1482 },
              },
              directives: [],
              loc: { start: 1472, end: 1482 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filterName",
                loc: { start: 1484, end: 1494 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 1496, end: 1502 },
                },
                loc: { start: 1496, end: 1502 },
              },
              directives: [],
              loc: { start: 1484, end: 1502 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filterPriceHighToLow",
                loc: { start: 1504, end: 1524 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 1526, end: 1533 },
                },
                loc: { start: 1526, end: 1533 },
              },
              directives: [],
              loc: { start: 1504, end: 1533 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "filterRatingHighToLow",
                loc: { start: 1535, end: 1556 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 1558, end: 1565 },
                },
                loc: { start: 1558, end: 1565 },
              },
              directives: [],
              loc: { start: 1535, end: 1565 },
            },
          ],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1569, end: 1576 },
              },
              loc: { start: 1569, end: 1576 },
            },
            loc: { start: 1568, end: 1577 },
          },
          directives: [],
          loc: { start: 1450, end: 1577 },
        },
      ],
      loc: { start: 1400, end: 1579 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 1586, end: 1593 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1598, end: 1600 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1602, end: 1604 },
              },
              loc: { start: 1602, end: 1604 },
            },
            loc: { start: 1602, end: 1605 },
          },
          directives: [],
          loc: { start: 1598, end: 1605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1608, end: 1612 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1614, end: 1620 },
              },
              loc: { start: 1614, end: 1620 },
            },
            loc: { start: 1614, end: 1621 },
          },
          directives: [],
          loc: { start: 1608, end: 1621 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1624, end: 1629 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1631, end: 1637 },
              },
              loc: { start: 1631, end: 1637 },
            },
            loc: { start: 1631, end: 1638 },
          },
          directives: [],
          loc: { start: 1624, end: 1638 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1641, end: 1652 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1654, end: 1660 },
              },
              loc: { start: 1654, end: 1660 },
            },
            loc: { start: 1654, end: 1661 },
          },
          directives: [],
          loc: { start: 1641, end: 1661 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1664, end: 1669 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1671, end: 1674 },
              },
              loc: { start: 1671, end: 1674 },
            },
            loc: { start: 1671, end: 1675 },
          },
          directives: [],
          loc: { start: 1664, end: 1675 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 1678, end: 1686 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 1689, end: 1697 },
              },
              loc: { start: 1689, end: 1697 },
            },
            loc: { start: 1688, end: 1698 },
          },
          directives: [],
          loc: { start: 1678, end: 1698 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 1701, end: 1711 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 1714, end: 1724 },
              },
              loc: { start: 1714, end: 1724 },
            },
            loc: { start: 1713, end: 1725 },
          },
          directives: [],
          loc: { start: 1701, end: 1725 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "review",
            loc: { start: 1728, end: 1734 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Review",
                loc: { start: 1737, end: 1743 },
              },
              loc: { start: 1737, end: 1743 },
            },
            loc: { start: 1736, end: 1744 },
          },
          directives: [],
          loc: { start: 1728, end: 1744 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "created_at",
            loc: { start: 1747, end: 1757 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1759, end: 1765 },
            },
            loc: { start: 1759, end: 1765 },
          },
          directives: [],
          loc: { start: 1747, end: 1765 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updated_at",
            loc: { start: 1768, end: 1778 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 1780, end: 1786 },
            },
            loc: { start: 1780, end: 1786 },
          },
          directives: [],
          loc: { start: 1768, end: 1786 },
        },
      ],
      loc: { start: 1581, end: 1788 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1801, end: 1806 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 1811, end: 1818 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "offset",
                loc: { start: 1819, end: 1825 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1827, end: 1830 },
                },
                loc: { start: 1827, end: 1830 },
              },
              directives: [],
              loc: { start: 1819, end: 1830 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "limit",
                loc: { start: 1832, end: 1837 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 1839, end: 1842 },
                },
                loc: { start: 1839, end: 1842 },
              },
              directives: [],
              loc: { start: 1832, end: 1842 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Review",
                    loc: { start: 1846, end: 1852 },
                  },
                  loc: { start: 1846, end: 1852 },
                },
                loc: { start: 1846, end: 1853 },
              },
              loc: { start: 1845, end: 1854 },
            },
            loc: { start: 1845, end: 1855 },
          },
          directives: [],
          loc: { start: 1811, end: 1855 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "review",
            loc: { start: 1858, end: 1864 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1865, end: 1867 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1869, end: 1871 },
                  },
                  loc: { start: 1869, end: 1871 },
                },
                loc: { start: 1869, end: 1872 },
              },
              directives: [],
              loc: { start: 1865, end: 1872 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Review",
                loc: { start: 1875, end: 1881 },
              },
              loc: { start: 1875, end: 1881 },
            },
            loc: { start: 1875, end: 1882 },
          },
          directives: [],
          loc: { start: 1858, end: 1882 },
        },
      ],
      loc: { start: 1789, end: 1884 },
    },
    {
      kind: "ObjectTypeExtension",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1898, end: 1906 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createReview",
            loc: { start: 1911, end: 1923 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 1924, end: 1933 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1935, end: 1937 },
                  },
                  loc: { start: 1935, end: 1937 },
                },
                loc: { start: 1935, end: 1938 },
              },
              directives: [],
              loc: { start: 1924, end: 1938 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "headline",
                loc: { start: 1940, end: 1948 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1950, end: 1956 },
                  },
                  loc: { start: 1950, end: 1956 },
                },
                loc: { start: 1950, end: 1957 },
              },
              directives: [],
              loc: { start: 1940, end: 1957 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 1959, end: 1966 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1968, end: 1974 },
                  },
                  loc: { start: 1968, end: 1974 },
                },
                loc: { start: 1968, end: 1975 },
              },
              directives: [],
              loc: { start: 1959, end: 1975 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 1977, end: 1983 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 1985, end: 1988 },
                  },
                  loc: { start: 1985, end: 1988 },
                },
                loc: { start: 1985, end: 1989 },
              },
              directives: [],
              loc: { start: 1977, end: 1989 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 1991, end: 1995 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 1997, end: 2003 },
                  },
                  loc: { start: 1997, end: 2003 },
                },
                loc: { start: 1997, end: 2004 },
              },
              directives: [],
              loc: { start: 1991, end: 2004 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 2006, end: 2011 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 2013, end: 2019 },
                  },
                  loc: { start: 2013, end: 2019 },
                },
                loc: { start: 2013, end: 2020 },
              },
              directives: [],
              loc: { start: 2006, end: 2020 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Review",
                loc: { start: 2023, end: 2029 },
              },
              loc: { start: 2023, end: 2029 },
            },
            loc: { start: 2023, end: 2030 },
          },
          directives: [],
          loc: { start: 1911, end: 2030 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateReview",
            loc: { start: 2033, end: 2045 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2046, end: 2048 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2050, end: 2052 },
                  },
                  loc: { start: 2050, end: 2052 },
                },
                loc: { start: 2050, end: 2053 },
              },
              directives: [],
              loc: { start: 2046, end: 2053 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "productId",
                loc: { start: 2055, end: 2064 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "ID",
                  loc: { start: 2066, end: 2068 },
                },
                loc: { start: 2066, end: 2068 },
              },
              directives: [],
              loc: { start: 2055, end: 2068 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "headline",
                loc: { start: 2070, end: 2078 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 2080, end: 2086 },
                },
                loc: { start: 2080, end: 2086 },
              },
              directives: [],
              loc: { start: 2070, end: 2086 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "content",
                loc: { start: 2088, end: 2095 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 2097, end: 2103 },
                },
                loc: { start: 2097, end: 2103 },
              },
              directives: [],
              loc: { start: 2088, end: 2103 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "rating",
                loc: { start: 2105, end: 2111 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 2113, end: 2116 },
                },
                loc: { start: 2113, end: 2116 },
              },
              directives: [],
              loc: { start: 2105, end: 2116 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "name",
                loc: { start: 2118, end: 2122 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 2124, end: 2130 },
                },
                loc: { start: 2124, end: 2130 },
              },
              directives: [],
              loc: { start: 2118, end: 2130 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 2132, end: 2137 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String",
                  loc: { start: 2139, end: 2145 },
                },
                loc: { start: 2139, end: 2145 },
              },
              directives: [],
              loc: { start: 2132, end: 2145 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Review",
                loc: { start: 2148, end: 2154 },
              },
              loc: { start: 2148, end: 2154 },
            },
            loc: { start: 2148, end: 2155 },
          },
          directives: [],
          loc: { start: 2033, end: 2155 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteReview",
            loc: { start: 2158, end: 2170 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2171, end: 2173 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2175, end: 2177 },
                  },
                  loc: { start: 2175, end: 2177 },
                },
                loc: { start: 2175, end: 2178 },
              },
              directives: [],
              loc: { start: 2171, end: 2178 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Review",
                loc: { start: 2181, end: 2187 },
              },
              loc: { start: 2181, end: 2187 },
            },
            loc: { start: 2181, end: 2188 },
          },
          directives: [],
          loc: { start: 2158, end: 2188 },
        },
      ],
      loc: { start: 1886, end: 2190 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 2197, end: 2203 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2208, end: 2210 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2212, end: 2214 },
              },
              loc: { start: 2212, end: 2214 },
            },
            loc: { start: 2212, end: 2215 },
          },
          directives: [],
          loc: { start: 2208, end: 2215 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "headline",
            loc: { start: 2218, end: 2226 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2228, end: 2234 },
              },
              loc: { start: 2228, end: 2234 },
            },
            loc: { start: 2228, end: 2235 },
          },
          directives: [],
          loc: { start: 2218, end: 2235 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "content",
            loc: { start: 2238, end: 2245 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2247, end: 2253 },
              },
              loc: { start: 2247, end: 2253 },
            },
            loc: { start: 2247, end: 2254 },
          },
          directives: [],
          loc: { start: 2238, end: 2254 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 2257, end: 2263 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2265, end: 2268 },
              },
              loc: { start: 2265, end: 2268 },
            },
            loc: { start: 2265, end: 2269 },
          },
          directives: [],
          loc: { start: 2257, end: 2269 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2272, end: 2276 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2278, end: 2284 },
              },
              loc: { start: 2278, end: 2284 },
            },
            loc: { start: 2278, end: 2285 },
          },
          directives: [],
          loc: { start: 2272, end: 2285 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2288, end: 2293 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2295, end: 2301 },
              },
              loc: { start: 2295, end: 2301 },
            },
            loc: { start: 2295, end: 2302 },
          },
          directives: [],
          loc: { start: 2288, end: 2302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2305, end: 2314 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2316, end: 2322 },
              },
              loc: { start: 2316, end: 2322 },
            },
            loc: { start: 2316, end: 2323 },
          },
          directives: [],
          loc: { start: 2305, end: 2323 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2326, end: 2335 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2337, end: 2343 },
              },
              loc: { start: 2337, end: 2343 },
            },
            loc: { start: 2337, end: 2344 },
          },
          directives: [],
          loc: { start: 2326, end: 2344 },
        },
      ],
      loc: { start: 2192, end: 2346 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 2352, end: 2357 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2347, end: 2357 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2364, end: 2372 },
      },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 2359, end: 2372 },
    },
  ],
  loc: { start: 0, end: 2373 },
} as unknown as DocumentNode;
