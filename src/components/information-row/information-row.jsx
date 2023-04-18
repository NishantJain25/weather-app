import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectPreferences } from "../../store/preferences/preferences.selector"
import "./information-row.css"

const InformationRow = ({ data }) => {
	const defaultRowStyle = {
		opacity: "1",
		transform: "translateY(0%)",
	}
	const [containerState, setContainerState] = useState({
		rowStyle: defaultRowStyle,
		information: data,
	})
	const { speed, temperature } = useSelector(selectPreferences)
	useEffect(() => {
		setContainerState((state) => {
			return {
				...state,
				rowStyle: { opacity: "0", transform: "translateY(-10%)" },
			}
		})
		setTimeout(() => {
			setContainerState({ rowStyle: defaultRowStyle, information: data })
		}, 500)
	}, [data])

	return (
		<div className="row" id="information-row" style={containerState.rowStyle}>
			{containerState.information.map((interval, index) => (
				<div className="info-container" key={index}>
					<p id="date-time">
						{index === 12
							? "12 noon"
							: index === 0
							? "12:00 am"
							: index > 12
							? index - 12 + ":00 pm"
							: index + ":00 am"}
					</p>

					<div id="condition">
						<img src={interval.condition.icon} />
						<p id="condition">{interval.condition.text}</p>
					</div>

					<p id="temp">
						{temperature === "c" ? interval.temp_c : interval.temp_f}
						<span>&#9900;</span>
					</p>
				</div>
			))}
		</div>
	)
}

export default InformationRow
