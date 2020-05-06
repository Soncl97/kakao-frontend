import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';
import "./PaymentBar.scss";

function PaymentBar() {
  const [itemNum, setItemNum] = useState(0);
  //왜 0으로 안돌아감...?
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/data/paymentBar.json")
    .then( res => res.json())
    .then( res => {
      setData(res.paymentBar[0])
    })
  }, [])
  // 왜 data.paymentBar를 한다음 return 안에서 data[0].name식으로 접근하면 안되는지....ㅜㅜ
  
  function handleCount(num) {
    if(itemNum === 1 && num === -1) return;
    setItemNum(itemNum + num)
  }

    return(
      <div className="PaymentBar">
        <Minus onClick={function(){handleCount(-1)}}>
          <img className={(itemNum === 1) ? "disabled" : "abled"} alt=""/>
        </Minus>
        <ItemCount>{itemNum}</ItemCount>
        <Minus onClick={function(){handleCount(1)}}>
          <img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/product-detail-button-inc-on.svg" alt=""/>
        </Minus>
        <div className="allCost">
          <ItemCost>{data.name}</ItemCost>
          <div>
            <Cost>17,000</Cost>
            <Cost>{data.won}</Cost>
          </div>
        </div>
        <BuyButton>
          <Bucket><img src="https://t1.kakaocdn.net/friends/new_store/2.0/common/product-detail-cart-off.svg" alt=""/></Bucket>
          <GoRight>{data.goRight}</GoRight>
        </BuyButton>
      </div>
    )
  }

  const Minus = styled.button`
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid rgb(227, 229, 232);
  `;

  const ItemCount = styled.button`
    width: 240px;
    background-color: white;
    border: none;
    border-top: 1px solid rgb(227, 229, 232);
    font-weight: bold;
  `;

  const ItemCost = styled.span`
    font-size: 13px;
    font-weight: bold;
    color: #9a9a9e;
  `;
  
  const Cost = styled.span`
    font-size: 15px;
    font-weight: bold;
  `;

  const BuyButton = styled.button`
    display: flex;
    justify-content: space-between;
    width: 360px;
    padding: 0;
    border: none;
  `;

  const shape = css`
    height: 51px;
    background-color: rgb(60, 64, 75);
    border: 1px solid rgb(60, 64, 75);
  `;

  const Bucket = styled.button`
    width: 55px;
    ${shape}
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  `;

  const GoRight = styled.button`
    width: 305px;
    ${shape}
    color: white;
    font-size: 15px;
    font-weight: bold;
  `;

export default PaymentBar;