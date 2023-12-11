import { Carousel } from "./components/carousel";
import { ExploreTopBooks } from "./components/exploreTopBooks";
import { Heroes } from "./components/heroes";
import { LibraryServices } from "./components/libraryServices";

export const HomePage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heroes />
      <LibraryServices />
    </>
  );
};
