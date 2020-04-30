import React, { Component } from "react";
import "./BucketItemComponent.scss";

class BucketItemComponent extends Component {
  constructor() {
    super()
    this.state = {
      datas:[
        {
          "itemImg":"https://t1.daumcdn.net/friends/prod/product/20200423173253054_8809681709576_8809681709576_AW_00.jpg?type=thumb&opt=R255x255@2xa",
          "name":"상품명",
          "cost":20000,
        }
      ],
      nums:[1],
    }
  }

  render() {
    const { datas } = this.state;
    return(
      datas.map((data) => (
        <div className="BucketItemComponent">
        <li className="bucketItemLists">
          <div className="bucketLeft">
            <img className ="checkImg" src="https://t1.kakaocdn.net/friends/new_store/ico_checked.png" alt=""/>
            <div className="bucketItem">
              <img className = "itemImg" src={data.itemImg} alt=""/>
              <div className = "opacityWrap" alt=""/>
            </div>
          <span className="itemName">{data.name}</span>
          </div>
          <div className="bucketRight">
            <select className="selectNum"></select>
            <span className="itemCost">{data.cost}원</span>
            <button className="deleteItem"><img className="deleteButton" src="https://t1.kakaocdn.net/friends/new_store/btn_remove.png" alt=""/></button>
          </div>
        </li>
        </div>
      ))
    )
  }
}
export default BucketItemComponent;