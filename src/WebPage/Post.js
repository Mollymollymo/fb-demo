import "./Post.css";
import PostItem from "./PostItem";

const Post = () => {
  return (
    <div>
      <PostItem
        posterImg="https://scontent.ftpe3-1.fna.fbcdn.net/v/t39.30808-6/327712039_3388372598115396_5374485135729589327_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wWCbHjNtj3YAX-56u0-&_nc_ht=scontent.ftpe3-1.fna&oh=00_AfBY5FNpJ7ljrFQKsD_5oqfn6RO8nzZpHxcPW11tXP1waw&oe=654A38C7"
        posterName="John Mayer"
        time="10月31日上午7:48"
        title="Dallas, TX - the first of three shows in Texas, and a really wonderful one at that. Thanks for the clever sign requests. You keep me on my toes every night."
        postImg="https://scontent.ftpe3-2.fna.fbcdn.net/v/t39.30808-6/397963553_904014594424073_380871802194833982_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0ooO6hLASCMAX-E0rTE&_nc_ht=scontent.ftpe3-2.fna&oh=00_AfCVukrv-PtGeX5RgNDb7Ik_H72FuS6VBPCdbO2iiMX6jQ&oe=654A1A12"
        likesNum="5,914"
        commentNum="1,167則留言"
        shareNum="173次分享"
      />
      <PostItem
        posterImg="https://api.harpersbazaar.com.hk/var/site/storage/images/_aliases/img_640_w/fashion/girl-next-door-fashion/node_191249/2628795-1-chi-HK/_1.jpg"
        posterName="Doris"
        time="1天前"
        title="Happy Halloween!!"
        postImg="https://live.staticflickr.com/65535/53282203190_3e28aa6cf3_b.jpg"
        likesNum="779"
        commentNum="4則留言"
        shareNum="1次分享"
      />
      <PostItem
        posterImg="https://stickershop.line-scdn.net/stickershop/v1/product/22656808/LINEStorePC/main.png?v=1"
        posterName="柴犬大學"
        time="1天前"
        title="把球撿回來有獎...獎勵再撿一次"
        postImg="https://photo-static-api.fotomore.com/creative/vcg/400/new/VCG41N1681418074.jpg?uid=493&timestamp=1695335149&sign=8d0813e575b9ea8853e729734c41e24c"
        likesNum="2,017"
        commentNum="30則留言"
        shareNum="397次分享"
      />
    </div>
  );
};

export default Post;
