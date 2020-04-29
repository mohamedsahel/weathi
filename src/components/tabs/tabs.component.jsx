import React from 'react'

import { WeatherTable } from "@components"

import * as S from './tabs.styles'

const TABS = {
    1: <WeatherTable time='daily' />,
    2: <WeatherTable time='hourly' />,
}

const Tabs = (props) => {
    const [currentTab, setCurrentTab] = React.useState(1)
    const tabsHeader = React.useRef()

    React.useEffect(() => {

    })

    return (
        <S.Container>
            <S.TabsHeader ref={tabsHeader}>
                <S.TabLink
                current={currentTab === 1}
                onClick={() => setCurrentTab(1)}
                >Cities</S.TabLink>
                <S.TabLink
                current={currentTab === 2}
                onClick={() => setCurrentTab(2)}
                >Daily</S.TabLink>
                <S.TabLink
                current={currentTab === 3}
                onClick={() => setCurrentTab(3)}
                >Hourly</S.TabLink>
            </S.TabsHeader>
            {
                TABS[currentTab]
            }
        </S.Container>
    )
}

export default Tabs