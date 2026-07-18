import { ApplicationMenu, Record } from "@servicenow/sdk/core";
import { x_2159985_training_lists } from "../tables/training-lists.now";

// Top-level "Training Management" section in the Application Navigator.
export const trainingManagementMenu = ApplicationMenu({
  $id: Now.ID["training_management_menu"],
  title: "Training Management",
  hint: "Training Management application",
  description: "Track trainees and training records",
  active: true,
});

// Module: list view of the Training Lists table. LIST view lets users open the
// list and create new records via the "New" button.
Record({
  $id: Now.ID["training_lists_module"],
  table: "sys_app_module",
  data: {
    title: "Training Lists",
    application: trainingManagementMenu,
    link_type: "LIST",
    name: x_2159985_training_lists.name, // table to list; stays in sync with the table definition
    active: true, // modules default to inactive and must be explicitly enabled
    order: 100,
  },
});
