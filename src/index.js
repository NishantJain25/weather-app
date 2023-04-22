import React from "react"
import ReactDOM from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import Homepage from "./routes/homepage/homepage"
import DetailPage from "./routes/detail-page/detail-page"
import { store } from "./store/store"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: "/weather-forecast/:viewDay",
				element: <DetailPage />,
			},
		],
	},
])

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
