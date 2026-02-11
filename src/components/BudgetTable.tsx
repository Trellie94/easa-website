interface BudgetCategory {
  category: string;
  items: { name: string; amount: string }[];
}

const budgetData: BudgetCategory[] = [
  {
    category: "Build Costs",
    items: [
      { name: "Materials", amount: "TBC" },
      { name: "Labour", amount: "TBC" },
      { name: "Subcontractors", amount: "TBC" },
      { name: "FFE (Furniture, Fixtures & Equipment)", amount: "TBC" },
      { name: "Groundworks", amount: "TBC" },
      { name: "Water & Utilities", amount: "TBC" },
      { name: "Solar", amount: "TBC" },
    ],
  },
  {
    category: "Project Delivery",
    items: [
      { name: "Travel", amount: "TBC" },
      { name: "Insurance", amount: "TBC" },
      { name: "Accommodation", amount: "TBC" },
      { name: "Filming", amount: "TBC" },
      { name: "Food", amount: "TBC" },
      { name: "Health & Safety", amount: "TBC" },
      { name: "School Equipment", amount: "TBC" },
    ],
  },
];

export default function BudgetTable() {
  return (
    <div className="bg-white rounded-2xl border border-sand-dark overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-sand">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-warm-grey">
                Item
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-warm-grey text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {budgetData.map((cat) => (
              <>
                <tr key={cat.category}>
                  <td
                    colSpan={2}
                    className="px-6 py-3 bg-sand/50 font-heading text-base text-charcoal"
                  >
                    {cat.category}
                  </td>
                </tr>
                {cat.items.map((item) => (
                  <tr
                    key={`${cat.category}-${item.name}`}
                    className="border-t border-sand"
                  >
                    <td className="px-6 py-3 text-sm text-warm-grey pl-10">
                      {item.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-warm-grey-light text-right">
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </>
            ))}
            <tr className="border-t-2 border-forest/20 bg-sand/30">
              <td className="px-6 py-4 font-heading text-lg text-charcoal">
                Total Project Budget
              </td>
              <td className="px-6 py-4 font-heading text-lg text-charcoal text-right">
                TBC
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
