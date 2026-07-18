import { ApplicationMenu, Record } from "@servicenow/sdk/core";
import { x_2159985_training_lists } from "../tables/training-lists.now";

// Explicit "Training Management" section in the Application Navigator.
// The now.config.json "menu" sys_id (2abc21f7...) does NOT render as a visible
// navigator section on the instance, so we define our own menu here. This is the
// menu that actually showed up in the navigator.
export const trainingManagementMenu = ApplicationMenu({
  $id: Now.ID["training_management_menu"],
  title: "Training Management",
  hint: "Training Management application",
  description: "Working with Training Tickets",
  active: true,
});

// Module: Training Lists list view (scoped table). LIST view lets users open the
// list and create records via the "New" button.
Record({
  $id: Now.ID["training_lists_module"],
  table: "sys_app_module",
  data: {
    title: "Training Lists",
    application: trainingManagementMenu,
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
    application: trainingManagementMenu,
    link_type: "LIST",
    name: "u_training_order",
    active: true,
    order: 200,
  },
});
