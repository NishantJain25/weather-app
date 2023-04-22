import React, { useState, useEffect } from "react"
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri"
import { useSelector } from "react-redux"
import Menu from "../menu/menu"
import { selectCurrentLocation } from "../../store/weather/weather.selector"
import "./header.css"

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [opacity, setOpacity] = useState(0)
	const locationData = useSelector(selectCurrentLocation)

	const { name, region } = locationData
	const handleClick = (e) => {
		e.stopPropagation()
		setIsMenuOpen((currentState) => !currentState)
	}
	useEffect(() => {
		const handleScroll = (e) => {
			window.scrollY ? setOpacity(0.2) : setOpacity(0)
		}

		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div
			className="header"
			style={{
				backgroundColor: `rgba(0,0,0,${opacity})`,
				transition: "all 0.3s ease",
				backdropFilter: "blur(6px)",
			}}
		>
			<div
				className={`menu-button ${isMenuOpen ? "active" : ""}`}
				onClick={handleClick}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<Menu isOpen={isMenuOpen} />
			<div className="header-text">
				<h3>{name}</h3>
			</div>
		</div>
	)
}

export default Header
