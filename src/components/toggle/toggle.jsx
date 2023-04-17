import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import "./toggle.css"

const Toggle = ({ setterFunction, values, label }) => {
	const dispatch = useDispatch()
	const toggleRef = useRef(false)
	const changeHandler = (e) => {
		toggleRef.current.checked
			? dispatch(setterFunction(values[1]))
			: dispatch(setterFunction(values[0]))
	}
	return (
		<div className="pref-row">
			<p>{label}</p>
			<label className="toggle">
				<input type="checkbox" ref={toggleRef} onChange={changeHandler} />
				<span className="slider">
					<p>{values[0].toUpperCase()}</p>
					<p>{values[1].toUpperCase()}</p>
				</span>
			</label>
		</div>
	)
}

export default Toggle
