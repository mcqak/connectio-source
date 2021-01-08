import React, { useState } from 'react';

import MainNav from './MainNav'
import PageHeader from './PageHeader'
import RangeBlock from './RangeBlock'
import AdsetList from './AdsetList'
import PageFooter from './PageFooter'

const AdsetsPage = () => {

    const [rangeValue, setRangeValue] = useState(6)

    const undo = () => {
        setRangeValue(6)
    }

    return (
        <div>
            <MainNav />
            <PageHeader undo={undo} />
            <RangeBlock rangeValue={rangeValue} setRangeValue={setRangeValue}/>
            <AdsetList rangeValue={rangeValue} />
            <PageFooter />
        </div>
    )
}



export default AdsetsPage
