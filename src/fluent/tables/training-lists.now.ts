import { Table, StringColumn } from "@servicenow/sdk/core";

// Training Lists tracks trainees in the Training Management app.
// The exported variable name MUST match the `name` property exactly.
// `x_2159985_training_lists` = scope prefix (x_2159985_training_) + `lists`, 24 chars (<= 30 limit).
export const x_2159985_training_lists = Table({
  name: "x_2159985_training_lists",
  label: "Training Lists",
  display: "training_name", // records identify by the training name in lists/references
  extensible: false, // no other table may extend this one
  // No `autoNumber` block and no `number` column -> auto numbering stays off.
  schema: {
    training_name: StringColumn({
      label: "Training Name",
      mandatory: true,
    }),
    training_description: StringColumn({
      label: "Training Description",
      maxLength: 1000, // >= 255 renders as a multi-line text field
    }),
  },
});
