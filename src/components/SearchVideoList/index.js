import { useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";

//filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState();
  const foundVideos = filterVideos(videos, searchText); //pega videos e filtra por searchText

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <VideoList
        videos={foundVideos}
        emptyHeading={`Sem videos sobre "${searchText}"`}
      />
    </section>
  );
}

export default SearchVideoList;
