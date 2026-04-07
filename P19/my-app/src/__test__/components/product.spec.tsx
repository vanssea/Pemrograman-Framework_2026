import { render, screen } from "@testing-library/react"
import { describe, it, expect, jest } from "@jest/globals"
import TampilanProduk from "@/views/product"

jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage(props: Record<string, unknown>) {
    return <img alt={String(props.alt ?? "")} {...(props as never)} />
  },
}))

jest.mock("next/link", () => ({
  __esModule: true,
  default: function MockLink({ href, children, ...props }: { href: string; children: never }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  },
}))

describe("TampilanProduk Component", () => {
  it("renders product list correctly", () => {
    render(
      <TampilanProduk
        products={[
          {
            id: "1",
            name: "Product A",
            price: 12000,
            image: "/product-a.png",
            category: "Category A",
          },
        ]}
      />,
    )

    expect(screen.getByText("Daftar Produk")).toBeTruthy()
    expect(screen.getByText("Product A")).toBeTruthy()
    expect(screen.getByText("Category A")).toBeTruthy()
    expect(screen.getByText("Rp 12.000")).toBeTruthy()
  })
})