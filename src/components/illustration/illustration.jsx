import React from "react"
import { TbMist, TbCloudFog, TbSunHigh, TbMoon } from "react-icons/tb"
import {
	BsCloudMoon,
	BsCloudSun,
	BsCloudRain,
	BsCloudLightning,
	BsCloudLightningRain,
} from "react-icons/bs"
import "./illustration.css"

const Illustration = ({ condition, isDay }) => {
	return (
		<>
			{condition === "Sunny" ? (
				<TbSunHigh />
			) : (condition === "Clear") & !isDay ? (
				<TbMoon />
			) : condition === "Partly Cloudy" ? (
				isDay ? (
					<BsCloudSun />
				) : (
					<BsCloudMoon />
				)
			) : condition === "Cloudy" ? (
				<TbCloudFog />
			) : condition.toLowerCase().includes("thunder") ? (
				condition.includes("rain") ? (
					<BsCloudLightningRain />
				) : (
					<BsCloudLightning />
				)
			) : condition.includes("rain") ? (
				<BsCloudRain />
			) : (
				<TbMist />
			)}
		</>
	)
}

export default Illustration
