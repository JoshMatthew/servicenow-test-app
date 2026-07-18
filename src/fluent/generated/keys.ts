import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '8b25016ccb264e41b40a3a627c792a0b'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '3650cc0b5d51467f9f2b19bb061b5997'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '62aa44aac0b14cb8a597631e1e73f3fb'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '7b7d00d8c12e4dca83c508085c82af56'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'fb6444dbf9264640befdec5fd7cc5bbd'
                    }
                    training_lists_module: {
                        table: 'sys_app_module'
                        id: '9113a7821f6148b6b90e631228c558d0'
                    }
                    training_management_menu: {
                        table: 'sys_app_application'
                        id: '495b72a958e9474f8dae9d2b7ae9f433'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '072fddf4c4114a248fc61cc2228cc6de'
                        key: {
                            name: 'x_2159985_training_lists'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14ba276566574caba9b70fa3bb1587bc'
                        key: {
                            name: 'x_2159985_training_lists'
                            element: 'training_description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c12eb05d4ad4b11895666a247af49fa'
                        key: {
                            name: 'x_2159985_training_lists'
                            element: 'training_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ba58ce5c1d4467ea12ad8ce16fe682a'
                        key: {
                            name: 'x_2159985_training_lists'
                            element: 'training_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '611fe24d21844256b7d56be439df3cf4'
                        key: {
                            name: 'x_2159985_training_lists'
                            element: 'training_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aeb079a7dad745e1a8829edb3e86b0ec'
                        key: {
                            name: 'x_2159985_training_lists'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd393b69098b1482c8d61e536f9357f15'
                        key: {
                            name: 'x_2159985_training_lists'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd9911f264b644fc4a81d7b783cefa142'
                        key: {
                            name: 'x_2159985_training_lists'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
