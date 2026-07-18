import { Role } from "@servicenow/sdk/core";

// "Training Order" role. Role names must be `<scope>.<name>`.
// Created as a standalone role record; it is not yet wired to any table ACLs.
export const trainingOrderRole = Role({
  name: "x_2159985_training.training_order",
  description: "Training Order role",
});
