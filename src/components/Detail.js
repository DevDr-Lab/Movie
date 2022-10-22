import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() { // v6 버전으로는 이렇게 짜야함 (hook을 써야함)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state===null) {
            navigate('/')
        }
    });
    if (location.state) {
        const {title} = location.state;
        return <span>{ title } </span>
    }
}
// componentDidMount() 대신에 useEffect()를 쓰는것이 맞나?

/*
class Detail extends React.Component { // 책버전
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render () {
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        }
        else {
            return null;
        }
    }
}*/

export default Detail;