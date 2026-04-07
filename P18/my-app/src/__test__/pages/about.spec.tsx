import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "@jest/globals"
import AboutPage from "@/pages/about"

describe("About Page", () => {
	it("renders about page correctly", () => {
		render(<AboutPage />)
		// expect(screen.getByTestId("title").textContent).toBe("About Page")
		expect(screen.getByTestId("title")).toMatchSnapshot()
	})
})
