import React from 'react'

import { WeatherTable } from "@components"

import * as S from './tabs.styles'

const TABS = {
    1: <WeatherTable time='hourly' key={1} />,
    2: <WeatherTable time='daily' key={2} />
}

const Tabs = (props) => {
    const [currentTab, setCurrentTab] = React.useState(1)
    
    return (
        <S.Container {...props}>
            <S.TabsHeader>
                {
                    ['Today', 'This Week']
                    .map((item, index) => 
                        <S.TabLink
                        key={index}
                        current={currentTab === index + 1}
                        onClick={() => setCurrentTab(index + 1)}
                        >{item}</S.TabLink>
                    )
                }
            </S.TabsHeader>
            {
                TABS[currentTab]
            }
        </S.Container>
    )
}

export default Tabs