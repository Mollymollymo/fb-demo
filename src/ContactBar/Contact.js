import "./Contact.css";
import ContactItem from "./ContactItem";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-title">聯絡人</div>
        <div className="contact-content">
          <div className="dot">...</div>
        </div>
      </div>

      <ContactItem
        imgSrc="https://i.pinimg.com/736x/c3/f5/e5/c3f5e54069fb341abce88eff3854f33f.jpg"
        contactName="Bobby Su"
      />
      <ContactItem
        imgSrc="https://www.sanrio.com.tw/wp-content/uploads/2018/09/6.%E6%98%8E%E6%98%9F%E5%AE%B6%E6%97%8F-250x250-01-220x220.png"
        contactName="黃品岑"
      />
      <ContactItem
        imgSrc="https://www.sanrio.co.jp/special/characterranking/2020/assets/img/common/character/tabo.png"
        contactName="柯庭堯"
      />
      <ContactItem
        imgSrc="https://play-lh.googleusercontent.com/Go7F2mpEsEcHPSwKzZwYNcKzn15eBzlwLKiF2BvDqGX021pqLhF9gdT7Lu2DkopxCw=w240-h480-rw"
        contactName="鄭星星"
      />
      <ContactItem
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXA4TMLTTHVsqHBVnYlaHxBj3NRN-7a4_mCA&usqp=CAU"
        contactName="楊健鑫"
      />
      <ContactItem
        imgSrc="https://mall.iopenmall.tw/website/uploads_product/website_5027/P0502700765789_4_6427142.jpeg?hash=95820"
        contactName="葉卉庭"
      />
      <ContactItem
        imgSrc="https://storage.googleapis.com/sticker-prod/Gs0fyMPwi2TP02Szm5Ae/9-1.webp"
        contactName="Justin Hsu"
      />
      <ContactItem
        imgSrc="https://thumb.ac-illust.com/f7/f75bd2f5758c867877e5e08727dc4494_w.jpeg"
        contactName="Jerry Chang"
      />
      <ContactItem
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlToWTNlCdOfZpy70gEbmzn7ccg-924wm56w&usqp=CAU"
        contactName="周俊宏"
      />
      <ContactItem
        imgSrc="https://pbs.twimg.com/media/FYmqxGfXEAAA5Cv.jpg"
        contactName="Andrea Chen"
      />
      <ContactItem
        imgSrc="https://i.pinimg.com/originals/c2/5a/91/c25a911d9ae0341bd69ebdfdee8b1e0b.jpg"
        contactName="林祐生"
      />
      <ContactItem
        imgSrc="https://stickershop.line-scdn.net/stickershop/v1/product/19987/LINEStorePC/main.png?v=1"
        contactName="Anna Kuo"
      />
      <ContactItem
        imgSrc="https://m.shop.7-11.com.tw/mdz_file/item/33/01/04/2306/23060000279G_char_10_230607174456.jpg"
        contactName="廖怡萱"
      />
      <ContactItem
        imgSrc="https://tshop.r10s.com/a50/d1d/dd39/8c16/70e0/1680/0a91/11e4ecabdf0242ac110003.jpg?_ex=486x486"
        contactName="賴志信"
      />
      <ContactItem
        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV6MwDonIkMdXiuHfKVbjmMoaBZQpNmlbJHw&usqp=CAU"
        contactName="陳金環"
      />
      <ContactItem
        imgSrc="https://www.shutterstock.com/image-vector/animal-art-baby-kitty-cute-260nw-2379958169.jpg"
        contactName="陳拔辣"
      />
      <ContactItem
        imgSrc="https://s.yimg.com/ut/api/res/1.2/LYvZue7jpDS9stHx5p888g--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTEwMDt3PTYwMA--/https://s.yimg.com/fy/3788/item/p0181263046433-item-e8b2xf4x0600x0600-m.jpg"
        contactName="Hsuan Ming"
      />
      <ContactItem
        imgSrc="https://i.pinimg.com/originals/cf/a8/3a/cfa83a83a903d4ab2682cef30d983410.jpg"
        contactName="Jing-Yan Zeng"
      />
      <div className="line"></div>
      <div className="chatroom">
        <div className="title">你的社群聊天室</div>
        <ContactItem
          imgSrc="https://media.istockphoto.com/id/1257937576/zh/%E5%90%91%E9%87%8F/%E9%80%9A%E4%BF%A1%E5%9C%96%E7%A4%BA%E8%A8%8A%E6%81%AF%E8%81%8A%E5%A4%A9%E4%BA%92%E5%8B%95.jpg?s=1024x1024&w=is&k=20&c=fMMs8serEunqfez0W2NK0ap1_PQ_GvKWM5Fa1jK7GtQ="
          contactName="Flutter聊聊天"
        />
      </div>
      <div className="line"></div>
      <div className="group">
        <div className="title">群組對話</div>
        <ContactItem
          imgSrc="data:image/jpeg;base64,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"
          contactName="管他十二把金鑰匙吃就對了"
        />
        <ContactItem
          imgSrc="https://cdn-feature.cw.com.tw/image/31eb4c3b-1f77-4bea-8069-b3d89ce7cd2e.jpeg"
          contactName="Stanley Haw、鄭淞祐和其他2個人"
        />
        <ContactItem
          imgSrc="https://content.skyscnr.com/m/36a586dd30061d87/original/taiwan-lanyu-island-sky-and-clouds-gettyimages-584565318.jpg?crop=1224px:647px&quality=100&position=attention"
          contactName="20201018"
        />
      </div>
      <ContactItem
        imgSrc="https://png.pngtree.com/png-vector/20191004/ourmid/pngtree-additional-plus-icon-png-image_1788619.jpg"
        contactName="建立新群組"
      />
    </div>
  );
};

export default Contact;
