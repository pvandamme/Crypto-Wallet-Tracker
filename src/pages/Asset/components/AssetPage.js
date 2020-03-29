import React from 'react'
import AssetTopSection from './AssetTopSection'
import AssetChart from './AssetChart'
import SelectTimeframe from './SelectTimeFrame/SelectTimeFrame'

const AssetPage = () => {
	return (
		<main className="asset">
			<AssetTopSection />
			<SelectTimeframe />
			<AssetChart />
		</main>
	)
}

export default AssetPage
