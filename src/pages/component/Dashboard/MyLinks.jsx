export const links = [
  {
    name: "Emission",
    submenu: true,
    sublinks: [
      {
        Head: "Scope 1",
        HeadLink: "/scope-i",
        RowSpan: "",
        sublink: [
          { name: "Stationary Combustion", link: "/scope-i/stationary-combustion" },
          { name: "Mobile Combustion", link: "/scope-i/mobile-combustion" },
          { name: "Fugitive Emission", link: "/scope-i/fugitive-emission" },
          { name: "Process Emission", link: "/" },
        ],
      },
      {
        Head: "Scope 3",
        HeadLink: "/scope-iii",
        RowSpan: "row-span-2",
        sublink: [
          { name: "Purchased Goods & Services", link: "/scope-iii", category: "Purchased Goods & Services" },
          { name: "Fuels and Energy Related", link: "/scope-iii", category: "Fuels and Energy Related" },
          { name: "Transportation and Distribution", link: "/scope-iii", category: "Transportation and Distribution" },
          { name: "Waste Generated", link: "/scope-iii", category: "Waste Generated" },
          { name: "Employee Travels", link: "/scope-iii", category: "Employee Travels" },
          { name: "Leased Assets", link: "/scope-iii", category: "Leased Assets" },
          { name: "Sold Products", link: "/scope-iii", category: "Sold Products" },
          { name: "Franchises & Investments", link: "/scope-iii", category: "Franchises & Investments" },
        ],
      },
      {
        Head: "Scope 2",
        HeadLink: "/scope-ii",
        RowSpan: "",
        sublink: [
          { name: "Energy Purchase", link: "/scope-ii/energy-purchase" },
          { name: "Electric Vehicle", link: "/scope-ii/electric-vehicle" },
        ],
      },
    ],
  },
];