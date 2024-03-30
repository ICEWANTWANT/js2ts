// (function () {
//     // chrome.contextMenus.create({
//     //     type: 'normal',
//     //     title: '',
//     //     id: 'menu_id',
//     //     contexts: ['all'],
//     //     documentUrlPatterns,
//     //     parentId,
//     // });
//     //background.js

//     //新增一个右键菜单（只创建一次）
//     chrome.runtime.onInstalled.addListener(() => {
//         chrome.contextMenus.create({
//             type: 'normal',
//             title: '测试菜单',
//             id: 'menu_test',
//             contexts: ['all'],
//         });
//     });

//     //右键菜单点击事件处理
//     chrome.contextMenus.onClicked.addListener((info, tab) => {
//         if (info.menuItemId == 'menu_test') {
//             //捕获到点击事件后的具体处理
//             //...

//             alert(999);
//         }
//     });

//     // function handle_menu_click() {
//     //     const url = URL_;
//     //     fetch(url, { method: 'GET' })
//     //         .then((response) => response.json())
//     //         .then((json) => {
//     //             //获取响应结果
//     //             let data = json.data;
//     //             console.log('data:', data);
//     //             //发送消息给Content Script
//     //         })
//     //         .catch((error) => {
//     //             console.log('请求异常，错误信息:', error);
//     //         });
//     // }

//     //发送消息
//     getCurrentTab(function (currentTab) {
//         console.log(currentTab);
//         console.log(currentTab.id);
//         //过滤标签页
//         if (currentTab.url !== 'chrome://newtab/') {
//             chrome.tabs.sendMessage(currentTab.id, { clipboard: data }, (response) => {
//                 console.log(`background收到信息:`, response);
//             });
//         }
//     });
// })();

// //background.js

// "background": {
//     "scripts": ["./js/background.js"],
//     "persistent": false
// },
// "permissions": ["contextMenus", "storage"],
