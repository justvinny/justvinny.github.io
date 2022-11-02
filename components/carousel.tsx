import styles from "../styles/components/carousel.module.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

interface ItemWithIndex {
  path: string;
  index: number;
}

interface Props {
  items: Array<string>;
}

const ITEMS_PER_PAGE = 4;
const DEFAULT_PAGE_NUM = 1;

const Carousel = ({ items }: Props) => {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const itemsWithIndex = items.map((path, index) => {
    return { path, index };
  });
  const [carouselItems] = useState<Array<ItemWithIndex>>(itemsWithIndex);
  const [selectedCarouselItem, setCarouselItem] =
    useState<ItemWithIndex | null>(items.length > 0 ? carouselItems[0] : null);
  const [carouselItemsPage, setCarouselItemsPage] = useState(DEFAULT_PAGE_NUM);

  const selectCarouselItem = (item: ItemWithIndex) => () => {
    setCarouselItem(item);
  };

  const CarouseItemOptions = () => {
    const startIndex = carouselItemsPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    const endIndex =
      carouselItemsPage === totalPages
        ? items.length
        : carouselItemsPage * ITEMS_PER_PAGE;

    if (items.length <= 0) return <></>;
    return (
      <>
        {itemsWithIndex.slice(startIndex, endIndex).map((item) => (
          <div
            className={
              item.index === selectedCarouselItem?.index
                ? styles.selectedCarouselItem
                : ""
            }
            style={{ backgroundImage: `url(${item.path})` }}
            onClick={selectCarouselItem(item)}
          />
        ))}
      </>
    );
  };

  const hasPrevious = () => carouselItemsPage > DEFAULT_PAGE_NUM;

  const hasNext = () => carouselItemsPage < totalPages;

  const previousPage = () => {
    if (hasPrevious()) setCarouselItemsPage(carouselItemsPage - 1);
  };

  const nextPage = () => {
    if (hasNext()) setCarouselItemsPage(carouselItemsPage + 1);
  };

  return (
    <div className={styles.carousel}>
      <div
        style={{
          backgroundImage: `url(${selectedCarouselItem?.path})`,
        }}
      />
      <div className={styles.carouselPicker}>
        <div onClick={previousPage}>
          <Icon
            path={mdiChevronLeft}
            size={2.5}
            className={`${styles.carouselPickerArrow} ${
              hasPrevious() ? styles.enabled : styles.disabled
            }`}
          />
        </div>
        <div className={styles.carouselItemsContainer}>
          <CarouseItemOptions />
        </div>
        <div onClick={nextPage}>
          <Icon
            path={mdiChevronRight}
            size={2.5}
            className={`${styles.carouselPickerArrow} ${
              hasNext() ? styles.enabled : styles.disabled
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
