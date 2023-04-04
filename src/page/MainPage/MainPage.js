import React, {useEffect, useState} from 'react';
import style from './mainPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getPhotos, photosSelect} from "../../redux/slices/photosSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const MainPage = () => {
    const dispatch = useDispatch()
    const {photos, load} = useSelector(photosSelect)
    const [more, setMore] = useState(true)

    const fetchPhoto = () => {
        if (photos.length >= 10){
            setMore(false)
            return
        }
        dispatch(getPhotos())
    }


    useEffect(() => {
        dispatch(getPhotos({
            limit: 5,
            page: 1
        }))
    }, [])
    return (
        <div>
            <h2>Photos</h2>
            <ul className={style.lists}>
            <InfiniteScroll
                dataLength={photos.length}
                next={fetchPhoto}
                hasMore={more}
            >
                    {
                            photos.map(i => <li className={style.list} key={i?.id}>
                                <div>
                                    <img src={i?.image} alt=""/>
                                </div>
                                <h6>{i?.title}</h6>
                            </li>)
                    }
            </InfiniteScroll>
            </ul>
        </div>
    );
};

export default MainPage;