/**
 * MenuItem interface is used for creation links in left bar menu
 */
export interface MenuItem {
  /**
   * path is the rout url for navigation
   */
  path: string;

  /**
   * title is the text that is shown at the navigation button
   */
  title: string;

  /**
   * icon is the name of material icon for slim menu
   * https://material.io/icons/
   */
  icon: string;

  /**
   * is optional parameter, that means if user have some new notifications on the rout
   */
  counter?: MenuItemCounter;
}

/**
 * MenuItemCounter interface define counter on menu item
 */
export interface MenuItemCounter {
  /**
   * number of new notifications
   */
  count: number;

  /**
   * material icon name for notification
   * https://material.io/icons/
   */
  counterIcon: string;
}

