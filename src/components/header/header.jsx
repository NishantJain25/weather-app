import React, { useState, useEffect } from "react"
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri"
import { useSelector } from "react-redux"
import Menu from "../menu/menu"
import { selectCurrentLocation } from "../../store/weather/weather.selector"
import "./header.css"

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const locationData = useSelector(selectCurrentLocation)
	
	const { name, region } = locationData
	const handleClick = () => {
		setIsMenuOpen((currentState) => !currentState)
	}
	useEffect(() => {
		const closeMenu = () => {
			setIsMenuOpen(false)
		}
		window.addEventListener("click", () => closeMenu)

		return window.removeEventListener("click", closeMenu)
	}, [])
	return (
		<div className="header">
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
