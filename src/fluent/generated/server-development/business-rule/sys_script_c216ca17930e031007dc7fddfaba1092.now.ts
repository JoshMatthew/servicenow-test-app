import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['c216ca17930e031007dc7fddfaba1092'],
    name: 'Training Management - Auto Assignment',
    table: 'u_training_order',
    when: 'display',
    action: [],
    filterCondition: 'location=123c49b037d0200044e0bfc8bcbe5dd3^EQ',
    setFieldValue: 'priority=2^assignment_group=049e6d17934a031007dc7fddfaba102c^EQ',
})
