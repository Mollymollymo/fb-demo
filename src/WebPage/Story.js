import "./Story.css";
import StoryItem from "./StoryItem";

const Story = () => {
  return (
    <div className="story">
      <StoryItem
        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMz7RPw1Ln-AKDFP-hrexFZQLr8x7IJnHZEiZMeW7JylGE7PJSXNZ_1DQ6gFB3bzLt3ZY&usqp=CAU"
        title="建立限時動態"
      />
      <StoryItem
        imgUrl="https://storage.googleapis.com/futurecity-cms-cwg-tw/ckeditor/202307/ckeditor-64c1df5d3b828.jpg"
        title="Jimmy"
      />
      <StoryItem
        imgUrl="https://media.zenfs.com/zh-TW/grinews_574/3eff25bc82173cc084925c5d7aeed0bc"
        title="Jan"
      />
      <StoryItem
        imgUrl="https://intl.rakuten-static.com/b/tw/assets/event/xmas/2019/index/c1.jpg"
        title="Doris"
      />
    </div>
  );
};

export default Story;
