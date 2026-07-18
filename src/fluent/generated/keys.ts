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
                }
            }
        }
    }
}
