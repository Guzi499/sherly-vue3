/*
 * @Author: lihaoyu
 * @Date: 2022-04-18 09:52:49
 * @LastEditTime: 2022-06-08 23:26:27
 * @LastEditors: lihaoyu
 * @Description:
 * @FilePath: /sherly-vue3/src/api/system/user.js
 */
import request from "@/utils/request";

/**获取用户详情 */
export function getUserId(userId) {
  return request({
    url: "/user/get_one?userId=" + userId,
    method: "get",
  });
}

/**用户新增 */
export function addUser(data) {
  return request({
    url: "/user/save_one",
    method: "post",
    data: data,
  });
}

/**用户更新 */
export function updataUser(data) {
  return request({
    url: "/user/update_one",
    method: "put",
    data: data,
  });
}

// 用户删除
export function delMenu(userId) {
  return request({
    url: "/user/remove_one?userId=" + userId,
    method: "delete",
  });
}

/**用户禁用 - 解禁 */
export function disableUser(userId, enable) {
  return request({
    url: `/user/ban_one?userId=${userId}&&enable=${enable}`,
    method: "put"
  });
}

/**用户分页 */
export function pageUser(data) {
  return request({
    url: "/user/list_page",
    method: "get",
    params: data,
  });
}

/**用户导出 */
export function exportUser() {
  return request({
    url: "/user/list_export",
    method: "get",
    responseType: "blob",
  });
}
