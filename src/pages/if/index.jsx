// // import React from "react";
// import { Button, Flex } from 'antd';
// import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
// import { LoadOutlined } from '@ant-design/icons';
// import React, { useState } from 'react';
// import {
//     AppstoreOutlined,
//     ContainerOutlined,
//     DesktopOutlined,
//     MailOutlined,
//     MenuFoldOutlined,
//     MenuUnfoldOutlined,
//     PieChartOutlined,
// } from '@ant-design/icons';
// // import { Button, Menu } from 'antd';
// const items = [
//     { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
//     { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
//     { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
//     {
//         key: 'sub1',
//         label: 'Navigation One',
//         icon: <MailOutlined />,
//         children: [
//             { key: '5', label: 'Option 5' },
//             { key: '6', label: 'Option 6' },
//             { key: '7', label: 'Option 7' },
//             { key: '8', label: 'Option 8' },
//         ],
//     },
//     {
//         key: 'sub2',
//         label: 'Navigation Two',
//         icon: <AppstoreOutlined />,
//         children: [
//             { key: '9', label: 'Option 9' },
//             { key: '10', label: 'Option 10' },
//             {
//                 key: 'sub3',
//                 label: 'Submenu',
//                 children: [
//                     { key: '11', label: 'Option 11' },
//                     { key: '12', label: 'Option 12' },
//                 ],
//             },
//         ],
//     },
// ];
// const Home = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const toggleCollapsed = () => {
//         setCollapsed(!collapsed);
//     };
//     return (
//         <div>
//             <Flex gap="small" wrap>
//                 <Button type="primary">Primary Button</Button>
//                 <Button>Default Button</Button>
//                 <Button type="dashed">Dashed Button</Button>
//                 <Button type="text">Text Button</Button>
//                 <Button type="link">Link Button</Button>
//             </Flex>
//             <div style={{ width: 256 }}>
//                 <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
//                     {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//                 </Button>
//                 <Menu
//                     defaultSelectedKeys={['1']}
//                     defaultOpenKeys={['sub1']}
//                     mode="inline"
//                     theme="dark"
//                     inlineCollapsed={collapsed}
//                     items={items}
//                 />
//             </div>
//         </div>
//     );
// };
// export default Home;