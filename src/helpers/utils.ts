/******************/
// 与业务无关的工具函数
/******************/
import _ from "lodash-es";

/**
 * 获取文件名
 * @param str 文件路径
 */
export function getFileName(str: string) {
  const pos1 = str.lastIndexOf("/");
  const pos2 = str.lastIndexOf(".");
  return str.substring(pos1 + 1, pos2);
}

// 将数组转为对象, 并删除原字段
export function keyBy(list: any[], key: string): object {
  // 1.数组转以 key值 的对象
  const obj = _.keyBy(_.cloneDeep(list), key);
  // 2.删除原 key
  const deleteKey = (obj: object) => _.omit(obj, key);
  return _.mapValues(obj, deleteKey);
}