import { Record } from "@servicenow/sdk/core";
import { x_2159985_training_lists } from "../tables/training-lists.now";

// The app's primary Application Menu (sys_app_application), sourced from the
// "menu" sys_id in now.config.json. Attaching both modules here keeps them in
// the single "Training Management" navigator section instead of a duplicate one.
const primaryMenu = "2abc21f7735910107419c907fbf6a7d9";

// Module: Training Lists list view (scoped table). LIST view lets users open
// the list and create records via the "New" button.
Record({
  $id: Now.ID["training_lists_module"],
  table: "sys_app_module",
  data: {
    title: "Training Lists",
    application: primaryMenu,
    link_type: "LIST",
    name: x_2159985_training_lists.name,
    active: true,
    order: 100,
  },
});

// Module: Training Order list view. This table lives in GLOBAL scope
// (u_training_order), so it is referenced by name rather than defined here.
Record({
  $id: Now.ID["training_order_module"],
  table: "sys_app_module",
  data: {
    title: "Training Order",
    application: primaryMenu,
    link_type: "LIST",
    name: "u_training_order",
    active: true,
    order: 200,
  },
});
