import React from 'react'

import { WeatherTable, CitiesPreview } from "@components"

import * as S from './tabs.styles'

const TABS = {
    1: <CitiesPreview />,
    2: <WeatherTable time='daily' />,
    3: <WeatherTable time='hourly' />
}

const Tabs = (props) => {
    const [currentTab, setCurrentTab] = React.useState(2)
    
    return (
        <S.Container {...props}>
            <S.TabsHeader>
                {
                    ['Cities', 'Daily', 'Hourly']
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