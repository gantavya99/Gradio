import {iseEffect,useRef} from 'react';
import {link} from 'react-router-dom';
import {useSelector,useDispatch} from react-redux;
import {Swiper,SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import PlayPause from './PlayPause';
import {PlayPause,setActiveSong} from '../redux/features/playerSlice';
import {useGetTopChartsQuery} from '../redux/services/shazamCore'; 
import 'swiper/css';
import 'swiper/css/free-mode';
const TopPlay = () => (
  <div>TopPlay</div>
);

export default TopPlay;
