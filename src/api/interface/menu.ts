/** 菜单树 类型声明 */
export type MenuListTreeVO = {
  children?: Array<MenuListTreeVO>;
  /** 创建时间 */
  createTime?: string;
  /** 菜单编号 */
  menuId?: number;
  /** 菜单图标 */
  icon?: string;
  /** 菜单名称	*/
  menuName?: string;
  /** 菜单类型,可用值:DIR,MENU,BUTTON */
  menuType?: string;
  /**	父菜单编号 */
  parentId?: number;
  /** 菜单路径 */
  path?: string;
  /**	权限 */
  permission?: string;
  /**	排序 */
  sort?: number;
};

/** 菜单新增 类型声明 */
export type MenuSaveOneDTO = {
  /** 菜单图标 */
  icon?: string;
  /** 菜单名称	*/
  menuName?: string;
  /** 菜单类型,可用值:DIR,MENU,BUTTON */
  menuType?: string;
  /**	父菜单编号 */
  parentId?: number;
  /** 菜单路径 */
  path?: string;
  /**	权限 */
  permission?: string;
  /**	排序 */
  sort?: number;
};

/** 菜单修改 类型声明 */
export type MenuUpdateOneDTO = {
  /** 菜单图标 */
  icon?: string;
  /** 菜单编号 */
  menuId?: number;
  /** 菜单名称	*/
  menuName?: string;
  /** 菜单类型,可用值:DIR,MENU,BUTTON */
  menuType?: string;
  /**	父菜单编号 */
  parentId?: number;
  /** 菜单路径 */
  path?: string;
  /**	权限 */
  permission?: string;
  /**	排序 */
  sort?: number;
};

/** 菜单删除 类型声明 */
export type MenuRemoveOneDTO = {
  /** 菜单编号 */
  menuId?: number;
};
