import { Masonry } from './masonry';
import { LayoutModes } from './layout-modes.enum';

export interface IsotopeOptions {

  /**
   * Specifies which child elements will be used as item elements in the layout.
   * We recommend always setting itemSelector.
   * itemSelector is useful to exclude sizing elements or other elements that are not part of the layout.
   */
  itemSelector?: string;

  /**
   * Sets the layout mode used to position items. Default is layoutMode: 'masonry' See Layout modes.
   */
  layoutMode?: string;

  /**
   * The default layout mode. Items are arranged in a vertically cascading grid.
   */
  masonry?: Masonry;

  /**
   * Sets item positions in percent values, rather than pixel values.
   * percentPosition: true works well with percent-width items, as items will not transition their position on resize.
   */
  percentPosition?: boolean;

  /**
   * Specifies which elements are stamped within the layout. Isotope will layout items around stamped elements.
   * The masonry, packery, and masonryHorizontal layout modes support stamping.
   * The stamp option stamps elements only when the Isotope instance is first initialized. You can stamp additional elements afterwards with the stamp method.
   */
  stamp?: string;

}
