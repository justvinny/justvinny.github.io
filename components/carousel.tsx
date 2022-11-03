import styles from "../styles/components/carousel.module.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight, mdiPlay } from "@mdi/js";
import YouTube from "react-youtube";

interface ItemWithIndex {
  path: string;
  index: number;
}

interface Props {
  images: Array<string>;
  youtubeIds?: Array<string>;
}

const ITEMS_PER_PAGE = 4;
const DEFAULT_PAGE_NUM = 1;

const Carousel = ({ images, youtubeIds }: Props) => {
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const youtubeIdsWithIndex =
    youtubeIds?.map((path, index) => {
      return { path, index };
    }) ?? [];
  const imagesWithIndex = images.map((path, index) => {
    return { path, index: index + (youtubeIds?.length ?? 0) };
  });
  const itemsWithIndex = [...youtubeIdsWithIndex, ...imagesWithIndex];

  const [carouselItems] = useState<Array<ItemWithIndex>>(itemsWithIndex);
  const [selectedCarouselItem, setCarouselItem] = useState<ItemWithIndex>(
    images.length > 0 ? carouselItems[0] : { path: "", index: 0 }
  );
  const [carouselItemsPage, setCarouselItemsPage] = useState(DEFAULT_PAGE_NUM);

  const selectCarouselItem = (item: ItemWithIndex) => () => {
    setCarouselItem(item);
  };

  const CarouseItemOptions = () => {
    const startIndex = carouselItemsPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;
    const endIndex =
      carouselItemsPage === totalPages
        ? images.length + (youtubeIds?.length ?? 0)
        : carouselItemsPage * ITEMS_PER_PAGE;

    if (itemsWithIndex.length <= 0) return <></>;
    return (
      <>
        {itemsWithIndex.slice(startIndex, endIndex).map((item) => (
          <div
            className={
              item.index === selectedCarouselItem?.index
                ? styles.selectedCarouselItem
                : ""
            }
            style={{
              backgroundImage: `url(${
                isSelectedItemAYouTubeId(item.index)
                  ? `https://img.youtube.com/vi/${item.path}/default.jpg`
                  : item.path
              })`,
            }}
            onClick={selectCarouselItem(item)}
            key={item.path}
          >
            {isSelectedItemAYouTubeId(item.index) ? (
              <Icon path={mdiPlay} size={1.5} color="white" />
            ) : (
              <></>
            )}
          </div>
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

  const isSelectedItemAYouTubeId = (
    index: number = selectedCarouselItem.index
  ) => youtubeIds !== undefined && index < youtubeIds.length;

  return (
    <div className={styles.carousel}>
      {isSelectedItemAYouTubeId() ? (
        <YouTube
          videoId={selectedCarouselItem.path}
          iframeClassName={styles.viewedCarouselItem}
          className={styles.viewedCarouselItem}
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${selectedCarouselItem.path})`,
          }}
          className={styles.viewedCarouselItem}
        />
      )}
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
