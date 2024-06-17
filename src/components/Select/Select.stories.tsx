import {action} from '@storybook/addon-actions';

import {Select} from './Select';
import React, {useState} from "react";


export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2')


    return (
            <>
                <Select value={value}
                        onChange={setValue}
                        items={[
                            {value: '1', title: 'Moscow'},
                            {value: '2', title: 'Minsk'},
                            {value: '3', title: 'Kiev'},
                        ]}/>
            </>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
            <>
                <Select onChange={setValue}
                        value={value}
                        items={[
                            {value: '1', title: 'Moscow'},
                            {value: '2', title: 'Minsk'},
                            {value: '3', title: 'Kiev'},
                        ]}/>
            </>
    )
}





// export const CollapsedSelect = () => {
//     return (
//         <div>
//             <div onChange={action('click to open')}>Moscow</div>
//         </div>
//     )
// }
//
// export const OpenedSelect = () => {
//     const [items, setItems] = useState([
//         {title: 'Moscow', value: 1},
//         {title: 'Minsk', value: 2},
//         {title: 'Kiev', value: 3},
//     ])
//
//     return (
//         <div>
//             <div onChange={action('click to open')}>Moscow</div>
//             {
//                 items.map((item, index) => {
//                     if (index !== 0) {
//                         return (
//                             <div>{item.title}</div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     )
// }
//
// export const SelectDemo = () => {
//     const items = [
//         {title: 'Moscow', value: 1},
//         {title: 'Minsk', value: 2},
//         {title: 'Kiev', value: 3},
//     ]
//
//     const [collapsed, setCollapsed] = useState<boolean>(true)
//
//     const [value, setValue] = useState(items[0])
//
//     return (
//         <div>
//             <div onClick={() => setCollapsed(!collapsed)}>{value.title}</div>
//             {
//                 !collapsed && items.map((item, index) => {
//                     const changeValue = () => {
//                         setValue(items[index])
//                         setCollapsed(true)
//                     }
//
//                     if (item.title !== value.title) {
//                         return (
//                             <div key={index} onClick={changeValue}>{item.title}</div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     )
// }