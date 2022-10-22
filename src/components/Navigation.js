import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation() {
    return ( // a tag의 href는 누를 때마다 리액트가 죽고 화면 전체가 새로고침된다 (href가 페이지 전체를 다리 그리는 속성이기 때문) -> Link 사용
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;