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

// ---------------------------------------------------------------------------
// Training Lists (scoped table) - a single list module.
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Training Order (global u_training_order, extends Task). Mirrors the standard
// Task module set the App Engine wizard auto-generates: a separator group with
// Create New / Open / Open - Unassigned / Closed / All.
// ---------------------------------------------------------------------------

// Separator: renders the collapsible "Training Order" group. Modules that follow
// it (by order) appear under it.
Record({
  $id: Now.ID["training_order_separator"],
  table: "sys_app_module",
  data: {
    title: "Training Order",
    application: trainingManagementMenu,
    link_type: "SEPARATOR",
    active: true,
    order: 200,
  },
});

// Create New: opens a blank Training Order form.
Record({
  $id: Now.ID["training_order_create_new"],
  table: "sys_app_module",
  data: {
    title: "Create New",
    application: trainingManagementMenu,
    link_type: "NEW",
    name: "u_training_order",
    active: true,
    order: 210,
  },
});

// Open: active tickets.
Record({
  $id: Now.ID["training_order_open"],
  table: "sys_app_module",
  data: {
    title: "Open",
    application: trainingManagementMenu,
    link_type: "FILTER",
    name: "u_training_order",
    filter: "active=true",
    active: true,
    order: 220,
  },
});

// Open - Unassigned: active tickets with no assignment group.
Record({
  $id: Now.ID["training_order_open_unassigned"],
  table: "sys_app_module",
  data: {
    title: "Open - Unassigned",
    application: trainingManagementMenu,
    link_type: "FILTER",
    name: "u_training_order",
    filter: "active=true^assignment_groupISEMPTY",
    active: true,
    order: 230,
  },
});

// Closed: inactive tickets.
Record({
  $id: Now.ID["training_order_closed"],
  table: "sys_app_module",
  data: {
    title: "Closed",
    application: trainingManagementMenu,
    link_type: "FILTER",
    name: "u_training_order",
    filter: "active=false",
    active: true,
    order: 240,
  },
});

// All: every Training Order record.
Record({
  $id: Now.ID["training_order_all"],
  table: "sys_app_module",
  data: {
    title: "All",
    application: trainingManagementMenu,
    link_type: "LIST",
    name: "u_training_order",
    active: true,
    order: 250,
  },
});
