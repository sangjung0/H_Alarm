import classNames from 'classnames/bind';
import { useCallback } from 'react';

import alarmItemStyle from './alarmItem.module.scss';
const style = classNames.bind(alarmItemStyle);

/**
 * AlarmItem 컴포넌트. 페이지 우측 위치. AlarmData를 보여주는 기능을 함
 *  
 * @param {Object} param - AlarmItem 컴포넌트의 props
 * @param {Boolean} param.isEdit -
 * @param {Object} param.data - 가공된 alarmData
 * @param {Function} param.remove - 
 * @param {Function} param.setAlarmSelected - AlarmItem이 클릭될 때 수행할 이벤트 함수
 * @returns {JSX.Element} AlarmItem 컴포넌트를 렌더링
 */
const AlarmItem = ({isEdit, data, remove, setAlarmSelected}) => {

    const Date = ({date}) => {
        const dt = date ? `${date.year}-${date.month}-${date.day}` : date.day.join(" ");
        return(
            <>{dt}</>
        );
    }

    const _setAlarmSelected = useCallback(() => {
        setAlarmSelected(data.alarmId);
    },[data.alarmId, setAlarmSelected]);

    return(
        <div className={style('alarm-item')} onClick={_setAlarmSelected}>
            <div>
                <div className={style('circle')}></div>
            </div>
            <div>
                <div>
                    <p>
                        {data.time.isAm ? "오전" : "오후" }
                    </p>
                    <p>
                        {data.time.hour}:{data.time.minute}
                    </p>
                </div>
                <div>
                    <p>
                        {data.name}
                    </p>
                    <p>
                        <Date date={data.date}/>
                    </p>
                </div>
                <div>
                    <p className={style({active: data.method === "E"})}>E</p>
                    <p className={style({active: data.method === "C"})}>C</p>
                    <p className={style({active: data.method === "M"})}>M</p>
                </div>
            </div>
        </div>
    )
}

export default AlarmItem;