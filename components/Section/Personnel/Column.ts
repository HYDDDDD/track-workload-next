import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import parse from "html-react-parser";

import { IUserDataProps } from "@/types/user/user.types";

const columnHelper = createColumnHelper<IUserDataProps>();

// _MOCK
const userContext = "1";

// export const UserColumns: ColumnDef<IUserDataProps, string>[] = [
//   columnHelper.accessor("firstName", {
//     header: "ชื่อ",
//     cell: (info) => info.getValue(),
//   }),
//   // columnHelper.accessor("activity.category", {
//   //   header: "ประเภทภาระงาน",
//   //   cell: (info) => {
//   //     // const activityCategory =
//   //     //   info.row.original.activity?.[0]?.category || "N/A";

//   //     // return activityCategory;

//   //     // info.getValue(),

//   //     if (userContext === info.row.original.userID) {
//   //       if (
//   //         info.row.original.activity &&
//   //         info.row.original.activity.length > 0
//   //       ) {
//   //         const activityCategory = info.row.original.activity;
//   //         // const category = new Array();

//   //         // for (let index = 0; index < activityCategory.length; index++) {
//   //         //   const element = activityCategory[index].category;

//   //         //   console.log(element);
//   //         //   category.push(parse(`<td>${element}</td>`));
//   //         //   // return element;
//   //         // }

//   //         // return category;

//   //         for (let index = 0; index < activityCategory.length; index++) {
//   //           const element = activityCategory[index].category;

//   //           return element;
//   //         }
//   //       }
//   //     }
//   //   },
//   // }),
//   columnHelper.group({
//     header: "ประเภทภาระงาน",
//     columns:[
//     ]
//   })
// ];

export const UserColumns: ColumnDef<IUserDataProps, string>[] = [
  columnHelper.accessor("firstName", {
    header: "ชื่อ",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("activity.category", {
    header: "ประเภทภาระงาน",
    cell: (info) => {
      // const activityCategory =
      //   info.row.original.activity?.[0]?.category || "N/A";

      // return activityCategory;

      // info.getValue(),

      if (userContext === info.row.original.userID) {
        if (
          info.row.original.activity &&
          info.row.original.activity.length > 0
        ) {
          const activityCategory = info.row.original.activity;
          const category = new Array();

          for (let index = 0; index < activityCategory.length; index++) {
            const element = activityCategory[index].category;

            category.push(parse(`<td>${element}</td>`));
            // return element;
          }

          return category;

          // for (let index = 0; index < activityCategory.length; index++) {
          //   const element = activityCategory[index].category;

          //   return element;
          // }
        }
      }
    },
  }),
];
